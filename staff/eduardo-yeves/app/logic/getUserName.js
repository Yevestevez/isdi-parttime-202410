(function () {
    function getUserName() {
        const users = JSON.parse(localStorage.users)

        const user = users.find(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        return user.name
    }

    logic.getUserName = getUserName
})()