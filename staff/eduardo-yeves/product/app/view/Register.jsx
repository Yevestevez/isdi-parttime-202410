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
        <header className="Register-header">
            <h1 className="Register-logo">TheGreenApp🌱</h1>
        </header>

        <main className="Register-content">
            <h2 className="Register-title">Register</h2>

            <form onSubmit={handleFormSubmit} className="Register-form">

                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <div className="Register-button-container">
                    <button className="Register-button" type="submit">Register</button>
                </div>
            </form>

            <a href="" className="Register-LoginLink" onClick={handleLoginLinkClick}>Login</a>
        </main>

        <footer>
            <p>Lorem ipsum dolor si amet</p>
        </footer>
    </div>
};

export default Register;