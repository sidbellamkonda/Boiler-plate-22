const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world; 
var object, ground; 
function setup(){ 
  var canvas = createCanvas(400,400); 
  engine=Engine.create(); 
  world = engine.world;
  var ground_option = {
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_option);
  World.add(world,ground);

  var object_option = {
    restitution:1.0
  }
  object = Bodies.circle(200,100,20,object_option); 
  World.add(world,object); 
  console.log(object); 
} 
function draw(){ 
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20); 
}