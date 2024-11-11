class App extends Component {
    constructor() {
        super(document.body)

        const title = new Heading(1)
        title.setText('Hola, App!')
        this.add(title)

        // landing
        const landing = new Landing
        this.add(landing)

        landing.onRegisterClick(() => {
            this.remove(landing)
            this.add(register)
        })

        landing.onLoginClick(() => {
            this.remove(landing)
            this.add(login)
        })

        // login
        const login = new Login
        login.onRegisterClick(() => {
            this.remove(login)
            this.add(register)
        })

        login.onLoginSubmit(() => {
            this.remove(login)
            this.add(home)
        })

        // register
        const register = new Register
        register.onLoginClick(() => {
            this.remove(register)
            this.add(login)
        })

        //home
        const home = new Home

    }
}