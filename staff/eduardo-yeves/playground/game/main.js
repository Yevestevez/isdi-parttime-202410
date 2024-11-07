const root = new Thing(document.body.querySelector('#root'))
root.container.style.position = 'absolute'
root.container.style.backgroundColor = 'red'

const vampire = new Vampire(document.createElement('div'))
root.add(vampire)
vampire.setXY(0, 0)

const garlic = new Garlic(document.createElement('div'))
root.add(garlic)
garlic.setXY(300, 0)

const garlic2 = new Garlic(document.createElement('div'))
root.add(garlic2)
garlic2.setXY(250, 100)

const garlic3 = new Garlic(document.createElement('div'))
root.add(garlic3)
garlic3.setXY(300, 200)

/*
// garlic throw function (WIP)

// inicial garlic position
function throwGarlics() {
    const newGarlic = new Garlic(document.createElement('div'))

    const throwPosition = Math.floor(Math.random() * 4)
    let throwX, throwY, throwDX, throwDY

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

    root.container.appendChild(newGarlic.container)
    newGarlic.setXY(throwX, throwY)

    // garlic movement
    function garlicMovement() {
        throwX += throwDX * 3
        throwY += throwDY * 3

        newGarlic.setX(throwX)
        newGarlic.setY(throwY)


        // remove garlic if is out of the screen
        if (throwX < -80 || throwX > window.innerWidth + 80 || throwY < - 80 || throwY > window.innerWidth + 80) {
            root.container.removeChild(newGarlic.container)
            clearInterval(interval)
        }
    }

    // garlic movement each 20ms
    const interval = setInterval(garlicMovement, 20)

    // generate garlic instances
    setTimeout(throwGarlics, 1000);
}

throwGarlics()
*/