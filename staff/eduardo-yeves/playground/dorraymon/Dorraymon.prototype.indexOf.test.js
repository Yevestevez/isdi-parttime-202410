function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.indexOf = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return i
        }
    }
    return -1
}

//Necesitamos el método .push de Dorraymon para uno de los casos de prueba de .indexOf
Dorraymon.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]
        this[this.length] = argument
        this.length++
    }

    return this.length
}

console.log('TEST Dorraymon.prototype.indexOf')

console.log('CASE meet Harry Potter\'s roommates in Gryffindor')

var harryRoommates = new Dorraymon
harryRoommates[0] = 'Ron Weasley'
harryRoommates[1] = 'Neville Longbottom'
harryRoommates[2] = 'Seamus Finnigan'
harryRoommates[3] = 'Dean Thomas'
harryRoommates.length = 4

var isRoommate = function (wizard) {
    if (harryRoommates.indexOf(wizard) != -1) {
        var yes = `Of course, ${wizard} is a Harry's rommate`
        return yes
    } else {
        var no = `Nope, ${wizard} is not a Harry's rommate`
        return no
    }
}

var ron = isRoommate('Ron Weasley')
console.log(ron)
// Of course, Ron Weasley is a Harry's rommate
var hermione = isRoommate('Hermione Granger')
console.log(hermione)
// Nope, Hermione Granger is not a Harry's rommate


console.log('CASE determine if a wizard is already in Gryffindor or sort them into the house')

var gryffindors = new Dorraymon
gryffindors[0] = 'Harry Potter'
gryffindors.length = 1

var theSortingHat = function (gryffindors, wizard) {
    if (gryffindors.indexOf(wizard) === -1) {
        gryffindors.push(wizard)
        console.log(`${wizard} ... Gryffindor!!!`)
        console.log(gryffindors)
    } else if (gryffindors.indexOf(wizard) > -1) {
        console.log(`${wizard} is already in Gryffindor`)
        console.log(gryffindors)
    }
}

theSortingHat(gryffindors, 'Ron Weasly')
// Ron Weasly... Gryffindor!!!
// Dorraymon {0: 'Harry Potter', 1: 'Ron Weasley', length: 2}
theSortingHat(gryffindors, 'Hermione Granger')
// Hermione Granger... Gryffindor!!!
// Dorraymon {0: 'Harry Potter', 1: 'Ron Weasley', 2: 'Hermione Granger', length: 3}
theSortingHat(gryffindors, 'Hermione Granger')
// Hermione Granger is already in Gryffindor
// Dorraymon {0: 'Harry Potter', 1: 'Ron Weasley', 2: 'Hermione Granger', length: 3}