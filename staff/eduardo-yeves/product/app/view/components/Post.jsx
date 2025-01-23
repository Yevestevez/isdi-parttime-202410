import './Post.css';

import logic from '../../logic';

import formatDate from '../helper/formatDate';
import createPost from '../../logic/createPost';

function Post(props) {
    const handleDeleteButtonClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.deletePost(props.post.id)
                    .then(() => props.onPostDeleted())
                    .catch(error => {
                        alert(error.message);

                        console.error(error);
                    })
            } catch (error) {
                alert(error.message);

                console.error(error);
            }
    }

    console.log('Post -> render');

    return <article className="Post">
        <h3 className="Post-author">{props.post.author.username}</h3>
        <img className="Post-image" src={props.post.image} />

        <div className="Post-bottom">
            <div className="Post-content">
                <p className="Post-text">{props.post.text}</p>
                <time className="Post-date">{formatDate(props.post.date)}</time>
            </div>

            <div className="Post-deletePostButton-container">
                {props.post.own && <button type="button" className="Post-deletePostButton" onClick={handleDeleteButtonClick}>X</button>}
            </div>
        </div>
    </article>
};

export default Post;