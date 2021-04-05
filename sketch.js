
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	par=new Paper(50,150, 14);
	bin2=new Dustbin(1240,580,130,20)
	bin3=new Dustbin(1165,525,20,100)
	bin=new Dustbin(1315,525,20,100)
	gr=new Ground(width/2,600,width,20);


}


function draw() {

	
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  par.display();
  gr.display();
  bin3.display();
  bin2.display();
  bin.display();
  drawSprites();
  
  
}

function keyPressed(){
	 if (keyCode === UP_ARROW){
		Body.applyForce(par.body,par.body.position,{x:85,y:-85})
	}
	
}

