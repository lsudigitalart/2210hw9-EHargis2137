var directions = "Move your mouse to the left\n    to start the experiment"

function preload(){
  imageMode(CENTER);
  watermelon = loadImage('images/watermelon.png');
  feather = loadImage('images/feather.png');
}

function setup(){
  createCanvas(600, 600);
  background(0);
  starship1 = new Starship(10, 2, 100); //wingspan, speed, x position
  starship2 = new Starship(20, 4, 400);
}

function draw(){
  background(0);
  starship1.display();
  starship1.move();
  starship1.interact();

  starship2.display2();
  starship2.move();
  starship2.interact();

  fill('white');
  textSize(32);
  textFont("Helvetica");
  text(directions, 100, 500);
}

function Starship(tempSpeed, tempXPosition){

  //this.wingspan = tempWingspan; //replicated across multiple instances
  this.speed = tempSpeed;
  this.xPosition = tempXPosition;
  var ey = 0;

  this.display = function(){
    image(feather, this.xPosition+100, ey, 100, 100);
  };

  this.display2 = function(){
    image(watermelon, this.xPosition+400, ey, 200, 200);
  };

  this.move = function(){
    ey = ey + this.speed;
  };

  this.interact = function(){
    if(mouseX > this.xPosition) {
      ey = 0;
    }
  };
}
