class Dorraymon {
    constructor() {
        this.length = 0
    }

    forEach(callback) {
        for (const i = 0; i < this.length; i++) {
            callback(this[i])
        }
    }
}

console.log('TEST Dorraymon.prototype.forEach')

console.log('CASE display each spooky character in dorraymon')

{
    const spookyCharacters = new Dorraymon
    spookyCharacters[0] = { name: 'Vampire', icon: '🧛' }
    spookyCharacters[1] = { name: 'Zombie', icon: '🧟' }
    spookyCharacters[2] = { name: 'Ghost', icon: '👻' }
    spookyCharacters[3] = { name: 'Skeleton', icon: '💀' }
    spookyCharacters.length = 4

    const displaySpookyCharacters = spookyCharacters.forEach(function (spookyCharacter) {
        console.log(spookyCharacter)
    })

    console.log(displaySpookyCharacters)
    // { name: 'Vampire', icon: '🧛' },
    // { name: 'Zombie', icon: '🧟' },
    // { name: 'Ghost', icon: '👻' },
    // { name: 'Skeleton', icon: '💀' }
}


console.log('CASE display each spooky character icon in dorraymon')

{
    const spookyCharacters = new Dorraymon
    spookyCharacters[0] = { name: 'Vampire', icon: '🧛' }
    spookyCharacters[1] = { name: 'Zombie', icon: '🧟' }
    spookyCharacters[2] = { name: 'Ghost', icon: '👻' }
    spookyCharacters[3] = { name: 'Skeleton', icon: '💀' }
    spookyCharacters.length = 4

    const displaySpookyCharacters = spookyCharacters.forEach(function (spookyCharacter) {
        console.log(spookyCharacter.icon)
    })

    console.log(displaySpookyCharacters)
    // 🧛
    // 🧟
    // 👻
    // 💀
}