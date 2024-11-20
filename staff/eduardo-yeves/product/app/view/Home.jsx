const Component = React.Component

class Home extends Component {
    constructor(props) {
        console.log('Home -> constructor')

        super(props)

        this.state = { greeting: '', posts: [] }
    }

    componentDidMount() {
        console.log('Home -> componentDidMount')

        try {
            const name = logic.getUserName()
            const posts = logic.getPosts()
            //postList.setPosts(posts)

            this.setState({ greeting: `Hello, ${name}!`, posts })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    render() {
        console.log('Home --> render')

        return <main>
            <h2>Home</h2>

            <h3>{this.state.greeting}</h3>

            <button type="button" onClick={() => {
                try {
                    logic.logoutUser()

                    this.props.onUserLoggedOut()
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }
            }}>Logout</button>

            <button type="button">+</button>

            <PostList posts={this.state.posts} />
        </main>
    }
}