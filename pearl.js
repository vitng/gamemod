class Pearl {
  constructor (){
    this.r = 100;
    this.x = width;
    this.y = random(2, 5);
  }
  move(){
    this.x -= 10;
  }
  show (){
    image (pImg, this.x, this.y, this.r, this.r);

  }
}
