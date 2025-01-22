import mongodb from 'mongodb';

const { MongoClient, ObjectId } = mongodb;

const client = new MongoClient('mongodb://localhost:27017');

client.connect()
    .then(connection => {
        const db = connection.db('test');

        const users = db.collection('users');
        const posts = db.collection('posts');

        // users.insertOne({ name: 'Capitán Garfio', email: 'capitan@garfio.com', username: 'capitangarfio', password: '123123123' })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error));

        // users.deleteOne({ _id: new ObjectId('678ff85a5cca2e105cd850ef') })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error));

        // users.updateOne({ _id: new ObjectId('678ffb9af38a3efb6ea1e593') }, { $set: { password: '234234234' } })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error));

        // posts.insertOne({ author: new ObjectId('678eafa4be23e160e3cb0ce4'), image: 'https://i.ytimg.com/vi/9oWEZSL_53U/maxresdefault.jpg', text: 'hola mundo', date: new Date() })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error));

        // Eliminar todos los documentos de una colección
        posts.deleteMany({})
            .then(result => console.log(result))
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));