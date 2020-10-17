
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const circle = Matter.Body.circle;

var paperBall;
var bSide1,bSide2,bSide3;
var groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	
	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(30,40,25);

	groundSprite = new ground(width/2,480,1000,20);

	bSide1 = new Dside(870,height-40,200,20);

	bSide2 = new Dside(760,height-80,20,100);

	bSide3 = new Dside(960,height-80,20,100);

	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  
  paperBall.display();
  bSide1.display();
  bSide2.display();
  bSide3.display();
groundSprite.display()


  keyPressed();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperBall.body,paperBall.position,{ x: 85, y: -85});

}


}



