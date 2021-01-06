var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var sticksSprirte, sticksBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	sticksSprite=createSprite(350,650,200,20)
	sticksSprite.shapeColor=color("red")
	sticksSprite2=createSprite(450,610,20,100)
	sticksSprite2.shapeColor=color("red")
	sticksSprite3=createSprite(250,610,20,100)
	sticksSprite3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);
	
	sticksBody = Bodies.rectangle(350,650, 200,20,{ isStatic:true});
	World.add(world, sticksBody);
	sticksBody2 = Bodies.rectangle(450,610,20,100,{ isStatic:true});
	World.add(world, sticksBody2);
	sticksBody3= Bodies.rectangle(250,610,20,100,{ isStatic:true});
	World.add(world, sticksBody3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
 
}