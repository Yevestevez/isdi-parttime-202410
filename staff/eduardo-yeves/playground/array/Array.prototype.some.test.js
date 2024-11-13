console.log('TEST Array.prototype.some')

console.log('CASE check if Fiat Punto exist in cars array')

{
    const cars = [
        { brand: 'Ferrari', model: 'Enzo' },
        { brand: 'Fiat', model: 'Punto' },
        { brand: 'Seat', model: 'Ibiza' }
    ]

    const carCheck = (car) => car.brand === 'Fiat' && car.model === 'Punto'

    console.log(carCheck)
    // true
}


console.log('CASE check if Audi A3 exist in cars array')

{
    const cars = [
        { brand: 'Ferrari', model: 'Enzo' },
        { brand: 'Fiat', model: 'Punto' },
        { brand: 'Seat', model: 'Ibiza' }
    ]

    const carCheck = (car) => car.brand === 'Audi' && car.model === 'A3'

    console.log(carCheck)
    // false
}