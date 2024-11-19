const Component = React.Component

class Landing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <main>
            <h2>Welcome!</h2>

            <p><a href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClicked()
            }}>Register</a> or <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClicked()
            }}>Login</a></p>
        </main>
    }
}