export default class Sprite{
  constructor(IMG_URL,width,height,pos_x,pos_y){
      this.img=new Image(IMG_URL)
      this.img.src=IMG_URL
      this.pos_x = pos_x
      this.pos_y = pos_y
      this.width = width
      this.height = height
  }

  drawToCanvas(ctx){
    ctx.drawImage(this.img, this.pos_x, this.pos_y, this.width, this.height)
  }
}