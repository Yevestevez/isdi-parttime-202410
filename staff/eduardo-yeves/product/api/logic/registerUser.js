import validate from './helper/validate.js';
import { user } from '../data/models.js';

const registerUser = (name, email, username, password) => {
    validate.username(username);
    validate.password(password);
    validate.name(name);
    validate.email(email);

    const user = new UserActivation({ name, email, username, password });

    return user.save()
        .then(user => { });
}

export default registerUser;