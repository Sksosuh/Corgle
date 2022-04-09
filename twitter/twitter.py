#pip -r install resources/requirements.txt

from pathlib import Path
import tweepy
import json

RESOURCE_PATH = Path(__file__).parent / "resources"
API_KEYS = RESOURCE_PATH / "keys.json"


with open(API_KEYS, 'r') as f:
  keys = json.load(f)

client = tweepy.Client(keys["BEARER_TOKEN"])

we_rate_dogs = client.get_user(username="dog_rates"
)

dogs_id = we_rate_dogs.data['id']
#dog_tweets = client.get_list_tweets(

a = 0


