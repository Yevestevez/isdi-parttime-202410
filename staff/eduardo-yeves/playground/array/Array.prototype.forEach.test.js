console.log('TEST Array.prototype.forEach')

console.log('CASE display each spooky character in array')

var spookyCharacters = [
    { name: 'Vampire', icon: '🧛' },
    { name: 'Zombie', icon: '🧟' },
    { name: 'Ghost', icon: '👻' },
    { name: 'Skeleton', icon: '💀' }
]

var displaySpookyCharacters = spookyCharacters.forEach(function (spookyCharacter) {
    console.log(spookyCharacter)
})

console.log(displaySpookyCharacters)
// { name: 'Vampire', icon: '🧛' },
// { name: 'Zombie', icon: '🧟' },
// { name: 'Ghost', icon: '👻' },
// { name: 'Skeleton', icon: '💀' }


console.log('CASE display each spooky character icon in array')

var spookyCharacters = [
    { name: 'Vampire', icon: '🧛' },
    { name: 'Zombie', icon: '🧟' },
    { name: 'Ghost', icon: '👻' },
    { name: 'Skeleton', icon: '💀' }
]

var displaySpookyCharacters = spookyCharacters.forEach(function (spookyCharacter) {
    console.log(spookyCharacter.icon)
})

console.log(displaySpookyCharacters)
// 🧛
// 🧟
// 👻
// 💀