import { useState } from 'react';

import './Post.css';

import logic from '../../logic';

import formatDate from '../helper/formatDate';

import { useAppContext } from '../../context';

function Post({ post, onPostDeleted, onPostLikeToggled, onPostTextEdited }) {
    const { alert, confirm } = useAppContext();

    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(post.text);

    const handleDeleteButtonClick = () => {
        confirm('Delete post?', accepted => {
            if (accepted)
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
        })
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

    return <article className="flex flex-col gap-3 p-5">
        <h3 className="text-main-color font-bold text-xl">{post.author.username}</h3>
        <img className="rounded-t-sm" src={post.image} />

        <div className="bg-main-color -mt-3 flex flex-col p-5">
            <div>
                {edit ?
                    <input className="input justify-items-start bg-white flex flex-col w-60" onChange={handlePostTextChange} defaultValue={text} />
                    :
                    <p className="text-base">{text}</p>
                }
                <time className="text-xs">{formatDate(post.date)}</time>

                <button className="cursor-pointer flex flex-col mt-3 text-lg" type="button" onClick={handleToggleLikeClick}>{`${post.liked ? '❤️' : '🩶'}(${post.likes})`}</button>
            </div>

            {post.own && <>
                {edit ?
                    <div className="flex right-5 justify-end space-x-3 text-xl">
                        <button type="button" onClick={handleSavedEditButtonClick}>💾</button><button type="button" onClick={handleCancelEditButtonClick}>❌</button>
                    </div>
                    :
                    <div className="flex justify-end right-5 space-x-3 text-xl">
                        <button type="button" onClick={handleEditButtonClick}>📝</button>

                        <button type="button" onClick={handleDeleteButtonClick}>🗑️</button>
                    </div>
                }
            </>}

            {/* <div className="Post-deletePostButton-container">
                {post.own && <button type="button" className="Post-deletePostButton" onClick={handleDeleteButtonClick}>X</button>}
            </div> */}

        </div>
    </article >
};

export default Post;