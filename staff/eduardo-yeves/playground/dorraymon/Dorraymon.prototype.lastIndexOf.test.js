class Dorraymon {
    constructor() {
        this.length = 0
    }

    lastIndexOf(value) {
        for (let i = this.length; i >= 0; i--) {
            if (this[i] === value) {
                return i
            }
        }
        return -1
    }
}

console.log('TEST Dorraymon prototype lastIndexOf')

console.log('CASE know places of The Middle Earth')

{
    const middleEarth = new Dorraymon
    middleEarth[0] = 'Mordor'
    middleEarth[1] = 'Gondor'
    middleEarth[2] = 'Rohan'
    middleEarth[3] = 'Rivendell'
    middleEarth[4] = 'The Shire'
    middleEarth.length = 5

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
    const elements = new Dorraymon
    elements[0] = 'Water'
    elements[1] = 'Earth'
    elements[2] = 'Air'
    elements[3] = 'Fire'
    elements[4] = 'Water'
    elements[5] = 'Earth'
    elements[6] = 'Air'
    elements[7] = 'Fire'
    elements.length = 8

    console.log(elements.lastIndexOf('Water'))
    // 4
}
