from pymongo import MongoClient
# pprint library is used to make the output look more pretty
from pprint import pprint
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient("mongodb+srv://Corgle:CorglePass@cluster0.jwqmo.mongodb.net/Corgle?retryWrites=true&w=majority")
db=client.CorgleDB

CorgleDB = [
    {
        'name' : 'dog2',
        'description' : 'good dog'
    },
    {
        'name' : 'dog3',
        'description' : 'great dog',
    }
]


db.dogs.insert_many(CorgleDB)


