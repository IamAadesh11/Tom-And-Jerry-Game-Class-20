var bd , bg ;
var tom , tomI , tom2;
var jerry , jerryI , jerry2;


function preload() {
    //load the images here
bg = loadImage("images/garden.png");
tomI = loadImage("images/cat1.png");
jerryI = loadImage("images/mouse1.png");
tom2 = loadImage("images/cat2.png","images/cat3.png");
jerry2 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(800,630);
    //create tom and jerry sprites here
bd = createSprite(400,350,1000,800);
bd.addImage(bg);

tom = createSprite(650,530,0,10);
tom.addImage(tomI);
tom.scale = 0.12;

jerry = createSprite(150,550,0,30);
jerry.addImage(jerryI);
jerry.scale = 0.07;
jerry.setCollider("rectangle",-1000,0);
//jerry.debug = true
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide

if (tom.isTouching(jerry)){
    tom.velocityX = 0;
}


    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyDown("space")) {

    tom.addImage(tom2);
jerry.addImage(jerry2);

    tom.velocityX = -2;
}

}
