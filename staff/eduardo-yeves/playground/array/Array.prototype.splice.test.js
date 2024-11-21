console.log('TEST Array prototype splice')

console.log('CASE add summer in seasons')

{
    const seasons = [
        'winter',
        'spring',
        'autumn'
    ]

    console.log(seasons)
    // ['winter, 'spring', 'autumn']

    seasons.splice(2, 0, 'summer')
    console.log(seasons)
    // ['winter, 'spring', 'summer', 'autumn']
}


console.log('CASE add spring and summer in seasons')

{
    const seasons = [
        'winter',
        'autumn'
    ]

    console.log(seasons)
    // ['winter, 'autumn']

    seasons.splice(1, 0, 'spring', 'summer')
    console.log(seasons)
    // ['winter, 'spring', 'summer', 'autumn']
}