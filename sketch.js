
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var ground;
var fan1;
var fan2;
var fan3;
var angle=60;

function setup() {
	createCanvas(500, 500);
	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

	  var ball1_options = {
		restitution: 0.70,
		frictionAir:0.01
	  }

	  var ball2_options = {
		restitution: 0.80,
		frictionAir:0.01
	  }  



	var ground_options ={
		isStatic: true
	  };

	var fan1_options={
		isStatic: true
	};  
	 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Bodies.rectangle(250,497,600,20,ground_options);
World.add(world,ground);

fan1 = Bodies.rectangle(250,200,130,20,fan1_options);
World.add(world,fan1);

ball = Bodies.circle(250,10,20,ball_options);
World.add(world,ball);

ball1 = Bodies.circle(250,10,20,ball1_options);
World.add(world,ball1);

ball2 = Bodies.circle(250,10,20,ball2_options);
World.add(world,ball2);

ball3 = Bodies.circle(250,10,20,ball1_options);
World.add(world,ball3);

ball4 = Bodies.circle(250,10,20,ball_options);
World.add(world,ball4);

	Engine.run(engine);
  
}







function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  

  rect(ground.position.x,ground.position.y,600,20);
  rect(fan1.position.x,fan1.position.y,130,20);
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);

   Matter.Body.rotate(fan1,angle);
push();
   translate(fan1.position.x,fan1.position.y);     
rotate(angle);
   rect(0,0,130,20);
pop();
angle=angle+8.1


  drawSprites();
 
}



