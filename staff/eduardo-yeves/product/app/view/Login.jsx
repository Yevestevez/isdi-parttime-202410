import './Login.css';

import logic from '../logic';

function Login(props) {
    console.log('Login -> render');

    const handleFormSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const username = form.username.value;
        const password = form.password.value;

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset();

                    props.onUserLoggedIn();
                })
                .catch(error => {
                    alert(error.message);

                    console.error(error);
                });
        } catch (error) {
            alert(error.message);

            console.error(error);
        };
    };

    const handleRegisterLinkClick = event => {
        event.preventDefault();

        props.onRegisterClicked();
    }

    return <div className="Login">
        <header className="Login-header">
            <h1 className="Login-logo">TheGreenApp🌱</h1>
        </header>
        <main className="Login-content">
            <h2 className="Login-title">Login</h2>
            <form onSubmit={handleFormSubmit} className="Login-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <div className="Login-button-container">
                    <button className="Login-button" type="submit">Login</button>
                </div>
            </form>

            <a href="" className="Login-RegisterLink" onClick={handleRegisterLinkClick}>Register</a>
        </main>
        <footer>
            <p>Lorem ipsum dolor si amet</p>
        </footer>
    </div>

};

export default Login;