var root = new Thing(document.body.querySelector('#root'))
root.container.style.position = 'absolute'

var vampire = new Vampire(document.createElement('div'))
root.add(vampire)
vampire.setXY(0, 0)

var wickedGarlic = new WickedGarlic(document.createElement('div'))
root.add(wickedGarlic)
wickedGarlic.setXY(300, 0)

var wickedGarlic2 = new WickedGarlic(document.createElement('div'))
root.add(wickedGarlic2)
wickedGarlic2.setXY(250, 100)

var wickedGarlic3 = new WickedGarlic(document.createElement('div'))
root.add(wickedGarlic3)
wickedGarlic3.setXY(300, 200)

/*
// wickedGarlic throw function (WIP)

// inicial wickedGarlic position
function throwWickedGarlics() {
    var newWickedGarlic = new WickedGarlic(document.createElement('div'))

    var throwPosition = Math.floor(Math.random() * 4)
    var throwX, throwY, throwDX, throwDY

    switch (throwPosition) {
        case 0: // from above
            throwX = Math.random() * window.innerWidth
            throwY = 0
            throwDX = 0
            throwDY = 1
            break
        case 1: // from the left
            throwX = 0
            throwY = Math.random() * window.innerHeight
            throwDX = 1
            throwDY = 0
            break
        case 2: // from below
            throwX = Math.random() * window.innerWidth
            throwY = window.innerHeight
            throwDX = 0
            throwDY = -1
            break
        case 3: // from the right
            throwX = window.innerWidth
            throwY = Math.random() * window.innerHeight
            throwDX = -1
            throwDY = 0
            break
    }

    root.appendChild(newWickedGarlic.container)
    newWickedGarlic.setXY(throwX, throwY)

    // wickedGarlic movement
    function wickedGarlicMovement() {
        throwX += throwDX * 3
        throwY += throwDY * 3

        newWickedGarlic.setX(throwX)
        newWickedGarlic.setY(throwY)


        // remove wickedGarlic if is out of the screen
        if (throwX < -80 || throwX > window.innerWidth + 80 || throwY < - 80 || throwY > window.innerWidth + 80) {
            root.removeChild(newWickedGarlic.container)
            clearInterval(interval)
        }
    }

    // wickedGarlic movement each 20ms
    var interval = setInterval(wickedGarlicMovement, 20)

    // generate wickedGarlic instances
    setTimeout(throwWickedGarlics, 1000);
}

throwWickedGarlics()
*/