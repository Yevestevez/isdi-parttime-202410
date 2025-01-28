import validate from './helper/validate.js';
import { User } from '../data/models.js';

const registerUser = (name, email, username, password) => {
    validate.username(username);
    validate.password(password);
    validate.name(name);
    validate.email(email);

    const user = new User({ name, email, username, password });

    return user.save()
        .then(user => { });
}

export default registerUser;