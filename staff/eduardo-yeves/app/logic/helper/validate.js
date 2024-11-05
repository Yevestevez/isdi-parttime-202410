// IIFE --> Immediately Invoked Function Expression
var validate = (function () {

    function validateUsername(username) {
        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 4) throw new Error('invalid username length')
    }

    function validatePassword(password) {
        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')
    }

    function validateName(name) {
        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')
    }

    function validateEmail(email) {
        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
    }

    var validate = {
        username: validateUsername,
        password: validatePassword,
        name: validateName,
        email: validateEmail
    }
})() // Invocamos a la función directamente, las funciones internas no son accesibles desde fuera y no ensuciamos el scoope global