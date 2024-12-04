import validate from './helper/validate'
import db from '../data/db'

const getUserName = userId => {
    validate.id(userId, 'userId')

    const { users } = db // Desestructuración -> const users = db.users

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    return user.name
}

export default getUserName