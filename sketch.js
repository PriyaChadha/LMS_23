var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var bgSprite,bgImg
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var zone1,zone2,zone3


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
   bkg=loadImage("wp2210617.jpg")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1280, 577);
	rectMode(CENTER);
	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 70, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	

	

	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.rectangle(helicopterSprite.x, 93, 5 ,10, {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true});
    ground.render.visible= false
	console.log(ground.render)
 	World.add(world, ground)
	 zone1 = new Zone (500,490,20,100)
	 zone2 = new Zone (700,490,20,100)
	 zone3 = new Zone (600,530,220,20)
 
 

	
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background(bkg);

  packageSprite.x= helicopterSprite.x
  packageSprite.y= packageBody.position.y-20
  
  zone1.display();
  zone2.display();
  zone3.display();
 

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 
    Matter.Body.setStatic(packageBody,false);
    
  }
  if (keyCode ===LEFT_ARROW) {
 
    helicopterSprite.x-=3
	packageSprite.x=helicopterSprite.x
	packageBody.x=packageSprite.x
    
  }
  if (keyCode === RIGHT_ARROW) {
 helicopterSprite.x+=3
   packageSprite.x=helicopterSprite.x
    packageBody.x=packageSprite.x
  }
}



