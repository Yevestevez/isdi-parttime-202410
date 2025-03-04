import './Posts.css';

import { useState, useEffect } from 'react';

import logic from '../../logic';
import Post from './Post';

import { useAppContext } from '../../context';

function Posts() {
    const { alert } = useAppContext();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('Posts -> "componentDidMount" (useEffect)');

        loadPosts();
    }, []);

    const loadPosts = () => {
        try {
            logic.getPosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    alert(error.message);

                    console.error(error);
                })
        } catch (error) {
            alert(error.message);

            console.error(error);
        }
    }

    const handlePostDeleted = () => loadPosts();

    const handlePostLikedToggled = () => loadPosts();

    const handlePostTextEdited = () => loadPosts();

    console.log('Posts -> render');

    return <main className="Posts">
        {posts.map(post => <Post
            key={post.id}
            post={post}
            onPostDeleted={handlePostDeleted}
            onPostLikeToggled={handlePostLikedToggled}
            onPostTextEdited={handlePostTextEdited}
        />)}
    </main>
};

export default Posts;