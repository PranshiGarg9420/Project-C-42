const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var raindrops=[];
var maxDrops=100;
var thunder1,thunder2,thunderimg1,thunderimg2;
function preload(){
    thunderimg1= loadImage("thunder3.png");
    thunderimg2=loadImage("tt2.png");
}

function setup(){
  engine = Engine.create();
  world = engine.world;
 
  createCanvas(1600,1600);  

  thunder1=createSprite(500,100,5,20);
  thunder2=createSprite(800,100,5,20);
  umb=new Umbrella(700,400,300,400);
  for(var i=0; i<maxDrops; i++){
    raindrops.push(new createDrop(random(0,1600),random(0,1600)));
  }
  
}
   
    


function draw(){
  background(0,0,0);
  
  Engine.update(engine);

  for (var i=0; i<maxDrops;i++){
    raindrops[i].showDrop();
  }

  
  if(frameCount %12===0){
    var rand=Math.round(random(1,2));
    switch(rand){
      case 1:thunder1.addImage(thunderimg1);
            break;
      case 2:thunder1.addImage(thunderimg2);
            break;
      default:break;
    }
  } 
  


  umb.display();

  drawSprites();
}
 
  
