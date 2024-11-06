function Vampire() {
    Thing.call(this, document.createElement('div'))
    //this.container.style.backgroundColor = 'red'
    this.setSize(200, 230)

    // Vampire images
    var vampireFrontImage = document.createElement('img')
    vampireFrontImage.src = 'images/vampireFront.png'
    vampireFrontImage.style.position = 'absolute'
    vampireFrontImage.style.left = '55px'
    this.container.appendChild(vampireFrontImage)

    var vampireWalkingImage = document.createElement('img')
    vampireWalkingImage.src = 'images/vampireWalking.png'
    vampireWalkingImage.style.position = 'absolute'
    vampireWalkingImage.style.left = '30px'

    var vampireSadImage = document.createElement('img')
    vampireSadImage.src = 'images/vampireSad.png'
    vampireSadImage.style.position = 'absolute'
    vampireSadImage.style.width = '155px'
    vampireSadImage.style.left = '30px'

    var vampirePoseImage = document.createElement('img')
    vampirePoseImage.src = 'images/vampirePose.png'
    vampirePoseImage.style.position = 'absolute'
    vampirePoseImage.style.width = '210px'
    vampirePoseImage.style.top = '50px'

    // Vampire movement control (WASD)
    var STEP = 10

    document.addEventListener('keydown', function (event) {
        if (event.key === 'w') { // up(w)
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.appendChild(vampireFrontImage)

            this.moveY(-STEP)
        } else if (event.key === 'a') { // left(a)
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            vampireWalkingImage.style.transform = 'scaleX(1)'
            this.container.appendChild(vampireWalkingImage)

            this.moveX(-STEP)
        } else if (event.key === 's') { // down(s)
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.appendChild(vampirePoseImage)

            this.moveY(STEP)
        } else if (event.key === 'd') { // right(d)
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            vampireWalkingImage.style.transform = 'scaleX(-1)'
            this.container.appendChild(vampireWalkingImage)

            this.moveX(STEP)
        }
    }.bind(this))
}

Vampire.prototype = Object.create(Thing.prototype)
Vampire.prototype.constructor = Vampire