var bg;
var astronaut;
var sleep, sleeping;
var brush, brushing;
var gym, gyming;
var eat, eating;
var bath, bathing;
var move, moving;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  move = loadAnimation("images/move.png","images/move1.png");

}

function setup() {
  createCanvas(600, 400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  textSize(30);
  fill("white");
  text("Instructions:",20,50);

  textSize(20);
  fill("white");
  text("Up Arrow = Brushing",20,75);

  textSize(20);
  fill("white");
  text("Down Arrow = Gyming",20,100);

  fill("white");
  textSize(20);
  text("Left Arrow = Eating",20,125);

  textSize(20);
  fill("white");
  text("Right Arrow = Bathing",20,150);

  fill("white");
  textSize(20);
  text("M Arrow = Moving",20,175);

  if (keyDown("up")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing", brush);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("down")) {
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming", gym);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("left")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating", eat);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("right")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing", bath);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving", move);
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
  }

  drawSprites();
}