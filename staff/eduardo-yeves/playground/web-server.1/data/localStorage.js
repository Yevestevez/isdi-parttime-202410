const fs = require('fs')


const localStorage = {
    get users() { // ejemplo de uso: const users = JSON.parse(localStorage.users)
        const users = fs.readFileSync('./data/users.json', 'utf8') // lectura de archivo (ruta, formato)

        return users
    },

    set users(users) { // ejemplo de uso: localStorage.users = JSON.stringify(users)
        fs.writeFileSync('./data/users.json', users) // escritura de archivo (ruta, elemento a escribir) 
    }
}

module.exports = localStorage