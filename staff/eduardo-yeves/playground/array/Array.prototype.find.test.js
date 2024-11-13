console.log('TEST Array.prototype.find')

console.log('CASE find sponge bob in characters')

{
    const characters = [
        { name: 'Mickey Mouse', icon: '🐭' },
        { name: 'Tweety', icon: '🐥' },
        { name: 'Sponge Bob', icon: '🧽' },
        { name: 'Coyote', icon: '🦊' }
    ]

    const character = characters.find((character) => character.name === 'Sponge Bob')

    console.log(character)
    // { name: 'Sponge Bob', icon: '🧽' }
}


console.log('CASE find pink panther in characters')

{
    const characters = [
        { name: 'Mickey Mouse', icon: '🐭' },
        { name: 'Tweety', icon: '🐥' },
        { name: 'Sponge Bob', icon: '🧽' },
        { name: 'Coyote', icon: '🦊' }
    ]

    const character = characters.find((character) => character.name === 'Pink Panther')

    console.log(character)
    // undefined
}