const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,100,50,50);
    box2=new Box(100,50,50,100)
}

function draw(){
    background("black");
    Engine.update(engine);
  
    box1.display()
    box2.display()
}