import { User } from '../data/models.js';
import { validate, errors } from 'com';

const { DuplicityError, SystemError } = errors;

const registerUser = (name, email, username, password) => {
    validate.username(username);
    validate.password(password);
    validate.name(name);
    validate.email(email);

    const user = new User({ name, email, username, password });

    return user.save()
        .catch(error => {
            if (error.code === 11000)
                throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        })
        .then(user => { });
}

export default registerUser;