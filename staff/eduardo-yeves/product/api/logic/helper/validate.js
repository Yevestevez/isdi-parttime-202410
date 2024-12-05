// validate es un objeto que tiene métodos (funciones almacenadas como valores) como propidades
// Usaremos estos métodos para validar los inputs de los usuarios (en formularios como login o register) y filtrarlos, lanzando errores si no cumplen las condiciones que necesitemos que cumplan
// Podemos acceder e invocar a estas funciones como métodos del objeto de esta manera -> ejemplo: validate.username(...)
const validate = {
    // Método username, recibe el input username y comprueba que es válido antes de que pase a otras lógicas
    username(username) {
        // Comprobamos que username es tipo string y, de lo contrario lanzamos un error
        if (typeof username !== 'string') throw new Error('invalid username type');
        // Comprobamos la longitud de username y, si es menor que 4 lanzamos un error
        if (username.length < 4) throw new Error('invalid username length');
    },

    password(password) {
        if (typeof password !== 'string') throw new Error('invalid password type');
        if (password.length < 8) throw new Error('invalid password length');
    },

    name(name) {
        if (typeof name !== 'string') throw new Error('invalid name type');
        if (name.length < 1) throw new Error('invalid name length');
    },

    email(email) {
        if (typeof email !== 'string') throw new Error('invalid email type');
        if (email.length < 6) throw new Error('invalid email length');
    },

    // Usamos el parámetro explain con el valor por defecto 'id' para definir mejor la naturaleza del error, en caso de que este ocurra. Si no se especifica el parámetro explain, este será simplemente 'id', pero podríamos especificar, por ejemplo: 'userId' o 'postId'
    id(id, explain = 'id') {
        if (typeof id !== 'string') throw new Error(`invalid ${explain} type`); // Error especificado por defecto: invalid id type
        if (id.length < 10) throw new Error(`invalid ${explain} length`);
    }
}

// Exportamos este archivo para poder usarlo en otros archivos JS
export default validate;  // Antes usábamos -> module.exports = validate