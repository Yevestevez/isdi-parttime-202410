class App extends Component {
    constructor() {
        super(document.body)

        const title = new Heading(1)
        title.setText('Hola, App!')
        this.add(title)

        // const loginView = new LoginView
        // this.add(loginView)

        // const landingView = new LandingView
        // this.add(loginView)

        // const registerView = new RegisterView
        // this.add(registerView)

        const homeView = new HomeView
        this.add(homeView)
    }
}