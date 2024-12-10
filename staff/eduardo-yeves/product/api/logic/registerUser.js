// Importamos los archivos necesarios mediante import -- from --
import validate from './helper/validate.js';
import db from '../data/db.js';
import uuid from '../data/uuid.js';

const registerUser = (name, email, username, password) => {
    validate.username(username);
    validate.password(password);
    validate.name(name);
    validate.email(email);

    const { users } = db; // Desestructuración -> const users = db.users

    const found = users.some(user => user.email === email || user.username === username);

    if (found)
        throw new Error('user already exists');

    const user = {};
    user.id = uuid();
    user.name = name;
    user.email = email;
    user.username = username;
    user.password = password;

    users.push(user);

    db.users = users;
}

export default registerUser;