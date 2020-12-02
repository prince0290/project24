const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var paper , paperBody ;
var rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(500,680,1000,10);
	

	paper = new Paper(100,670,50,50);

	rect1 = new Dustbin(550,670,20,100);
	rect2 = new Dustbin(640,670,250,20);
	rect3 = new Dustbin(730,670,20,100);

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

	ground.display();
	paper.display();

	rect1.display();
	rect2.display();
	rect3.display();

	

}

function keyPressed() {
	if ( keyCode === UP_ARROW){
		
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-90});

	}
}

