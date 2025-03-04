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
        <header className="flex justify-between h-10 bg-main-color text-center text-white items-center p-5 fixed top-0 w-full border-b-4 border-white">
            <h1 className="text-xl" onClick={handleLogoClick}>TGA🌱</h1>
            <h3 className="text-md font-bold">{name}</h3>
            <button type="button" className="button-invert h-5 w-18 align-middle items-center text-sm" onClick={handleLogoutButtonClick}>Logout</button>
        </header>

        <main className="my-10">
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/create-post" element={<CreatePost onPostCreated={handlePostCreated} onCancel={handleCancelCreatePost} />} />
            </Routes>
        </main>

        {view !== 'create-post' && <footer className="button flex fixed bottom-0 border-white border-t-4 w-full h-10 align-middle items-center justify-center">
            <button type="button" className="text-white font-bold text-4xl" onClick={handleCreatePostButtonClick}>+</button>
        </footer>}
    </div>
};

export default Home;