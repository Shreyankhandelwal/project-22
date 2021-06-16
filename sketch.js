var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyBody;
var sound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	fairyImg = loadAnimation("images/fairyimage1.png","images/fairyimage2.png")
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/blue_universe.jpg");

	sound = loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	sound.play()

	star = createSprite(650,30);
	star.addImage("star",starImg);
	star.scale = 0.2;
   
	fairy = createSprite(100,600);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.12;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);
}

function draw() {
  background(bgImg);

  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 


  //write code to stop star in the hand of fairy

  if(star.y> 560 ){

	Matter.Body.setStatic(starBody,true)
  }

  if(fairy.x === 580){

	fairy.velocityX = 0

	fill("white")
	textSize(30)
	text("The fairy has caught the star",240,350)
  }

  console.log(fairy.x)

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {

		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === RIGHT_ARROW){
	
		fairy.velocityX = 4
	}

	if(keyCode === LEFT_ARROW){

		fairy.velocityX = -4
	}
	
}



