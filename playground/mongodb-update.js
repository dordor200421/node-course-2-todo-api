// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // 59f87c8e8fce0b1cb3c6632d
    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID('59f87c8e8fce0b1cb3c6632d')
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('59f6e852524880018824abbd')
        }, {
            $set: {
                name: "Andrew"
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    // db.close();
});