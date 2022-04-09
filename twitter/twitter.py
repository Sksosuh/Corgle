#pip -r install resources/requirements.txt

from pathlib import Path
import tweepy
import json

RESOURCE_PATH = Path(__file__).parent / "resources"
API_KEYS = RESOURCE_PATH / "keys.json"
OUTPUT_JSON = RESOURCE_PATH / "output.json"


with open(API_KEYS, 'r') as f:
  keys = json.load(f)

#Documentation: https://docs.tweepy.org/en/latest/client.html
client = tweepy.Client(keys["BEARER_TOKEN"])

we_rate_dogs = client.get_user(username="dog_rates"
)

dogs_id = we_rate_dogs.data["id"]
exclusions = ["replies", "retweets"]
page_token = None
tweet_data = []


while page_token != -1:
  dog_tweets = client.get_users_tweets(id=dogs_id,exclude=exclusions,pagination_token=page_token)

  for tweet in dog_tweets.data:
    if "This is" in tweet["text"]:
      tweet_data += [dict(tweet)]

  page_token = -1
  if "next_token" in dog_tweets.meta:
    page_token = dog_tweets.meta["next_token"]




with open(OUTPUT_JSON, "w") as f:
  json.dump(tweet_data, f)




