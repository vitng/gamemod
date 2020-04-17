let fish;
let fImg;
let pImg;
let bImg;
let pearls = [];
let hit = 0;
let snowflakes = [];

function preload (){
  bImg = loadImage('background.jpg');
  fImg = loadImage('fish.png');
  pImg = loadImage('pearl.png');
}
function setup() {
  createCanvas(1000, 700, );
  fill(240);
  noStroke();



  fish = new Fish ();
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

 let t = frameCount / 50;

 for (let i = 0; i < random(5); i++) {
   snowflakes.push(new snowflake());
 }

 for (let flake of snowflakes) {
   flake.update(t);
   flake.display();
 }
}

// snowflake class
function snowflake() {

 this.posX = random(-20, 0);
 this.posY = 0;
 this.initialangle = random(0, 1 * PI);
 this.size = random(1, 5);


 this.radius = sqrt(random(pow(width / 2, 2)));

 this.update = function(time) {

   let w = 0.7; // angular speed
   let angle = w * time + this.initialangle;
   this.posX = width / 2 + this.radius * sin(angle);

   // different size snowflakes fall at slightly different y speeds
   this.posY += pow(this.size, 0.5);

   // delete snowflake if past end of screen
   if (this.posY > height) {
     let index = snowflakes.indexOf(this);
     snowflakes.splice(index, 1);
   }
 };

 this.display = function() {
   ellipse(this.posX, this.posY, this.size);
   //fill ("pink");
 };


}
