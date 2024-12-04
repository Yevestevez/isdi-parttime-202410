// Importamos express
// En el ejemplo anterior (sin module) usábamos require -> const express = require('express')
import express from 'express';

import logic from './logic/index.js'; // Importamos nuestro archivo index.js con las lógicas

const PORT = 8080; // Especificamos el puerto en el que arrancaremos el servidor, usamos mayúsculas ya que será un valor constante

const api = express(); // Creamos una instancia de express

const jsonBodyParser = express.json(); // Importamos el jsonBodyParser desde express.json; sirve para traducir el cuerpo de una solicitud entrante, por ejemplo, el input de un formulario, a un objeto JavaScrip accesible a través de req.body

// Creamos una ruta de prueba que simplemente responde (res.send) con 'Hello, API!'
api.get('/helloworld', (req, res) => res.send('Hello API!'));

// Creamos una ruta .post para crear un usuario
api.post('/users', jsonBodyParser, (req, res) => { // Usamos el middleware jsonBodyParser para traducir de JSON a JS
    try {
        const { name, email, username, password } = req.body; // Mediante desestructuración, recojo los datos del imput (req.body) en las variables correspondientes -> const name = req.body.name; const email = req.body.email; (etc...)

        logic.registerUser(name, email, username, password); // Indicamos que use la lógica (registerUser.js)

        res.status(201).send(); // Responde con un status 201, avisando de que se ha creado algo en el servidor
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message }); // Indicamos un error (en json) status 400 por si no funciona la lógica
    }
})

// Configuramos el puerto para acceder a nuestra API y le añadimos un callback de chivato que nos avise cuando la API arranque
api.listen(PORT, () => console.log(`API running on port ${PORT}`));
// TEST
// Terminal + navegador -> Arrancamos la API escribiendo el comando npm start (que hemos configurado previamente en los scripts de package.json ("start": "node index.js")) en nuestra terminal y la ruta htpp://localhost:8080/helloworld en el navegador; debería devolver 'Hello API!'
// Terminal con cURL -> Arrancamos la API con npm start | node index.js y abrimos otra terminal donde usamos el comando curl htpp://localhost:8080/helloworld; debería devolver 'Hello API!'