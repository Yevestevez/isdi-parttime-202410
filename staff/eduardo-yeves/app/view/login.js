class Login extends Component {
    constructor() {
        super(document.createElement('main'))

        const title = new Heading(2)
        title.setText('Login')
        this.add(title)

        // form
        const form = new Form
        this.add(form)

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

        // submit button
        const submitButton = new Button('submit')
        submitButton.setText('Login')
        form.add(submitButton)

        // registerLink
        const registerLink = new Link
        registerLink.setText('Register')
        this.add(registerLink)
    }

    onRegisterClick(callback) {
        const registerLink = this.children[2]

        registerLink.addBehavior('click', event => {
            event.preventDefault()

            callback()
        })
    }

    //Consigo entrar a loginUser y devuelve type error, entiendo que no recibe el input de username/password ni cambia a home, ya que no tengo programada la parte de click del botón, solo la acción de submit del formulario ¿sería el click del button y dentro el 'onLoginSubmit'?
    onLoginSubmit(callback) {
        const form = this.children[1]

        form.addBehavior('submit', event => {
            event.preventDefault()

            const username = form.children[1].value
            const password = form.children[3].value

            try {
                logic.loginUser(username, password)

                form.reset()

                const name = logic.getUserName()

                homeUser.innerText = 'Hello, ' + name + '!'

                // const posts = logic.getPosts()

                // homePosts.innerHTML = '' // Limpia la página para evitar duplicados de posts

                // posts.forEach(function (post) {
                //     const homePost = document.createElement('article')
                //     homePosts.appendChild(homePost)

                //     const postAuthor = document.createElement('h3')
                //     postAuthor.innerText = post.author
                //     homePost.appendChild(postAuthor)

                //     const postImage = document.createElement('img')
                //     postImage.src = post.image
                //     homePost.appendChild(postImage)

                //     const postCaption = document.createElement('p')
                //     postCaption.innerText = post.text
                //     homePost.appendChild(postCaption)

                //     const postDate = document.createElement('time')
                //     postDate.innerText = post.date
                //     homePost.appendChild(postDate)
                //})

                callback()
                // body.removeChild(loginView)
                // body.appendChild(homeView)
            } catch (error) {
                alert(error.message)

                console.error(error)
            }


        })
    }
}