#pip -r install resources/requirements.txt
from pathlib import Path
import tweepy
import json
import re

RESOURCE_PATH = Path(__file__).parent / "resources"
API_KEYS = RESOURCE_PATH / "keys.json"
OUTPUT_JSON = RESOURCE_PATH / "output.json"
TWITTER_USERNAME = "dog_rates"

class Dog:

  def __init__(self, tweet):
    self.name, self.description, self.source_link = self.parse_text(tweet.text)
    #self.media = 
    self.rating_value = 0
    self.rating_count = 0
    #self.source_link = 

  #Example format of raw text:
  #This is Dodger. He is epic and poggers. 20/10 https://...
  def parse_text(self,text):
    #beggining and ending index of dog name field
    start_name = 8
    end_name = text.index(".")

    #search for constant rating value in the text
    #and find end of description based off that
    rating_pattern = "[0-9]+\/10"
    match = re.search(rating_pattern,text)
    end_desc = match.start()

    #find the beggining of the link which
    #spans the end of the text
    link_pattern = "http"
    match = re.search(link_pattern,text)
    beg_link = match.start()
    
    name = text[start_name:end_name].strip()
    desc = text[end_name+2:end_desc].strip()
    link = text[beg_link:]

    return name, desc, link


#Reading in our API Keys
#Check API_KEYS file for how to access each key
with open(API_KEYS, 'r') as f:
  keys = json.load(f)

#Documentation for client functionality: https://docs.tweepy.org/en/latest/client.html
client = tweepy.Client(keys["BEARER_TOKEN"])
we_rate_dogs = client.get_user(username=TWITTER_USERNAME)
dogs_id = we_rate_dogs.data["id"]


#Initialize variables for tweet retrieval
exclusions = ["replies", "retweets"]
page_token = None
tweet_data = []

#Tweet retrieval and parsing
while page_token != -1:
  dog_tweets = client.get_users_tweets(id=dogs_id,exclude=exclusions,pagination_token=page_token)

  for tweet in dog_tweets.data:
    #Only looking for tweets with this format
    if "This is" in tweet["text"]:
      tweet_data += [dict(tweet)]

  page_token = -1
  if "next_token" in dog_tweets.meta:
    page_token = dog_tweets.meta["next_token"]




with open(OUTPUT_JSON, "w") as f:
  json.dump(tweet_data, f)




