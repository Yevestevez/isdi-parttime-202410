fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzk4ZDFmYWQ3OTBmYWI0ZDc2YWRlYmIiLCJpYXQiOjE3Mzg4Mzc0MTJ9.gJn1sPdxAsHlsowz8KS2U0DqrAnHBMDepwlnqLhDDvE',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200&aspectRatio=1.78&format=webp","text":"hello peter"}'
})
    .then(res => {
        const { status } = res;

        if (status === 201) {
            console.log('OK', status);

            return;
        }

        return res.json()
            .then(body => console.log('KO', status, body));
    })
    .catch(error => console.error(error));