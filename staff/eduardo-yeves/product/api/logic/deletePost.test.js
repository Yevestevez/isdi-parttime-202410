import mongoose from 'mongoose';
import deletePost from './deletePost.js';

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('67914ec68150c5b6db12b30c', '67914ec68150c5b6db12b30d')
                .then(result => console.log('post deleted', result))
                .catch(error => console.error(error));
        } catch (error) {
            console.error(error);
        }
    })
    .catch(error => console.error(error));