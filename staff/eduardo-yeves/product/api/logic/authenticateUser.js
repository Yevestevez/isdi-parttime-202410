// Usaremos la función authenticateUser para validar los inputs username y password, comprobar que el usuario que intenta autentificarse está en nuestra base de datos (db -> users.json) y, si existe el usuario, devolvemos el id; si no existe el usuario, lanzamos un error

// Importamos las lógicas que necesitamos -> import -- from '--/--.js'
import validate from './helper/validate.js';
import db from '../data/db.js';

// Declaramos la variable/función flecha authenticateUser, que tomará los parámetros username y password.
// En nuestra API, que ahora usa el framework Express.js, estamos recogiendo estos parámetros desde index.js -> api.post('/users/auth')
const authenticateUser = (username, password) => {
    // Validamos los valores de los parámetros con nuestros métodos guardados en logic/helper/validate.js
    validate.username(username);
    validate.password(password);
    // Y si la validación es correcta y no encontramos errores...

    // Llamamos al getter users de nuestra db, que nos devuelve el objeto JavaScript users (que es un array)
    // Invocamos el método getter de db al usar '... = db.users' en la siguiente línea
    const { users } = db; // Desestructuración -> const users = db.users

    // Usamos el método find en el array ahora almacenado en users para buscar el usuario en el que los valores de las propiedades 'username' y 'password' coinciden con los valores de los parámetros 'username' y 'password' introducidos como argumentos en esta función
    const user = users.find(user => user.username === username && user.password === password); // Si el método find encuentra valores idénticos devolverá 'true', en caso contrario, devolverá 'false'. Guardaremos este valor devuelto en la variable user

    if (!user) // Si el valor almacenado en user es 'false' (es decir, no existe ese usuario en users)...
        throw new Error('wrong credentials'); // Lanza un error

    return user.id; // Si el valor almacenado en user es 'true' (existe ese usuario/objeto en users), devuelve el valor de la propiedad id de ese usuario (objeto almacenado en users)
}

// Exportamos la función para poder usarla en otros archivos de JS
export default authenticateUser;