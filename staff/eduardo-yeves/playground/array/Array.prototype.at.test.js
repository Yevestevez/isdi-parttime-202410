console.log('TEST Array.prototype.at')

console.log('CASE get videogames at index 4')

{
    const videogames = new Array
    videogames[0] = 'Age of Empires'
    videogames[1] = 'Warcraft 3'
    videogames[2] = 'Company of Heroes 3'
    videogames[4] = 'V Rising'
    videogames[5] = 'Warhammer 40,000: Darktide'
    const videogame = videogames.at(4)
    console.log(videogame)
    //V Rising
}


console.log('CASE get book at index -2, -3, 1')

{
    const shelf = new Array
    shelf[0] = { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
    shelf[1] = { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
    shelf[2] = { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }
    let book = shelf.at(-2)
    console.log(book)
    // { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
    book = shelf.at(-3)
    console.log(book)
    // { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
    book = shelf.at(-1)
    console.log(book)
    // { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }
}


console.log('CASE get book at index 10')

{
    const shelf = new Array
    shelf[0] = { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
    shelf[1] = { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
    shelf[2] = { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }
    const book = shelf.at(10)
    console.log(book)
    // undefined
}


console.log('CASE get book at index -10')

{
    const shelf = new Array
    shelf[0] = { name: 'La Rueda del Tiempo', author: 'Robert Jordan', genre: 'Fantasía' }
    shelf[1] = { name: 'El Archivo de las Tormentas', author: 'Brandon Sanderson', genre: 'Fantasía' }
    shelf[2] = { name: 'Proyecto Hail Mary', author: 'Andy Weir', genre: 'Ciencia Ficción' }
    const book = shelf.at(-10)
    console.log(book)
    // undefined
}


console.log('CASE get function at index 2')

{
    const funs = new Array
    funs[0] = () => 'A'
    funs[1] = () => 'B'
    funs[2] = () => 'C'
    funs[3] = () => 'D'
    const fun = funs.at(2)
    console.log(fun())
    // C
}