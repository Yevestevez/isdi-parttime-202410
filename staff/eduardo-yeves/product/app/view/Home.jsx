import './Home.css';

import { useState, useEffect } from 'react';

import logic from '../logic';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

import { errors } from 'com';
const { NotFoundError, SystemError } = errors;

function Home({ onUserLoggedOut }) {
    const navigate = useNavigate();

    const [view, setView] = useState('posts');
    const [name, setName] = useState(null);

    useEffect(() => {
        console.log('Home -> "componentDidMount" (useEffect)');

        try {
            logic.getUserName()
                .then(name => setName(name))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, try again later.')
                })
        } catch (error) {
            alert(error.message);

            console.error(error);
        }
    }, []);

    useEffect(() => {
        switch (view) {
            case 'posts':
                navigate('/');
                break;
            case 'create-post':
                navigate('/create-post');
                break;
        }
    }, [view]);

    const handleLogoutButtonClick = () => {
        try {
            logic.logoutUser();

            onUserLoggedOut();
        } catch (error) {
            alert(error.message);

            console.error(error);
        };
    };

    const handlePostCreated = () => setView('posts');

    const handleCreatePostButtonClick = () => setView('create-post');

    const handleCancelCreatePost = () => setView('posts');

    const handleLogoClick = () => setView('posts');

    console.log('Home -> render');

    return <div className="Home">
        <header className="Home-header">
            <h1 className="Home-logo" onClick={handleLogoClick}>TGA🌱</h1>
            <h3 className="Home-username">{name}</h3>
            <button type="button" className="Home-logoutButton" onClick={handleLogoutButtonClick}>Logout</button>
        </header>

        <main className="Home-content">
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/create-post" element={<CreatePost onPostCreated={handlePostCreated} onCancel={handleCancelCreatePost} />} />
            </Routes>
        </main>

        {view !== 'create-post' && <footer className="Home-footer">
            <button type="button" className="Home-createPostButton" onClick={handleCreatePostButtonClick}>+</button>
        </footer>}
    </div>
};

export default Home;