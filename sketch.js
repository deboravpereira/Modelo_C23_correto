const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//Crie as variáveis das partículas 1 a 5

//crie as variáveis dos rotadores 1 a 3

//Crie as variáveis dos blocos 1 e 2

//Crie a variável angle1 e atribua o valor de 60
//Crie a variável angle2 e atribua o valor de 60
//Crie a variável angle2 e atribua o valor de 60

function setup(){

    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    
    var plane_options={
      isStatic: true
    }
    //crie corpos planos e adicione ao mundo
    
    //crie corpo block1 e adicione ao mundo
    
    //crie corpo block2 e adicione ao mundo
    

    //crie particle_options
    
    //crie o corpo particle1 e adicione ao mundo

    //crie o corpo particle2 e adicione ao mundo
    
    //crie o corpo particle3 e adicione ao mundo
    
    //crie o corpo particle4 e adicione ao mundo
    
    //crie o corpo particle5 e adicione ao mundo

    
    //crie rotator_options

    //crie rotator1 e adicione ao mundo
    
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
 

  //Exibir forma para todas as partículas
 

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
