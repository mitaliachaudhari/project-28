
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var stone,mango;
var backgroundImg;


function preload(){
backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	stone = new stone(200,320,50,50);
	mango1 = new mango(300,450,60,60);
	mango2 = new mango(200,400,70,70);
	mango3 = new mango(250,350,60,60);
	mango4 = new mango(300,400,60,60);
	mango5 = new mango(300,450,60,60);
	tree = new tree(200,300,60,60);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	background(backgroundImg);
	Engine.update(engine);

	stone.display();
	mango.display();
   
	function mouseDragged(){
		Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY})
		}
		
		function mouseReleased(){
		stone.fly();
		}


function detectcollision(Lstone,Lmango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r)
	{
	 Matter.Body.setStatic(mango.body,false);
	}
}
detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);

function keyPressed(){
	if(keyCode===32){
Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
launcherObject.attach(stoneObj.body);
	}
}
	drawSprites();
}



