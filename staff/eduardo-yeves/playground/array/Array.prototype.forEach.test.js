console.log('TEST Array.prototype.forEach')

console.log('CASE display each spooky character in array')

{
    const spookyCharacters = [
        { name: 'Vampire', icon: '🧛' },
        { name: 'Zombie', icon: '🧟' },
        { name: 'Ghost', icon: '👻' },
        { name: 'Skeleton', icon: '💀' }
    ]

    const displaySpookyCharacters = spookyCharacters.forEach((spookyCharacter) => console.log(spookyCharacter))

    console.log(displaySpookyCharacters)
    // { name: 'Vampire', icon: '🧛' },
    // { name: 'Zombie', icon: '🧟' },
    // { name: 'Ghost', icon: '👻' },
    // { name: 'Skeleton', icon: '💀' }
}


console.log('CASE display each spooky character icon in array')

{
    const spookyCharacters = [
        { name: 'Vampire', icon: '🧛' },
        { name: 'Zombie', icon: '🧟' },
        { name: 'Ghost', icon: '👻' },
        { name: 'Skeleton', icon: '💀' }
    ]

    const displaySpookyCharacters = spookyCharacters.forEach((spookyCharacter) => console.log(spookyCharacter.icon))

    console.log(displaySpookyCharacters)
    // 🧛
    // 🧟
    // 👻
    // 💀
}