function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.includes = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true
        }
    }
    return false
}

console.log('TEST Dorraymon.prototype.includes')

console.log('CASE find out if a superhero belongs to the avengers')

var theAvengers = new Dorraymon
theAvengers[0] = 'Iron Man'
theAvengers[1] = 'Captain America'
theAvengers[2] = 'Hulk'
theAvengers[3] = 'Thor'
theAvengers[4] = 'Black Widow'
theAvengers[5] = 'hawkeye'
theAvengers.length = 6

console.log(theAvengers.includes('Black Widow'))
// true
console.log(theAvengers.includes('Batman'))
// false