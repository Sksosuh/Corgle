from pymongo import MongoClient
# pprint library is used to make the output look more pretty
from pprint import pprint
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient("mongodb+srv://Corgle:CorglePass@cluster0.jwqmo.mongodb.net/Corgle?retryWrites=true&w=majority")
db=client.corgle

corgle = [
    {
        'name' : 'dog2',
        'description' : 'good dog'
    },
    {
        'name' : 'dog3',
        'description' : 'great dog',
    }
]


db.dogs.insert_many(corgle)

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

    
