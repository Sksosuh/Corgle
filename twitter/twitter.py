#pip -r install resources/requirements.txt
from pathlib import Path
import tweepy
import json
import re
import random

#Constant Variables
RESOURCE_PATH = Path(__file__).parent / "resources"
API_KEYS = RESOURCE_PATH / "keys.json"
OUTPUT_JSON = RESOURCE_PATH / "output.json"
TWITTER_USERNAME = "dog_rates"

#Dog class member variable documentation:

#id - unique tweet id pulled from twitter, can be used to access more info via tweepy
#name - dog's name to be guessed
#description - provided text to the user to determine dog's name
#source link - url referencing the original tweet
#donation link - if present, link to any donation for the dog
#media links - list of pictures attached to the tweet
#alternate texts - list of alternate texts, matched to each picture by the index
#rating value - current rating value of the dog made by users
#rating count - number of users that have ratted; use for averaging the rating score

class Dog:
  def __init__(self,tweet,media):
    self.dog_tag = tweet.id
    self.name, self.description, self.source_link, self.donation_link = self.parse_text(tweet.text)
    self.media_links, self.alternate_texts = self.parse_media(tweet.attachments["media_keys"],media)
    self.rating_value = 0
    self.rating_count = 0

  #Example format of raw text:
  #This is Dodger. He is epic and poggers. 20/10 https://...
  def parse_text(self,text):
    #beggining and ending index of dog name field
    start_name = 8
    end_name = text.index(".")
    name = text[start_name:end_name].strip()

    #search for constant rating value in the text
    #and find end of description based off that
    rating_pattern = "[0-9]+\/10"
    match = re.search(rating_pattern,text)
    end_desc = match.start()
    desc = text[end_name+2:end_desc].strip()

    #find the beggining of the link which
    #spans the end of the text
    link_pattern = "http"
    match = re.search(link_pattern,text)
    beg_link = match.start()

    #determine if a donation link is present and parse that data
    links = text[beg_link:].split()
    source = links[-1]
    donation = None
    if len(links) > 1:
      donation = links[0]

    return name, desc, source, donation

  #Media is given in a different batch not assigned to its tweet
  #Search through that batch to match media to tweets
  def parse_media(self,media_keys,media):
    local_media, alternate_text = [], []
    for instance in media:
      if instance.media_key in media_keys and instance.type == "photo":
        local_media.append(instance.url)
        alternate_text.append(instance.alt_text)
  
    #We have enough data where we don't need to take tweets
    #without pictures or alternate text
    if len(local_media) == 0 or None in alternate_text:
      raise ValueError("No media present or unsupported media type")
    
    return local_media, alternate_text


#Reading in our API Keys
#Check API_KEYS file for how to access each key
with open(API_KEYS, 'r') as f:
  keys = json.load(f)

#Documentation for client functionality: 
#https://docs.tweepy.org/en/latest/client.html
client = tweepy.Client(keys["BEARER_TOKEN"])
we_rate_dogs = client.get_user(username=TWITTER_USERNAME)
dogs_id = we_rate_dogs.data["id"]

#Documentation for get_user_tweets:
#https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets#All
exclusions = ["replies", "retweets"]
exps = ["attachments.media_keys"]
media = ["media_key", "type", "url", "alt_text"]
page_token = None
doggos = []

#Tweet retrieval and parsing
while page_token != -1:
  dog_tweets = client.get_users_tweets(id=dogs_id,
  exclude = exclusions, expansions = exps,
  media_fields = media, pagination_token = page_token)

  for tweet in dog_tweets.data:
    #Only looking for tweets with this format
    if "This is" == tweet.text[:7]:
      #Don't save tweet if it doesn't fit our
      #predefined format (nonrelevant tweets)
      try:
        doggo = Dog(tweet,dog_tweets.includes["media"])
        doggos += [doggo.__dict__]
      except Exception as exp:
        pass

  #Check and see if further requests can be made
  page_token = -1
  if "next_token" in dog_tweets.meta:
    page_token = dog_tweets.meta["next_token"]

#Randomize now so database can grab in a random order
random.shuffle(doggos)
#Set new IDs for mongo DB compatibility
for index, dog in enumerate(doggos):
  dog["dog_tag"] = index

#Write our doggos to a json file to be loaded into the database
with open(OUTPUT_JSON, "w") as f:
  json.dump(doggos, f, indent=4)