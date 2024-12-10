// Usaremos la función getUserName para recoger el nombre del usuario logeado y usarlo en nuestra app

// Importamos las lógicas que necesitamos -> import -- from '--/--.js'
import validate from './helper/validate.js';
import db from '../data/db.js';

// Declaramos la variable/función flecha getUserName que tomará el parámetro userId
// En nuestra API, que ahora usa el framework Express.js, estamos recogiendo este parámetro desde index.js -> api.get('/users/:userId')
const getUserName = userId => {
    // Validamos el valor del parámetro con nuestros métodos guardados en logic/helper/validate.js
    validate.id(userId, 'userId');
    // Y si la validación es correcta y no encontramos errores...

    // Llamamos al getter users de nuestra db, que nos devuelve el objeto JavaScript users (que es un array)
    // Invocamos el método getter de db al usar '... = db.users' en la siguiente línea
    const { users } = db; // Desestructuración -> const users = db.users

    // Usamos el método find en el array ahora almacenado en users para buscar el usuario en el que el valores de las propiedad 'id' coincide con el valor del parámetro 'userId' introducido como argumento en esta función
    const user = users.find(user => user.id === userId);
    // Si el método find encuentra un valor idéntico devolverá 'true', en caso contrario, devolverá 'false'. Guardaremos este valor devuelto en la variable user

    if (!user) throw new Error('user not found'); // Si el valor almacenado en user es 'false' (es decir, no existe el usuario (objeto) con ese valor para el parámetro id en users) lanza un error

    return user.name; // Si el valor almacenado en user es 'true' (existe ese usuario/objeto en users), devuelve el valor de la propiedad name de ese usuario (objeto almacenado en users)
}

export default getUserName; // Exportamos la función para poder usarla en otros archivos de JS