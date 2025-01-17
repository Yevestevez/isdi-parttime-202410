import './Landing.css';

function Landing(props) {
    console.log('Landing -> render');

    const handleRegisterLinkClick = event => {
        event.preventDefault();

        props.onRegisterClicked();
    };

    const handleLoginLinkClick = event => {
        event.preventDefault();

        props.onLoginClicked();
    };

    return <div className="Landing">
        <header className="Landing-header">
            <h1 className="Landing-logo">TheGreenApp🌱</h1>
        </header>

        <div className="Landing-welcome">
            <span>WELCOME!</span>
            <span>WELCOME!</span>
            <span>WELCOME!</span>
            <span>WELCOME!</span>
        </div>

        <main className="Landing-buttons">
            <a href="" class="button" className="Landing-button" onClick={handleRegisterLinkClick}>Register</a>
            <a href="" class="button" className="Landing-button" onClick={handleLoginLinkClick}>Login</a>
        </main>

        <footer>
            <p>Lorem ipsum dolor si amet</p>
        </footer>
    </div>
};

export default Landing;