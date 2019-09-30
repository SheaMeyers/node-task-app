// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d834799a5d8f6373c29749b")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d834799a5d8f6373c29749b")
    // }, {
    //     $set: {
    //         name: "Mike"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5d8c92a7f60d4310f823f87b") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 28 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(users);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5d834b14639659376ba25d14") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(tasks);
    // })
})