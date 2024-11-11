class Register extends Component {
    constructor() {
        super(document.createElement('main'))

        const title = new Heading(2)
        title.setText('Register')
        this.add(title)

        // form
        const form = new Form
        this.add(form)

        // name
        const nameLabel = new Label('name')
        nameLabel.setText('Name')
        form.add(nameLabel)

        const nameInput = new Input('text', 'name')
        form.add(nameInput)

        // email
        const emailLabel = new Label('email')
        emailLabel.setText('E-mail')
        form.add(emailLabel)

        const emailInput = new Input('email', 'email')
        form.add(emailInput)

        // username
        const usernameLabel = new Label('username')
        usernameLabel.setText('Username')
        form.add(usernameLabel)

        const usernameInput = new Input('text', 'username')
        form.add(usernameInput)

        // password
        const passwordLabel = new Label('password')
        passwordLabel.setText('Password')
        form.add(passwordLabel)

        const passwordInput = new Input('password', 'password')
        form.add(passwordInput)

        // submitButton
        const submitButton = new Button('submit')
        submitButton.setText('Login')
        form.add(submitButton)

        // loginLink
        const loginLink = new Link
        loginLink.setText('Login')
        this.add(loginLink)
    }

    onLoginClick(callback) {
        const loginLink = this.children[2]

        loginLink.addBehavior('click', event => {
            event.preventDefault()

            callback()
        })
    }
}