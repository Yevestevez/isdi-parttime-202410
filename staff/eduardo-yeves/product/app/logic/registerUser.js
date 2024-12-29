logic.registerUser = (name, email, username, password) => {
    validate.username(username);
    validate.password(password);
    validate.name(name);
    validate.email(email);

    return fetch('http://localhost:8080/users', {
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

                    throw new Error(message);
                });
        });
};