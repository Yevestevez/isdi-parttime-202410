function WickedGarlic() {
    Thing.call(this, document.createElement('div'))
    //this.container.style.backgroundColor = 'red'
    this.setSize(80, 80)

    // WickedGarlic images
    var wickedGarlicImage = document.createElement('img')
    wickedGarlicImage.src = 'images/wickedGarlic.png'
    wickedGarlicImage.style.position = 'absolute'
    wickedGarlicImage.style.height = '80px'
    this.container.appendChild(wickedGarlicImage)

    // WickedGarlic movement control (Arrows)
    var STEP = 10

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowUp') { // up
            this.container.appendChild(wickedGarlicImage)

            this.moveY(-STEP)
        } else if (event.key === 'ArrowLeft') { // left
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            wickedGarlicImage.style.transform = 'scaleX(1)'
            this.container.appendChild(wickedGarlicImage)

            this.moveX(-STEP)
        } else if (event.key === 'ArrowDown') { // down
            this.container.appendChild(wickedGarlicImage)

            this.moveY(STEP)
        } else if (event.key === 'ArrowRight') { // right
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            wickedGarlicImage.style.transform = 'scaleX(-1)'
            this.container.appendChild(wickedGarlicImage)

            this.moveX(STEP)
        }
    }.bind(this))
}

WickedGarlic.prototype = Object.create(Thing.prototype)
WickedGarlic.prototype.constructor = WickedGarlic