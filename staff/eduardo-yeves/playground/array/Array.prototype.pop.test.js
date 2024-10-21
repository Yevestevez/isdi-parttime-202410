console.log('TEST Array.prototype.pop')

console.log('CASE remove the last guardian from guardians of the galaxy')

var guardiansOfTheGalaxy = [
    'Star-Lord',
    'Gamora',
    'Drax the Destroyer',
    'Groot',
    'Rocket Raccoon',
    'Mantis'
]

console.log(guardiansOfTheGalaxy)
// ['Star-Lord','Gamora','Drax the Destroyer','Groot','Rocket Raccoon', 'Mantis']
guardianRemoved = guardiansOfTheGalaxy.pop()
console.log(guardianRemoved)
// 'Mantis'
console.log(guardiansOfTheGalaxy)
// ['Star-Lord', 'Gamora', 'Drax the Destroyer', 'Groot', 'Rocket Raccoon']


console.log('CASE remove last element in a empty Array')

var emptyArray = []
console.log(emptyArray)
// []
console.log(emptyArray.pop())
// undefined
console.log(emptyArray)
// []