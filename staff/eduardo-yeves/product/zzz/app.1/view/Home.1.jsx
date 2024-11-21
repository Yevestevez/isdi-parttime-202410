const Component = React.Component

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <main>
            <h2>Home</h2>

            <h3>Hello, User!</h3>

            <button type="button" onClick={() => {
                try {
                    logic.logoutUser()

                    this.props.onUserLoggedOut()
                } catch (error) {
                    alert(error.message)

                    console.log(error)
                }
            }}>Logout</button>

            <button type="button">+</button>

            <section>
                <article>
                    <h3>jameshook</h3>

                    <img src="" alt="" />

                    <p></p>

                    <time></time>

                    <button type="button">🗑️</button>
                </article>
            </section>
        </main>
    }
}