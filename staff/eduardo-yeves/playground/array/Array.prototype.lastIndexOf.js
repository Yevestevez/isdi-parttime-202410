console.log('TEST Array prototype lastIndexOf')

console.log('CASE know places of The Middle Earth')

{
    const middleEarth = [
        'Mordor',
        'Gondor',
        'Rohan',
        'Rivendell',
        'The Shire'
    ]

    const isInMiddleEarth = (place) => {
        if (middleEarth.lastIndexOf(place) !== -1)
            return `Yes, ${place} is in Middle-Earth`

        return `Wrong world! ${place} doesn't belong to Middle-Earth. Try again`
    }

    console.log(isInMiddleEarth('Mordor'))
    // Yes, Mordor is in Middle-Earth

    console.log(isInMiddleEarth('Gotham'))
    // Wrong world! Gotham doesn't belong to Middle-Earth. Try again
}


console.log('CASE return element last index of elements')

{
    const elements = [
        'Water',
        'Earth',
        'Air',
        'Fire',
        'Water',
        'Earth',
        'Air',
        'Fire',
    ]

    console.log(elements.lastIndexOf('Water'))
    // 4
}