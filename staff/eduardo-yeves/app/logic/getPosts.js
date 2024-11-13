(function () {
    function getPosts() {
        const users = JSON.parse(localStorage.users)
        const posts = JSON.parse(localStorage.posts)

        posts.forEach(function (post) {
            const authorId = post.author

            const user = users.find(function (user) {
                return user.id === authorId
            })

            const username = user.username

            post.author = {
                id: authorId,
                username: username
            }
        })

        return posts.reverse()
    }

    logic.getPosts = getPosts
})()