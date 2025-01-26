import mongoose from 'mongoose';
import getPosts from './getPosts.js';

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            getPosts('67914ec68150c5b6db12b30c')
                .then(posts => console.log('posts gotten', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error);
        };
    })
    .catch(error => console.error(error));