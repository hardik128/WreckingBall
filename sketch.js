const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var ground1,gameState="onsling"
function preload(){
  
}


function setup(){
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(600,575,1200,50)
  ground2 = new Ground(1175,300,50,600)
  wreckingBall = new Ball(400,100,100)
  
  sling1 = new SlingShot(wreckingBall.body,{x : 200,y : 90})
  
 

  Engine.run(Engine);
}

function draw() {
  background(200);  
  //drawSprites();



  ground1.display();
  ground2.display();
  wreckingBall.display();
  
  sling1.display();
  console.log(wreckingBall.body.position)
}

function mouseDragged(){
  if (gameState!=="launched"){
       Matter.Body.setPosition(wreckingBall.body,{x : mouseX , y : mouseY })
}
}

function mouseReleased(){
  sling1.fly(); 
  gameState = "launched"
}

function keyPressed(){
  if ((keyCode === 32) && (gameState==="launched")){
     sling1.attach(wreckingBall.body)
    Matter.Body.setPosition(wreckingBall.body, {x:400,y:90});
   
   gameState="onsling"
}
}







