import config from '../config/config.js'

export default class GameInfo {
  static renderGameScore(ctx, score) {
    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"

    ctx.fillText(
      '当前得分：'+score,
      10,
      30
    )
  }

  static renderGameStart(ctx){
    ctx.fillStyle = "#aaa"
    ctx.fillRect(50, 190, config.SCREEN_WIDTH - 100, config.SCREEN_HEIGHT - 380)


    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"

    ctx.fillText(
      '亮亮小游戏',
      config.SCREEN_WIDTH / 2 - 50,
      config.SCREEN_HEIGHT / 2 - 100 + 50
    )

    ctx.fillText(
      '- 选择难度 -',
      config.SCREEN_WIDTH / 2 - 55,
      config.SCREEN_HEIGHT / 2 - 100 + 130
    )

    ctx.fillStyle = 'gray'

    ctx.fillRect(
      config.SCREEN_WIDTH / 2 - 130,
      config.SCREEN_HEIGHT / 2 - 100 + 180,
      120, 40
    )
    ctx.fillStyle = 'white'
    ctx.fillText(
      '简单',
      config.SCREEN_WIDTH / 2 - 90,
      config.SCREEN_HEIGHT / 2 - 100 + 205
    )
    ctx.fillStyle = 'gray'
    ctx.fillRect(
      config.SCREEN_WIDTH / 2+10,
      config.SCREEN_HEIGHT / 2 - 100 + 180,
      120, 40
    )
    ctx.fillStyle = 'white'
    ctx.fillText(
      '困难',
      config.SCREEN_WIDTH / 2 +50,
      config.SCREEN_HEIGHT / 2 - 100 + 205
    )
  }

  static renderGameOver(ctx, score) {
    ctx.fillStyle = "#aaa"
    ctx.fillRect(50, 190, config.SCREEN_WIDTH - 100, config.SCREEN_HEIGHT-380)


    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"

    ctx.fillText(
      '游戏结束',
      config.SCREEN_WIDTH / 2 - 40,
      config.SCREEN_HEIGHT / 2 - 100 + 50
    )

    ctx.fillText(
      '得分: ' + score,
      config.SCREEN_WIDTH / 2 - 40,
      config.SCREEN_HEIGHT / 2 - 100 + 130
    )

    ctx.fillStyle = 'gray'

    ctx.fillRect(
      config.SCREEN_WIDTH / 2 - 60,
      config.SCREEN_HEIGHT / 2 - 100 + 180,
      120, 40
    )
    ctx.fillStyle = 'white'
    ctx.fillText(
      '重新开始',
      config.SCREEN_WIDTH / 2 - 40,
      config.SCREEN_HEIGHT / 2 - 100 + 205
    )

  }

  static btnArea={

    startX: config.SCREEN_WIDTH / 2 - 40,
    startY: config.SCREEN_HEIGHT / 2 - 100 + 180,
    endX: config.SCREEN_WIDTH / 2 + 50,
    endY: config.SCREEN_HEIGHT / 2 - 100 + 255
  }

  static btnAreaeasy = {

    startX: config.SCREEN_WIDTH / 2 - 130,
    startY: config.SCREEN_HEIGHT / 2 - 100 + 180,
    endX: config.SCREEN_WIDTH / 2 + 40,
    endY: config.SCREEN_HEIGHT / 2 - 100 + 255
  }

  static btnAreahard = {

    startX: config.SCREEN_WIDTH / 2 +60,
    startY: config.SCREEN_HEIGHT / 2 - 100 + 180,
    endX: config.SCREEN_WIDTH / 2 + 210,
    endY: config.SCREEN_HEIGHT / 2 - 100 + 255
  }
}

