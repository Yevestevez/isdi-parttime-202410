class Garlic extends MovableThing {
    constructor() {
        super(document.createElement('div'))
        //this.container.style.backgroundColor = 'red'
        this.setSize(80, 80)

        // Garlic images
        const garlicImage = document.createElement('img')
        garlicImage.src = 'images/garlic.png'
        garlicImage.style.position = 'absolute'
        garlicImage.style.height = '80px'
        this.container.appendChild(garlicImage)

        // default Garlic movement keys (Arrows)
        this.upKey = 'ArrowUp'
        this.downKey = 'ArrowDown'
        this.leftKey = 'ArrowLeft'
        this.rightKey = 'ArrowRight'

        // Garlic movement images
        document.addEventListener('keydown', event => {
            if (event.key === this.upKey) { // up
                this.container.appendChild(garlicImage)
            } else if (event.key === this.leftKey) { // left
                while (this.container.firstChild) {
                    this.container.removeChild(this.container.firstChild)
                }
                garlicImage.style.transform = 'scaleX(1)'
                this.container.appendChild(garlicImage)
            } else if (event.key === this.downKey) { // down
                this.container.appendChild(garlicImage)
            } else if (event.key === this.rightKey) { // right
                while (this.container.firstChild) {
                    this.container.removeChild(this.container.firstChild)
                }
                garlicImage.style.transform = 'scaleX(-1)'
                this.container.appendChild(garlicImage)
            }
        })
    }
}