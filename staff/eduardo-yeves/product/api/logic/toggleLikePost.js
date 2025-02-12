import { User, Post } from '../data/models.js';
import { validate, errors } from 'com';

const { SystemError, NotFoundError } = errors;

cons toggleLikePost = (userId, postId) => {
    validate.id(userId, 'userId');
    validate.id(postId, 'postId');

    return User.findById(userId)
        .catch
        .then
}