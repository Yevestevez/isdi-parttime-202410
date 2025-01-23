import mongoose from 'mongoose';

const { Schema, model, Types: { ObjectId } } = mongoose;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

const post = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const User = model('User', user);
const Post = model('Post', post);

// V1
// mongoose.connect('mongodb://localhost:27017/test')
//     .then(() => {
//         User.deleteMany()
//             .then(() => {
//                 Post.deleteMany()
//                     .then(() => {
//                         const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo2', password: '123123123' });

//                         pepito.save()
//                             .then(() => {
//                                 console.log('user save');

//                                 const post = new Post({ author: pepito._id, image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200&aspectRatio=1.78&format=webp', text: 'PruebaPost' });

//                                 post.save()
//                                     .then(() => console.log('post saved'))
//                                     .catch(error => console.error(error));
//                             })
//                             .catch(error => console.error(error));
//                     })
//                     .catch(error => console.error(error));
//             })
//             .catch(error => console.error(error));
//     })
//     .catch(error => console.error(error));


// V2
// mongoose.connect('mongodb://localhost:27017/test')
//     .then(() => User.deleteMany())
//     .then(() => Post.deleteMany())
//     .then(() => {
//         const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo2', password: '123123123' });

//         return pepito.save();
//     })
//     .then(pepito => {
//         console.log('user save', pepito._id);

//         const post = new Post({ author: pepito._id, image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200&aspectRatio=1.78&format=webp', text: 'PruebaPost' });

//         return post.save();
//     })
//     .then(post => console.log('post saved', post._id))
//     .catch(error => console.error(error));


// V3
// mongoose.connect('mongodb://localhost:27017/test')
//     .then(() => Promise.all([User.deleteMany(), Post.deleteMany()]))
//     .then(() => {
//         const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo2', password: '123123123' });
//         const post = new Post({ author: pepito._id, image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200&aspectRatio=1.78&format=webp', text: 'PruebaPost' });

//         return Promise.all([pepito.save(), post.save()]);
//     })
//     .then((results) => {
//         const pepito = results[0];
//         const post = results[1];

//         console.log('user save', pepito._id);
//         console.log('post saved', post._id);
//     })
//     .catch(error => console.error(error));

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => Promise.all([User.deleteMany(), Post.deleteMany()]))
    .then(() => {
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo2', password: '123123123' });
        const post = new Post({ author: pepito._id, image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200&aspectRatio=1.78&format=webp', text: 'PruebaPost' });

        return Promise.all([pepito.save(), post.save()]);
    })
    .then(([pepito, post]) => {
        console.log('user save', pepito._id);
        console.log('post saved', post._id);
    })
    .catch(error => console.error(error));