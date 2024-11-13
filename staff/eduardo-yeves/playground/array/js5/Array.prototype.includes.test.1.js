console.log('TEST Array.prototype.includes')

console.log('CASE find out if a superhero belongs to the avengers')

var theAvengers = [
    'Iron Man',
    'Captain America',
    'Hulk',
    'Thor',
    'Black Widow',
    'hawkeye'
]

console.log(theAvengers.includes('Black Widow'))
// true
console.log(theAvengers.includes('Batman'))
// false