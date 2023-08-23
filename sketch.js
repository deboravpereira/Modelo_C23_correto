const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10;
var rotator1, rotator2, rotator3;
var block1, block2;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){

    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    
    var plane_options={
      isStatic: true
    }
    //crie corpos planos e adicione ao mundo
    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    
    //crie corpo block1 e adicione ao mundo
    block1=Bodies.rectangle(100,400,150,20,plane_options);
    World.add(world,block1);
    
    //crie corpo block2 e adicione ao mundo
    

    //crie particle_options
    
    //crie o corpo particle1 e adicione ao mundo
    particle1 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle1);
    
    //crie o corpo particle2 e adicione ao mundo
    
    //crie o corpo particle3 e adicione ao mundo
    
    //crie o corpo particle4 e adicione ao mundo
    
    //crie o corpo particle5 e adicione ao mundo

    
    //crie rotator_options

    //crie rotator1 e adicione ao mundo
    rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator1);
    
    //crie rotator2 e adicione ao mundo
    
    //crie rotator3 e adicione ao mundo
    

    //estilizando os corpos aqui
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  //Exibir plane e block1 e block2
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
 

  //Exibir forma para todas as partículas 1 a 5
  ellipse(particle1.position.x,particle1.position.y,10);
    

  //crie forma para todos os rotate1
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;
  
  //crie forma para todos os rotate2
    
  
  //crie forma para todos os rotate3

    
    
}
