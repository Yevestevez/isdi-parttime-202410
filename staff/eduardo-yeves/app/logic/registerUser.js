logic.registerUser = (name, email, username, password) => {
    validate.username(username)
    validate.password(password)
    validate.name(name)
    validate.email(email)

    const users = JSON.parse(localStorage.users)

    const found = users.some(user => user.email === email || user.username === username)

    if (found)
        throw new Error('user already exists')

    const user = {}
    user.id = uuid()
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    localStorage.users = JSON.stringify(users)
}