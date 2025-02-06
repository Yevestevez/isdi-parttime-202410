import mongodb from 'mongodb'; // Importamos mongodb

const { MongoClient, ObjectId } = mongodb; // Traemos MongoClient y ObjectId desde mongodb mediante desestructuración

const client = new MongoClient('mongodb://localhost:27017'); // Creamos un nuevo cliente mediante una nueva instancia de la clase MongoClient, esto nos permitirá conectar con MongoDB

client.connect() // Conectamos con MongoDB mediante el método .connect
    .then(connection => {
        const db = connection.db('test'); // Usamos la conexión actual (client) para crear una nueva instancia de la db 'test'. Si no existiera, MongoDB la crearía al insertar el primer documento

        const users = db.collection('users'); // Traemos la referencia a la colección 'users' de MongoDB, si no existiera, MongoDB la crearía al insertar el primer documento en ella
        const posts = db.collection('posts'); // Traemos la referencia a la colección 'posts' de MongoDB, si no existiera, MongoDB la crearía al insertar el primer documento en ella

        /*
        Algunos métodos de MongoDB que podemos usar en nuestras db =>

            users.insertOne({ name: 'Capitán Garfio', email: 'capitan@garfio.com', username: 'capitangarfio', password: '123123123' })
                .then(result => console.log(result))
                .catch(error => console.error(error));

            users.deleteOne({ _id: new ObjectId('678ff85a5cca2e105cd850ef') })
                .then(result => console.log(result))
                .catch(error => console.error(error));

            users.updateOne({ _id: new ObjectId('678ffb9af38a3efb6ea1e593') }, { $set: { password: '234234234' } })
                .then(result => console.log(result))
                .catch(error => console.error(error));

            posts.insertOne({ author: new ObjectId('678eafa4be23e160e3cb0ce4'), image: 'https://i.ytimg.com/vi/9oWEZSL_53U/maxresdefault.jpg', text: 'hola mundo', date: new Date() })
                .then(result => console.log(result))
                .catch(error => console.error(error));

            posts.deleteMany({})
                .then(result => console.log(result))
                .catch(error => console.error(error));
        */
    })
    .catch(error => console.error(error)); // Capturamos los posibles errores y los mostramos por consola