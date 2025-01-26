import getUserName from './getUserName.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            getUserName('67914ec68150c5b6db12b30c')
                .then(name => console.log('user name gotten', name))
                .catch(error => console.error(error));
        } catch (error) {
            console.error(error);
        }
    })
    .catch(error => console.error(error));