class Dorraymon {
    constructor() {
        this.length = 0
    }

    // splice(start, deleteCount, item) {
    //     const itemToMove = this[start]
    //     this[start] = item
    //     this[start + 1] = itemToMove
    //     this.length += 1
    // }

    splice(start, deleteCount, ...items) {
        let itemsToMove = {}
        for (let i = start; i < start + items.length; i++) {
            itemsToMove[i] = this[i]
            //seguir >>>>
        }

        return itemsToMove
    }
}

console.log('TEST Dorraymon prototype splice')

console.log('CASE add abril and mayo in months')

{
    const months = new Dorraymon
    months[0] = 'enero'
    months[1] = 'febrero'
    months[2] = 'marzo'
    months[3] = 'junio'
    months[4] = 'julio'
    months.length = 5

    console.log(months)
    // Dorraymon {'enero', 'febrero', 'marzo', 'junio', 'julio', length: 5}

    months.splice(3, 0, 'abril', 'mayo')
    console.log(months)
    // Dorraymon {'enero', 'febrero', 'marzo', 'abril, 'mayo', 'junio', 'julio', length: 7}
}


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
