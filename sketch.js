
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, basket1, ground1, basket2, basket3;

function preload()
{
	
}

function setup() {
	createCanvas(990, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,100);
	ground1 = new Ground(495,665,990,20);
	basket1 = new Basket(750,645,200,20);
	basket2 = new Basket(640,555,20,200);
	basket3 = new Basket(860,555,20,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,248,220);

  keyPressed();

fill("black");
textSize("30");
text("use the up arrow key to make the ball go up and the down arrow key to make it go down", 100,100);

  paper.display();
  ground1.display();
  basket1.display();
  basket2.display();
  basket3.display();

  drawSprites(); 
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:45, y:-250});
	}
	/*else if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:5, y:0});
	}*/
}


