(function () {
    function createPost(image, text) {
        if (typeof image !== 'string') throw Error('invalid image type')
        if (typeof text !== 'string') throw Error('invalid text type')

        const posts = JSON.parse(localStorage.posts)

        const post = {
            id: uuid(),
            author: sessionStorage.userId,
            image: image,
            text: text,
            date: new Date().toISOString()
        }

        posts.push(post)

        localStorage.posts = JSON.stringify(posts)
    }

    logic.createPost = createPost
})()