import mongoose from 'mongoose'
import updatePostText from './updatePostText.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePostText('userId', 'postId', 'new text')
                .then(result => console.log('post text updated', result))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))