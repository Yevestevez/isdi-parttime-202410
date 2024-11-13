console.log('TEST Array.prototype.indexOf')

console.log('CASE meet Harry Potter\'s roommates in Gryffindor')

var harryRoommates = [
    'Ron Weasley',
    'Neville Longbottom',
    'Seamus Finnigan',
    'Dean Thomas'
]

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

var gryffindors = [
    'Harry Potter'
]

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
// ['Harry Potter', 'Ron Weasley']
theSortingHat(gryffindors, 'Hermione Granger')
// Hermione Granger... Gryffindor!!!
// ['Harry Potter', 'Ron Weasley', 'Hermione Granger']
theSortingHat(gryffindors, 'Hermione Granger')
// Hermione Granger is already in Gryffindor
// ['Harry Potter', 'Ron Weasley', 'Hermione Granger']