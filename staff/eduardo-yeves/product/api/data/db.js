// Importamos fs a nuestro archivo js (File System -> es un módulo nativo de Node.js que proporciona funcionalidades para trabajar con el sistema de archivos. En nuestro caso lo queremos para leer/escribir en los archivos de nuestra base de datos)
import fs from 'fs'; // Antes usábamos require -> const fs = require('fs')

// Creamos el objeto db que será (el gestor de) nuestra base de datos y le añadimos métodos accesores (getter y setter) en la propiedad users.
// get users -> utiliza el método readFileSync de fs (File System) para leer un archivo en una ruta personalizada, en nuestro caso el archivo users.json donde almacenaremos los usuarios en formato JSON
// set users -> utiliza el método writeFileSync de fs para añadir datos a un archivo, en nuestro caso el archivo users.json, lo usaremos para registrar usuarios 
const db = { // creamos el objeto db
    get users() { // creamos el getter en la propiedad users. Podemos llamar al getter usando, por ejemplo: const users = db.users
        const users = fs.readFileSync('./data/users.json', 'utf8'); // declaramos la variable users donde nos traemos nuestro archivo users.json usando el formato utf8

        return JSON.parse(users); // Traduce el objeto JSON a objeto JS, un array (con el método parse) y lo devuelve
    },

    set users(users) { // Podemos llamar al setter usando, por ejemplo: db.users = JSON.stringify(users)
        fs.writeFileSync('./data/users.json', JSON.stringify(users)); // Cuando accedemos a db.users, estaremos escribiendo en nuestro archivo users.json, previamente traducido a JSON con el método stringify -> fs.writeFileSync('ruta del archivo', elemento a escribir)
    },

    get posts() {
        const posts = fs.readFileSync('./data/posts.json', 'utf8');

        return JSON.parse(posts);
    },

    set posts(posts) {
        fs.writeFileSync('.data/posts.json', JSON.stringify(posts));

        return JSON.parse(posts);
    }
}

// Exportamos db para poder usarlo en otros archivos JS
export default db; // Antes usábamos -> module.exports = localStorage