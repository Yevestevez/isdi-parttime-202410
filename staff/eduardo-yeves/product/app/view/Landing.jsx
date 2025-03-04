import './Landing.css';

function Landing({ onRegisterClicked, onLoginClicked }) {
    console.log('Landing -> render');

    const handleRegisterLinkClick = event => {
        event.preventDefault();

        onRegisterClicked();
    };

    const handleLoginLinkClick = event => {
        event.preventDefault();

        onLoginClicked();
    };

    return <div className="Landing">
        <header className="flex justify-center h-50 bg-main-color text-center text-white text-4xl font-bold items-center">
            <h1 className="Landing-logo">TheGreenApp🌱</h1>
        </header>

        <div className="text-main-color font-bold flex flex-col items-center text-6xl">
            <span className="-mt-3">WELCOME!</span>
            <span className="-mt-4">WELCOME!</span>
            <span className="-mt-4">WELCOME!</span>
            <span className="-mt-4">WELCOME!</span>
        </div>

        <main className="mt-15 gap-5 flex flex-col justify-center items-center w-full">
            <a href="" className="button w-70" onClick={handleRegisterLinkClick}>Register</a>
            <a href="" className="button w-70" onClick={handleLoginLinkClick}>Login</a>
        </main>

        <footer className="flex fixed bottom-0 justify-center items-center bg-main-color w-full h-15">
            <p className="text-xs">Lorem ipsum dolor si amet</p>
        </footer>
    </div>
};

export default Landing;