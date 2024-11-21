const Component = React.Component

class PostList extends Component {
    constructor(props) {
        console.log('PostList -> constructor')

        super(props)
    }

    render() {
        console.log('PostList --> render', posts)

        const { posts } = this.props

        return <section>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    author={post.author}
                    image={post.image}
                    text={post.text}
                    date={post.date}
                />
            ))}
        </section>
    }
}