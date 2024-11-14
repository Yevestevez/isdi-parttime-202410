class Dorraymon {
    constructor() {
        this.length = 0
    }

    reverse() {

        for (let i = 0; i < Math.floor(this.length / 2); i++) { // intercambiamos solo hasta la mitad de length ya que de otro modo voleríamos al resultado original
            const oppositeIndex = this.length - 1 - i; // ; necesario!

            [this[i], this[oppositeIndex]] = [this[oppositeIndex], this[i]] // destructuring
        }

        return this
    }
}

console.log('TEST Array prototype reverse')

console.log('CASE reverse numbers Dorraymon')

{
    const numbers = new Dorraymon
    numbers[0] = 1
    numbers[1] = 2
    numbers[2] = 3
    numbers[3] = 4
    numbers[4] = 5
    numbers.length = 5
    console.log(numbers)
    // 1, 2, 3, 4, 5

    const reversedNumbers = numbers.reverse()
    console.log(reversedNumbers)
    // 5, 4, 3, 2, 1
}