class Pearl {
  constructor (){
    this.r = 90;
    this.x = width;
    this.y = height - this.r;
  }
  move(){
    this.x += 12;
  }
  show (){
    image (pImg, this.x, this.y, this.r, this.r);

  }
}
