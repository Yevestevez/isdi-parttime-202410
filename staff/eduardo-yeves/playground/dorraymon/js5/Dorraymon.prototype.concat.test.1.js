function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.concat = function () {
    var result = new Dorraymon
    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }
    for (var j = 0; j < arguments.length; j++) {
        var values = arguments[j]
        if (values instanceof Dorraymon) {
            for (var i = 0; i < values.length; i++) {
                result[result.length] = values[i]
                result.length++
            }
        } else {
            result[result.length] = values
            result.length++
        }
    }
    return result
}

console.log('TEST Dorraymon.prototype.concat')

console.log('CASE merge fruits and vegetables')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits[3] = 'banana'
fruits[4] = 'cherry'
fruits.length = 5
var veggies = new Dorraymon
veggies[0] = 'letucce'
veggies[1] = 'onion'
veggies[2] = 'garlic'
veggies[3] = 'carrot'
veggies[4] = 'lentice'
veggies.length = 5
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', length: 5 }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', 2: 'garlic', 3: 'carrot', 4: 'lentice', length: 5 }
var food = fruits.concat(veggies)
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'banana', 4: 'cherry', 5: 'lettuce', 6: 'onion', 7: 'garlic', 8: 'carrot', 9: 'lentice', length: 10 }


console.log('CASE merge frutis and veggies and meats')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var veggies = new Dorraymon
veggies[0] = 'letucce'
veggies[1] = 'onion'
veggies.length = 2
var meats = new Dorraymon
meats[1] = 'cow'
meats[1] = 'salmon'
meats[1] = 'pig'
meats.length = 3
var food = fruits.concat(veggies, meats)
console.log(fruits)
// // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', length: 2 }
console.log(meats)
// Dorraymon { 0: 'cow', 1: 'salmon', 2: 'pig', length: 3 }
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'letucce', 4: 'onion', 5: 'cow', 6: 'salmon', 7: 'pig', length: 8 }


console.log('CASE merge frutis and veggies and meats and drinks')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var veggies = new Dorraymon
veggies[0] = 'letucce'
veggies[1] = 'onion'
veggies.length = 2
var meats = new Dorraymon
meats[1] = 'cow'
meats[1] = 'salmon'
meats[1] = 'pig'
meats.length = 3
var drinks = new Dorraymon
drinks[0] = 'beer'
drinks[1] = 'wine'
drinks[2] = 'champagne'
drinks.length = 3
var food = fruits.concat(veggies, meats, drinks)
console.log(fruits)
// // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', length: 2 }
console.log(meats)
// Dorraymon { 0: 'cow', 1: 'salmon', 2: 'pig', length: 3 }
console.log(drinks)
// Dorraymon { 0: 'beer', 1: 'wine', 2: 'champagne', length: 3 }
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'letucce', 4: 'onion', 5: 'cow', 6: 'salmon', 7: 'pig', 8: 'beer', 9: 'wine', 10: 'champagne', length: 11 }


console.log('CASE merge dorraymon with non-dorraymon element (array)')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var coffee = ['expresso', 'capuccino']
var food = fruits.concat(coffee)
console.log(fruits)
// // Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(coffee)
// ['expresso', 'capuccino']
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: ['expresso', 'capuccino'], length: 4 }


console.log('CASE merge dorraymon with non-dorraymon element (object)')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var desserts = { 0: 'cake', 1: 'brownie' }
var food = fruits.concat(desserts)
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(desserts)
// { 0: 'cake', 1: 'brownie' }
console.log(food)
// Dorraymon {0: 'apple', 1: 'orange', 2: 'lemon', 3: { 0: 'cake', 1: 'brownie' }, length: 4}


console.log('CASE merge dorraymon with non-dorraymon element (object) and another dorraymon')
var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var desserts = { 0: 'cake', 1: 'brownie' }
var veggies = new Dorraymon
veggies[0] = 'letucce'
veggies[1] = 'onion'
veggies.length = 2
var food = fruits.concat(desserts, veggies)
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(desserts)
// { 0: 'cake', 1: 'brownie' }
console.log(veggies)
// Dorraymon { 0: 'lettuce', 1: 'onion', length: 2 }
console.log(food)
// Dorraymon {0: 'apple', 1: 'orange', 2: 'lemon', 3: { 0: 'cake', 1: 'brownie' }, 4: 'letucce', 5: 'onion', length: 6 }


console.log('CASE merge dorraymon with string')

var fruits = new Dorraymon
fruits[0] = 'apple'
fruits[1] = 'orange'
fruits[2] = 'lemon'
fruits.length = 3
var dessert = 'cake'
var food = fruits.concat(dessert)
console.log(fruits)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', length: 3 }
console.log(dessert)
// 'cake'
console.log(food)
// Dorraymon { 0: 'apple', 1: 'orange', 2: 'lemon', 3: 'cake', length: 4 } 