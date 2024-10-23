console.log('TEST Array.prototype.concat')

console.log('CASE merge fruits and vegetables')

var fruits = ['apple', 'orange', 'lemon', 'banana', 'cherry']
var veggies = ['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
console.log(fruits)
// ['apple', 'orange', 'lemon', 'banana', 'cherry']
console.log(veggies)
// ['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
var food = fruits.concat(veggies)
console.log(food)
// ['apple', 'orange', 'lemon', 'banana', 'cherry', 'lettuce', 'onion', 'garlic', 'carrot', 'lentice']


console.log('CASE merge frutis and veggies and meats')

var fruits = ['apple', 'orange', 'lemon']
var veggies = ['letucce', 'onion']
var meats = ['cow', 'salmon', 'pig']
var food = fruits.concat(veggies, meats)
console.log(fruits)
// ['apple', 'orange', 'lemon']
console.log(veggies)
// ['letucce', 'onion']
console.log(meats)
// ['cow', 'salmon', 'pig']
console.log(food)
// ['apple', 'orange', 'lemon', 'letucce', 'onion' 'cow', 'salmon', 'pig']


console.log('CASE merge array with non-array element (object)')

var fruits = ['apple', 'orange', 'lemon']
var desserts = { 0: 'cake', 1: 'brownie' }
var food = fruits.concat(desserts)
console.log(fruits)
// ['apple', 'orange', 'lemon']
console.log(desserts)
// { 0: 'cake', 1: 'brownie' }
console.log(food)
// ['apple', 'orange', 'lemon', { 0: 'cake', 1: 'brownie' }]


console.log('CASE merge array with non-array element (object) and another array')

var fruits = ['apple', 'orange', 'lemon']
var desserts = { 0: 'cake', 1: 'brownie' }
var veggies = ['letucce', 'onion']
console.log(fruits)
// ['apple', 'orange', 'lemon']
console.log(desserts)
// { 0: 'cake', 1: 'brownie' }
console.log(veggies)
// ['letucce', 'onion']
var food = fruits.concat(desserts, veggies)
console.log(food)
// ['apple', 'orange', 'lemon', { 0: 'cake', 1: 'brownie' }, 'letucce', 'onion']