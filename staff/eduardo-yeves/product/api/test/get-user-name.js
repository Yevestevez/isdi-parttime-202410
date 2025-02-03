fetch('http://localhost:8080/users', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzk4ZDFmYWQ3OTBmYWI0ZDc2YWRlYmIiLCJpYXQiOjE3MzgyNjQ0NDJ9.RYsCWIncDkF4lRW5iFYtA38hj9G8UH6cqhEjMZ69nTM'
    }
})
    .then(res => {
        const { status } = res

        if (status === 200)
            return res.json()
                .then(body => console.log('OK', status, body))

        return res.json()
            .then(body => console.log('KO', status, body))
    })
    .catch(error => console.error(error));