const Component = React.Component

class PostItem extends Component {
    constructor(props) {
        console.log('PostItem --> constructor')

        super(props)
    }

    render() {
        console.log('PostItem --> render')

        const { author, image, text, date } = this.props

        return <article>
            <h3>{author.username}</h3>

            <img src={image} />

            <p>{text}</p>

            <time>{date}</time>
        </article >
    }
}