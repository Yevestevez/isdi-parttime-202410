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

    return <section className="m-10 flex flex-col">
        <h3 className="text-main-color text-2xl font-bold pt-10">Create Post</h3>

        <form className="form" onSubmit={handleFormSubmit}>
            <label className="label" htmlFor="image">Image</label>
            <input className="input" type="text" id='image' />

            <label className="label" htmlFor="text">Text</label>
            <input className="input" type="text" id='text' />

            <div className="flex justify-end mt-5">
                <button className="button w-35" type="submit">Create</button>
            </div>
        </form>

        <button className="button w-35 bg-red-700 hover:bg-red-900 -mt-17" onClick={handleCancelButtonClick}>Cancel</button>
    </section>
};

export default CreatePost;