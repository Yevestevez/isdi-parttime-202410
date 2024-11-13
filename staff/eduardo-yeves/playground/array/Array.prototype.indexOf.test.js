console.log('TEST Array.prototype.indexOf')

console.log('CASE meet Harry Potter\'s roommates in Gryffindor')

{
    const harryRoommates = [
        'Ron Weasley',
        'Neville Longbottom',
        'Seamus Finnigan',
        'Dean Thomas'
    ]

    const isRoommate = (wizard) => {
        if (harryRoommates.indexOf(wizard) !== -1)
            return `Of course, ${wizard} is a Harry's roommate`

        return `Nope, ${wizard} is not a Harry's roommate`
    }

    const ron = isRoommate('Ron Weasley')
    console.log(ron)
    // Of course, Ron Weasley is a Harry's roommate
    const hermione = isRoommate('Hermione Granger')
    console.log(hermione)
    // Nope, Hermione Granger is not a Harry's roommate
}


console.log('CASE determine if a wizard is already in Gryffindor or sort them into the house')

{
    const gryffindors = [
        'Harry Potter'
    ]

    const theSortingHat = (gryffindors, wizard) => {
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
}