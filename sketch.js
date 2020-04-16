let fish;
let fImg;
let pImg;
let bImg;
let pearls = [];
let hit = 0;
////let score = 0;
//let state = 'splash';
//let w, h ;


function preload (){
  bImg = loadImage('background.jpg');
  fImg = loadImage('fish.png');
  pImg = loadImage('pearl.png');
}
function setup() {
  createCanvas(1000, 700);
  //textAlign (CENTER);
  //textSize(20);
  fish = new Fish ();

  //w= width;
  //h=height;

//  switch (state){
  //  case ('splash'):
  //  splashScreen();
  //  break;
  //  case ('gamePlay'):
    //gamePlay
  //  break;

  //  case ('you Won'):
  //  break;

  //  case ('you Lose'):
  //  break;

    //default:
    //break;
//  }

}
function keyPressed (){
  if (key == ' '){
    fish.jump ();
  }
}
function draw() {
  if(random (1) <0.1 ){
    pearls.push ( new Pearl ());
  }
  background(bImg);

  //fill(255, 33, 33);
  // ellipse(w/4, h/2, 50);


  for (let t of pearls){
    t.move();
    t.show();
    if (fish.hits (t)){
      //noLoop();
      hit ++;
    }
  }
  fish.show ();
  fish.move();

}

//function splashScreen() {
  //background (0);
  //text ('click to start', w/2, h/2);
//  fill(255);
//}
//function mousePressed(){
  //if (dist (mouseX, mouseY, w/2, h/2) <=25){
  //  score ++;
  //}

//}
