
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bin1,bin2,bin3;



function preload() 
{
 
}

function setup() {
  createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(150,570);
  ground = new Ground(400,670,800,30);
  // bin1 = new Bin(500,615,0,0);
  // bin2 = new Bin(560,645,0,0);
  bin3 = new Bin(620,570,150,150);
  Engine.run(engine);
  

  
}


function draw() {
  rectMode(CENTER);
  background('white');
  ball.display();
  ground.display();
  // bin1.display();
  // bin2.display();
  bin3.display();
  drawSprites();
  //
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.applyForce( ball.body,ball.body.position ,{x:35,y:-65});
 
   }
 }


 

