const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var option = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 390, 50, 50, option);
  World.add(myWorld, ground);
  var option = {
    restitution:1
  }
  ball= Bodies.circle(100,200,20,option);
  World.add(myWorld,ball)
}

function draw() {
  background('red');  
  Engine.update(myEngine);
  var pos = ground.position;
  fill('brown');
  rectMode(CENTER);
  rect(pos.x, pos.y, 400, 50);
  var pos1= ball.position
  circle(pos1.x,pos1.y,20);

}