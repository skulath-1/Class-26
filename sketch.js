
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

let engine;
let world;

var rope;
var ground;


var ball;

var btn1;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  btn1 = createImg("up.png")
  btn1.position(50,50)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)
  

    //BodyA or BodyB
    //PointA or PointB
    //Length
    //stiffness

  //PointA(x,y) and BodyB(ball) -use
  var options={
    pointA:{x:200,y:20}, 
    bodyB:ball, 
    length:100,
    stiffness:1
  }
   
  rope=Matter.Constraint.create(options);
  World.add(world,rope)

  // rope=Matter.Constraint.create({
  //   pointA:{x:200,y:20}, 
  //   bodyB:ball, 
  //   length:100,
  //   stiffness:0.1
  // });
  // World.add(world,rope)
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  //Draw the constraint
  //line(x1,y1,x2,y2)
  push()

  stroke("green");
  strokeWeight(5);
  line(rope.pointA.x,rope.pointA.y,ball.position.x,ball.position.y)

  pop()
  

}


function hForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}
