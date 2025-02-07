import { validate, errors } from 'com';

const registerUser = (name, email, username, password) => {
    validate.username(username);
    validate.password(password);
    validate.name(name);
    validate.email(email);

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, username, password })
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            const { status } = res;

            if (status === 201) return;

            return res.json()
                .then(body => {
                    const { error, message } = body;

                    const constructor = errors[error];
                    // Usamos constructor para traer la constructora del error desde com/index.js y, a continuación lanzar el error con su mensaje. Con esto conseguimos replicar los errores de la api en app

                    throw new constructor(message);
                });
        });
};

export default registerUser;