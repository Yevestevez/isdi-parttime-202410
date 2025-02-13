import { useState } from 'react';

import './Post.css';

import logic from '../../logic';

import formatDate from '../helper/formatDate';

function Post({ post, onPostDeleted, onPostLikeToggled, onPostTextEdited }) {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(post.text);

    const handleDeleteButtonClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.deletePost(post.id)
                    .then(() => onPostDeleted())
                    .catch(error => {
                        alert(error.message);

                        console.error(error);
                    })
            } catch (error) {
                alert(error.message);

                console.error(error);
            }
    }

    const handleToggleLikeClick = () => {
        try {
            logic.toggleLikePost(post.id)
                .then(() => onPostLikeToggled())
                .catch(error => {
                    alert(error.message);

                    console.error(error);
                })
        } catch (error) {
            alert(error.message);

            console.error(error);
        }
    }

    const handleEditButtonClick = () => setEdit(true);

    const handleCancelEditButtonClick = () => {
        setEdit(false);
        setText(post.text);
    }

    const handlePostTextChange = event => setText(event.target.value);

    const handleSavedEditButtonClick = () => {
        setEdit(false);

        try {
            logic.updatePostText(post.id, text)
                .then(() => onPostTextEdited())
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
        <h3 className="Post-author">{post.author.username}</h3>
        <img className="Post-image" src={post.image} />

        <div className="Post-bottom">
            <div className="Post-content">
                {edit ?
                    <input className="Post-text" onChange={handlePostTextChange} defaultValue={text} />
                    :
                    <p className="Post-text">{text}</p>
                }
                <time className="Post-date">{formatDate(post.date)}</time>

                <button type="button" onClick={handleToggleLikeClick}>{`${post.liked ? '❤️' : '🩶'} (${post.likes})`}</button>
            </div>

            {post.own && <>
                {edit ?
                    <div>
                        <button type="button" onClick={handleSavedEditButtonClick}>💾</button><button type="button" onClick={handleCancelEditButtonClick}>❌</button>
                    </div>
                    :
                    <button type="button" onClick={handleEditButtonClick}>📝</button>
                }
            </>}

            <div className="Post-deletePostButton-container">
                {post.own && <button type="button" className="Post-deletePostButton" onClick={handleDeleteButtonClick}>X</button>}
            </div>

        </div>
    </article>
};

export default Post;