import './Register.css';

import logic from '../logic';
import { errors } from 'com';

const { DuplicityError, SystemError } = errors;

function Register({ onUserRegistered, onLoginClicked }) {
    console.log('Register-> render');

    const handleFormSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;

        try {
            logic.registerUser(name, email, username, password)
                .then(() => {
                    form.reset();

                    onUserRegistered();
                })
                .catch(error => {
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, try again later.')

                    console.error(error);
                });
        } catch (error) {
            alert(error.message);

            console.error(error);
        };
    };

    const handleLoginLinkClick = event => {
        event.preventDefault();

        onLoginClicked();
    };

    return <div className="Register">
        <header className="flex justify-center h-30 bg-main-color text-center text-white text-4xl font-bold items-center">
            <h1>TheGreenApp🌱</h1>
        </header>

        <main className="flex flex-col m-10">
            <h2 className="text-main-color text-2xl font-bold">Register</h2>

            <form onSubmit={handleFormSubmit} className="form">

                <label className="label" htmlFor="name">Name</label>
                <input className="input" type="text" id="name" />

                <label className="label" htmlFor="email">Email</label>
                <input className="input" type="email" id="email" />

                <label className="label" htmlFor="username">Username</label>
                <input className="input" type="text" id="username" />

                <label className="label" htmlFor="password">Password</label>
                <input className="input" type="password" id="password" />

                <div className="pt-5 flex justify-end">
                    <button className="button" type="submit">Register</button>
                </div>
            </form>

            <a href="" className="-mt-15 underline underline-offset-2 cursor-pointer text-base hover:text-second-color w-20" onClick={handleLoginLinkClick}>Login</a>
        </main>

        <footer className="flex fixed bottom-0 justify-center items-center bg-main-color w-full h-15">
            <p className="text-xs">Lorem ipsum dolor si amet</p>
        </footer>
    </div>
};

export default Register;