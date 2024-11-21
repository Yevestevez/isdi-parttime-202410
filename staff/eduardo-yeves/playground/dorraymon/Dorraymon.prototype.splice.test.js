class Dorraymon {
    constructor() {
        this.length = 0
    }

    // splice(start, deleteCount, item, item2) {
    //     const itemToMove = this[start]
    //     this[start] = item
    //     this[start + 1] = itemToMove
    //     this.length += 1
    // }

    splice(start, deleteCount, item, item2) {

    }
}

console.log('TEST Dorraymon prototype splice')

console.log('CASE add summer in seasons')

{
    const seasons = new Dorraymon
    seasons[0] = 'winter'
    seasons[1] = 'spring'
    seasons[2] = 'autumn'
    seasons.length = 3

    console.log(seasons)
    // Dorraymon {'winter, 'spring', 'autumn', length: 3}

    seasons.splice(2, 0, 'summer')
    console.log(seasons)
    // Dorraymon {'winter, 'spring', 'summer', 'autumn', length: 4}
}


console.log('CASE add spring and summer in seasons')

{
    const seasons = new Dorraymon
    seasons[0] = 'winter'
    seasons[1] = 'autumn'
    seasons.length = 2

    console.log(seasons)
    // Dorraymon {'winter,'autumn', length: 2}

    seasons.splice(2, 0, 'spring', 'summer')
    console.log(seasons)
    // Dorraymon {'winter, 'spring', 'summer', 'autumn', length: 4}
}

