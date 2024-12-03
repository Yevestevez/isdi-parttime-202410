const registerUser = require('./registerUser')
const loginUser = require('./loginUser')
const isUserLoggedIn = require('./isUserLoggedIn')
const getUserName = require('./getUserName')
const logoutUser = require('./logoutUser')

const logic = {
    registerUser,
    loginUser,
    isUserLoggedIn,
    getUserName,
    logoutUser
}

module.exports = logic