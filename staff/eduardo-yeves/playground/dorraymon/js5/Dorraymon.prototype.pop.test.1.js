function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.pop = function () {
    if (this.length <= 0) {
        return undefined
    }
    var lastElement = this[this.length - 1]
    this.length--
    delete this[this.length]
    return lastElement
}


console.log('TEST Dorraymon.prototype.pop')

console.log('CASE remove the last guardian from guardians of the galaxy')

var guardiansOfTheGalaxy = new Dorraymon
guardiansOfTheGalaxy[0] = 'Star-Lord'
guardiansOfTheGalaxy[1] = 'Gamora'
guardiansOfTheGalaxy[2] = 'Drax the Destroyer'
guardiansOfTheGalaxy[3] = 'Groot'
guardiansOfTheGalaxy[4] = 'Rocket Raccoon'
guardiansOfTheGalaxy[5] = 'Mantis'
guardiansOfTheGalaxy.length = 6

console.log(guardiansOfTheGalaxy)
// Dorraymon { 0: 'Star-Lord', 1: 'Gamora', 2: 'Drax the Destroyer', 3: 'Groot', 4: 'Rocket Raccoon', 5: 'Mantis', length: 6 }
var guardianRemoved = guardiansOfTheGalaxy.pop()
console.log(guardianRemoved)
// 'Mantis'
console.log(guardiansOfTheGalaxy)
// Dorraymon { 0: 'Star-Lord', 1: 'Gamora', 2: 'Drax the Destroyer', 3: 'Groot', 4: 'Rocket Raccoon', length: 5 }


console.log('CASE remove last element in a empty Dorraymon')

var emptyDorraymon = new Dorraymon
console.log(emptyDorraymon)
// Dorraymon { length: 0 }
console.log(emptyDorraymon.pop())
// undefined
console.log(emptyDorraymon)
// Dorraymon { length: 0 }