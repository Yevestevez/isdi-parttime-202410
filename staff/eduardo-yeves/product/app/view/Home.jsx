import './Home.css';

import { useState, useEffect } from 'react';

import logic from '../logic';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

function Home(props) {
    const [view, setView] = useState('posts');
    const [name, setName] = useState(null);

    useEffect(() => {
        console.log('Home -> "componentDidMount" (useEffect)');

        try {
            logic.getUserName()
                .then(name => setName(name))
                .catch(error => {
                    alert(error.message);

                    console.error(error);
                })
        } catch (error) {
            alert(error.message);

            console.error(error);
        }
    }, []);

    const handleLogoutButtonClick = () => {
        try {
            logic.logoutUser();

            props.onUserLoggedOut();
        } catch (error) {
            alert(error.message);

            console.error(error);
        };
    };

    const handlePostCreated = () => setView('posts');

    const handleCreatePostButtonClick = () => setView('create-post');

    console.log('Home -> render');

    return <div className="Home">
        <header className="Home-header">
            <h1 className="Home-logo">TGA🌱</h1>
            <h3 className="Home-username">{name}</h3>
            <button type="button" className="Home-logoutButton" onClick={handleLogoutButtonClick}>Logout</button>
        </header>

        <main className="Home-content">
            {view === 'posts' && <Posts />}
            {view === 'create-post' && <CreatePost onPostCreated={handlePostCreated} />}
        </main>

        <footer className="Home-footer">
            <button type="button" className="Home-createPostButton" onClick={handleCreatePostButtonClick}>+</button>
        </footer>
    </div>
};

export default Home;