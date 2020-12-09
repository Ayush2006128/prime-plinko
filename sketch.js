const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World=Matter.World;

var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;
var world,engine,gr;
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world
  Engine.run(engine); 
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  fill("red") 
  textSize(50);
  text("prime plinko game",50,200) 
  gr=new Ground(50,790,1200,20);
  for(var j=40;j <=width; j=j+50){
    plinkos.push(new Plinkos(j,75,10));
  }
  for(var j=15;j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,175,10));
  }
  for(var j=10;j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,275,10));
  }
  for(var j=5;j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j,375,10));
  }
  for(var j=15;j<=width-10; j=j+80){
    particles.push(new Particles(j,375,10));
  }
}

function draw() {
  background(255,0,255);
  for(var i=0;i<plinkos.length; i++){
    plinkos[i].display();

  } 
  for (var j = 0; j < particles.length; j++) { particles[j].display(); }
 
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  gr.display();
  drawSprites();
}