class MovableThing extends Thing {
    constructor(container) {
        super(container)

        const STEP = 10

        // default movement keys (WASD)
        this.upKey = 'w'
        this.downKey = 's'
        this.leftKey = 'a'
        this.rightKey = 'd'

        // movement control
        document.addEventListener('keydown', event => {
            if (event.key === this.upKey) // up(w)
                this.moveY(-STEP)
            else if (event.key === this.leftKey)// left(a)
                this.moveX(-STEP)
            else if (event.key === this.downKey)// down(s)
                this.moveY(STEP)
            else if (event.key === this.rightKey)// right(d)
                this.moveX(STEP)
        })
    }

    // setKeys method
    setKeys(upKey, downKey, leftKey, rightKey) {
        this.upKey = upKey
        this.downKey = downKey
        this.leftKey = leftKey
        this.rightKey = rightKey
    }
}