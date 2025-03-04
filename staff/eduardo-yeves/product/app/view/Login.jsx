import './Login.css';

import logic from '../logic';
import { errors } from 'com';

const { CredentialsError, SystemError } = errors;

import { useAppContext } from '../context';

function Login({ onUserLoggedIn, onRegisterClicked }) {
    console.log('Login -> render');

    const { alert } = useAppContext();

    const handleFormSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const username = form.username.value;
        const password = form.password.value;

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset();

                    onUserLoggedIn();
                })
                .catch(error => {
                    if (error instanceof CredentialsError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, try again later.')
                });
        } catch (error) {
            alert(error.message);

            console.error(error);
        };
    };

    const handleRegisterLinkClick = event => {
        event.preventDefault();

        onRegisterClicked();
    }

    return <div className="Login">
        <header className="flex justify-center h-30 bg-main-color text-center text-white text-4xl font-bold items-center">
            <h1>TheGreenApp🌱</h1>
        </header>
        <main className="flex flex-col m-10">
            <h2 className="Login-title">Login</h2>
            <form onSubmit={handleFormSubmit} className="form">
                <label className="label" htmlFor="username">Username</label>
                <input className="input" type="text" id="username" />

                <label className="label" htmlFor="password">Password</label>
                <input className="input" type="password" id="password" />

                <div className="pt-5 flex justify-end">
                    <button className="button" type="submit">Login</button>
                </div>
            </form>

            <a href="" className="-mt-15 underline underline-offset-2 cursor-pointer text-base hover:text-second-color w-20" onClick={handleRegisterLinkClick}>Register</a>
        </main>
        <footer className="flex fixed bottom-0 justify-center items-center bg-main-color w-full h-15 ">
            <p className="text-xs">Lorem ipsum dolor si amet</p>
        </footer>
    </div>

};

export default Login;