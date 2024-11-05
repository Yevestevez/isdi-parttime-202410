(function () {
    function registerUser(name, email, username, password) {
        validate.username(username)
        validate.password(password)
        validate.name(name)
        validate.email(email)

        var users = JSON.parse(localStorage.users)

        var found = users.some(function (user) {
            return user.email === email || user.username === username
        })

        if (found)
            throw new Error('user already exists')

        var user = {}
        user.id = uuid()
        user.name = name
        user.email = email
        user.username = username
        user.password = password

        users.push(user)

        localStorage.users = JSON.stringify(users)
    }

    logic.registerUser = registerUser
})()