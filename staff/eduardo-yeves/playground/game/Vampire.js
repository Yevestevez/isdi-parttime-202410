class Vampire extends MovableThing {
    constructor() {
        super(document.createElement('div'))
        //this.container.style.backgroundColor = 'red'
        this.setSize(200, 230)

        // Vampire images
        const vampireFrontImage = document.createElement('img')
        vampireFrontImage.src = 'images/vampireFront.png'
        vampireFrontImage.style.position = 'absolute'
        vampireFrontImage.style.left = '55px'
        this.container.appendChild(vampireFrontImage)

        const vampireWalkingImage = document.createElement('img')
        vampireWalkingImage.src = 'images/vampireWalking.png'
        vampireWalkingImage.style.position = 'absolute'
        vampireWalkingImage.style.left = '30px'

        const vampireSadImage = document.createElement('img')
        vampireSadImage.src = 'images/vampireSad.png'
        vampireSadImage.style.position = 'absolute'
        vampireSadImage.style.width = '155px'
        vampireSadImage.style.left = '30px'

        const vampirePoseImage = document.createElement('img')
        vampirePoseImage.src = 'images/vampirePose.png'
        vampirePoseImage.style.position = 'absolute'
        vampirePoseImage.style.width = '210px'
        vampirePoseImage.style.top = '50px'

        // Vampire movement images
        document.addEventListener('keydown', event => {
            if (event.key === this.upKey) { // up(w)
                while (this.container.firstChild) {
                    this.container.removeChild(this.container.firstChild)
                }
                this.container.appendChild(vampireFrontImage)
            } else if (event.key === this.leftKey) { // left(a)
                while (this.container.firstChild) {
                    this.container.removeChild(this.container.firstChild)
                }
                vampireWalkingImage.style.transform = 'scaleX(1)'
                this.container.appendChild(vampireWalkingImage)
            } else if (event.key === this.downKey) { // down(s)
                while (this.container.firstChild) {
                    this.container.removeChild(this.container.firstChild)
                }
                this.container.appendChild(vampirePoseImage)
            } else if (event.key === this.rightKey) { // right(d)
                while (this.container.firstChild) {
                    this.container.removeChild(this.container.firstChild)
                }
                vampireWalkingImage.style.transform = 'scaleX(-1)'
                this.container.appendChild(vampireWalkingImage)
            }
        })
    }
}