class RegisterView extends Component {
    constructor() {
        super(document.createElement('main'))

        const title = new Heading(2)
        title.setText('Register')
        this.add(title)

        const form = new Form
        this.add(form)

        const nameLabel = new Label('name')
        nameLabel.setText('name')
        form.add(nameLabel)

        const nameInput = new Label('text')
        form.add(nameInput)

        const usernameLabel = new Label('username')
        usernameLabel.setText('Username')
        form.add(usernameLabel)

        const usernameInput = new Input('text', 'username')
        form.add(usernameInput)

        const passwordLabel = new Label('password')
        usernameLabel.setText('Password')
        form.add(passwordLabel)

        const passwordInput = new Input('password', 'password')
        form.add(passwordInput)

        const submitButton = new Button('submit')
        submitButton.setText('Login')
        form.add(submitButton)

        const registerLink = new Link
        registerLink.setText('Register')
        this.add(registerLink)
    }
}