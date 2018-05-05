import Sprite from '../component/sprite.js'
import config from '../config/config.js'

const IMG_URL='images/enemy.png'

export default class Enemy extends Sprite{
  constructor(){
    let pos_x = Math.random() * (config.SCREEN_WIDTH)
    let pos_y = Math.random() * (config.SCREEN_WIDTH)
    super(IMG_URL,20,20,pos_x,pos_y)
    if (Math.random()>0.5){
      this.speed_x = 1 + Math.random() 
    }else{
      this.speed_x = -2 + Math.random() 
    }
    if (Math.random() > 0.5) {
      this.speed_y = 1 + Math.random()
    } else {
      this.speed_y = -2 + Math.random()
    }
  }

  bomb(hero){
    if (Math.sqrt(Math.pow(hero.pos_x - this.pos_x, 2) + Math.pow(hero.pos_y - this.pos_y, 2) )<=(this.height/2+hero.height/2)){
      return true
    }
  }

  move(){
    this.pos_x += this.speed_x
    this.pos_y += this.speed_y
    if (this.pos_x >= config.SCREEN_WIDTH || this.pos_x <= 0){
      this.speed_x = -this.speed_x;
    }

    if (this.pos_y >= config.SCREEN_HEIGHT || this.pos_y <= 0) {
      this.speed_y = -this.speed_y;
    }
  }
}