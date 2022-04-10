from pymongo import MongoClient
# pprint library is used to make the output look more pretty
from pprint import pprint
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
import json
client = MongoClient("mongodb+srv://Corgle:CorglePass@cluster0.jwqmo.mongodb.net/Corgle?retryWrites=true&w=majority")
db=client.corgle

with open('output.json') as f:
    file_data = json.load(f)



db.dogs.insert_many(file_data)

#result = db.dogs.find()

#for document in result:
    #print("Dog Name: ", document["name"])
    #print("Description: ", document["description"])


#result = db.dogs.find()
#record = next(result, None)
#if record:
    #print("Dog Name: ", record["name"])
    #print("Description: ", record["description"])
#record = next(result, None)
#if record:
    #print("Dog Name: ", record["name"])
    #print("Description: ", record["description"])

    
