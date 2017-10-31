// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((results) => {
    //     console.log(results);
    // });

    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((results) => {
    //     console.log(results);
    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });
    // 59f6e947b566d02330a5772a
    // db.collection('Users').deleteMany({ name: 'Andrew' });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID("59f6e947b566d02330a5772a") })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2))
        });

    // db.close();
});