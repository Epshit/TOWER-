var engine, world;
var block1,block2,block3,block4,block5,block6;
var platform;
var polygon, slingShot;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   block1 = new Block(330,235,30,40);
   block2 = new Block(360,235,30,40);
   block3 = new Block(390,235,30,40);
   block4 = new Block(420,235,30,40);
   block5 = new Block(450,235,30,40);
   block6 = new Block(480,235,30,40);


    polygon= new polygon(100,100);

    
    // chain = new Chain(bird.body,log6.body);
    slingshot = new Slingshot(polygon.body,{x:200, y:100});
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    
    block2.display();
    ground.display();
    block1.display();

    
    
    block3.display();

    
    block4.display();
    block5.display();

    polygon.display();
    platform.display();
    block6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

