console.log('TEST Array.prototype.concat')

console.log('CASE merge fruits and vegetables')

{
    const fruits = ['apple', 'orange', 'lemon', 'banana', 'cherry']
    const veggies = ['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
    const food = fruits.concat(veggies)
    console.log(fruits)
    // ['apple', 'orange', 'lemon', 'banana', 'cherry']
    console.log(veggies)
    // ['lettuce', 'onion', 'garlic', 'carrot', 'lentice']
    console.log(food)
    // ['apple', 'orange', 'lemon', 'banana', 'cherry', 'lettuce', 'onion', 'garlic', 'carrot', 'lentice']
}


console.log('CASE merge frutis and veggies and meats')

{
    const fruits = ['apple', 'orange', 'lemon']
    const veggies = ['letucce', 'onion']
    const meats = ['cow', 'salmon', 'pig']
    const food = fruits.concat(veggies, meats)
    console.log(fruits)
    // ['apple', 'orange', 'lemon']
    console.log(veggies)
    // ['letucce', 'onion']
    console.log(meats)
    // ['cow', 'salmon', 'pig']
    console.log(food)
    // ['apple', 'orange', 'lemon', 'letucce', 'onion' 'cow', 'salmon', 'pig']
}


console.log('CASE merge array with non-array element (object)')

{
    const fruits = ['apple', 'orange', 'lemon']
    const desserts = { 0: 'cake', 1: 'brownie' }
    const food = fruits.concat(desserts)
    console.log(fruits)
    // ['apple', 'orange', 'lemon']
    console.log(desserts)
    // { 0: 'cake', 1: 'brownie' }
    console.log(food)
    // ['apple', 'orange', 'lemon', { 0: 'cake', 1: 'brownie' }]
}


console.log('CASE merge array with non-array element (object) and another array')

{
    const fruits = ['apple', 'orange', 'lemon']
    const desserts = { 0: 'cake', 1: 'brownie' }
    const veggies = ['letucce', 'onion']
    const food = fruits.concat(desserts, veggies)
    console.log(fruits)
    // ['apple', 'orange', 'lemon']
    console.log(desserts)
    // { 0: 'cake', 1: 'brownie' }
    console.log(veggies)
    // ['letucce', 'onion']
    console.log(food)
    // ['apple', 'orange', 'lemon', { 0: 'cake', 1: 'brownie' }, 'letucce', 'onion']
}