import Enemy from './npc/enemy.js'
import Hero from './hero/hero.js'
import config from './config/config.js'
import GameInfo from './gameinfo/gameinfo.js'
import Music from './music/music.js'

var ctx = canvas.getContext('2d')

export default class Main {
  constructor() {
    this.bg = new Image()
    this.bg.src = 'images/bg.jpg'
    this.music=new Music()
    this.bindLoop = this.loop.bind(this)
    this.bindAddScore = this.addscore.bind(this)

    this.bg.onload = () => {
      ctx.drawImage(this.bg, 0, 0, config.SCREEN_WIDTH, config.SCREEN_HEIGHT)
      this.touchHandlerStart = this.touchEventStart.bind(this)
      canvas.addEventListener('touchstart', this.touchHandlerStart)
      this.hasEventBindStart = true
      GameInfo.renderGameStart(ctx);
    }
  }

  loop() {
    this.update()
    this.render()
    if (this.gameover) {
      return
    }
    window.requestAnimationFrame(this.bindLoop)
  }

  start() {
    if (this.hasEventBindStart) {
      canvas.removeEventListener(
        'touchstart',
        this.touchHandlerStart
      )
    }
    if (this.hasEventBindRestart) {
      canvas.removeEventListener(
        'touchstart',
        this.touchHandlerStart
      )
    }

    this.touchHandlerLoop = this.touchEventLoop.bind(this)
    canvas.addEventListener('touchstart', this.touchHandlerLoop)
    this.hasEventBindRestart = false

    this.gameover = false
    this.score = 0
    
    this.enemies = []
    for (let i = 0; i < config.mode[this.MODE]; i++) {
      let enemy = new Enemy()
      this.enemies.push(enemy)
    }
    this.hero = new Hero()
    
    this.t = setInterval(this.bindAddScore, 1000)
    this.render()
  }

  addspeed(enemy) {
    enemy.speed_x = (enemy.speed_x > 0) ? enemy.speed_x + 0.2 : enemy.speed_x - 0.2
    enemy.speed_x = (enemy.speed_y > 0) ? enemy.speed_y + 0.2 : enemy.speed_y - 0.2
  }

  update() {
    // if(this.score!=0&&this.score%5==0){
    //   for (let enemy of this.enemies) {
    //     this.addspeed(enemy)
    //   }
    // }

    for (let enemy of this.enemies) {
      enemy.move()
      if (enemy.bomb(this.hero)) {
        GameInfo.renderGameOver(ctx, this.score)
        this.gameover = true
        clearInterval(this.t)
        if (!this.hasEventBind) {
          this.hasEventBind = true
          this.touchHandlerRestart = this.touchEventRestart.bind(this)
          canvas.addEventListener('touchstart', this.touchHandlerRestart)
        }
      }
    }
  }

  render() {
    if (this.gameover) {
      return
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(this.bg, 0, 0, config.SCREEN_WIDTH, config.SCREEN_HEIGHT)
    for (let enemy of this.enemies) {
      enemy.drawToCanvas(ctx)
    }
    this.hero.drawToCanvas(ctx)
    GameInfo.renderGameScore(ctx, this.score)
  }

  addscore() {
    this.score++;
  }

  touchEventRestart(e) {
    e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    let area = GameInfo.btnArea

    if (x >= area.startX
      && x <= area.endX
      && y >= area.startY
      && y <= area.endY)
      this.start()
  }

  touchEventStart(e) {
    e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    let area = GameInfo.btnAreaeasy

    if (x >= area.startX
      && x <= area.endX
      && y >= area.startY
      && y <= area.endY)
      this.MODE='EASY'

    area = GameInfo.btnAreahard

    if (x >= area.startX
      && x <= area.endX
      && y >= area.startY
      && y <= area.endY)
      this.MODE='HARD'
    this.start()
  }
  touchEventLoop(e) {
    e.preventDefault()

    this.loop()
    canvas.removeEventListener(
      'touchstart',
      this.touchHandlerLoop
    )
  }
}

