import './CreatePost.css';

import logic from '../../logic';

function CreatePost(props) {
    const handleFormSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const text = form.text.value;

        try {
            logic.createPost(image, text)
                .then(() => props.onPostCreated())
                .catch(error => {
                    alert(error.message);

                    console.error(error);
                })
        } catch (error) {
            alert(error.message);

            console.error(error);
        };
    };

    const handleCancelButtonClick = () => props.onCancel()

    console.log('CreatePost -> render');

    return <section>
        <h3>Create Post</h3>

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="image">Image</label>
            <input type="text" id='image' />

            <label htmlFor="text">Text</label>
            <input type="text" id='text' />

            <button className="CreatePost-createButton" type="submit">Create</button>
        </form>

        <button className="invert w-full" onClick={handleCancelButtonClick}>Cancel</button>
    </section>
};

export default CreatePost;