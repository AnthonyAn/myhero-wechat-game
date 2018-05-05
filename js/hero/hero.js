import Sprite from '../component/sprite.js'
import config from '../config/config.js'

const IMG_URL='images/hero.png'

export default class Hero extends Sprite{
  constructor(){
    super(IMG_URL, 30, 30, config.SCREEN_WIDTH / 2, config.SCREEN_HEIGHT / 2)

    this.touched = false
    this.initEvent()
  }

  checkIsFingerOnHero(x, y) {
    const deviation = 30

    return !!(x >= this.pos_x - deviation
      && y >= this.pos_y - deviation
      && x <= this.pos_x + this.width + deviation
      && y <= this.pos_y + this.height + deviation)
  }


  setHeroPosAcrossFingerPosZ(x, y) {
    let disX = x - this.width / 2
    let disY = y - this.height / 2

    if (disX < 0)
      disX = 0

    else if (disX > config.SCREEN_WIDTH - this.width)
      disX = config.SCREEN_WIDTH - this.width

    if (disY <= 0)
      disY = 0

    else if (disY > config.SCREEN_HEIGHT - this.height)
      disY = config.SCREEN_HEIGHT - this.height

    this.pos_x = disX
    this.pos_y = disY
  }


  initEvent() {
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()

      let x = e.touches[0].clientX
      let y = e.touches[0].clientY

      if (this.checkIsFingerOnHero(x, y)) {
        this.touched = true

        this.setHeroPosAcrossFingerPosZ(x, y)
      }

    }).bind(this))

    canvas.addEventListener('touchmove', ((e) => {
      e.preventDefault()

      let x = e.touches[0].clientX
      let y = e.touches[0].clientY

      if (this.touched)
        this.setHeroPosAcrossFingerPosZ(x, y)

    }).bind(this))

    canvas.addEventListener('touchend', ((e) => {
      e.preventDefault()

      this.touched = false
    }).bind(this))
  }
}