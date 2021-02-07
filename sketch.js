var gardenImg,garden;
var mouse,mouseImg,mouse4,cat,catImg,catWalk,cat4;
function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png")
mouseImg=loadAnimation("images/mouse1.png")
catImg=loadAnimation("images/cat1.png")
catWalk=loadAnimation("images/cat2.png","images/cat3.png")
mouse4=loadAnimation("images/mouse4.png")
cat4=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,400,1000,800);
garden.addImage(gardenImg);
mouse=createSprite(250,600,10,10);
mouse.addAnimation("moving",mouseImg);
mouse.scale=0.15;
cat=createSprite(750,600,10,10);
cat.addAnimation("catching",catImg);
cat.addAnimation("walk",catWalk);
cat.scale=0.2;
cat.addAnimation("hello",cat4);
mouse.addAnimation("hello1",mouse4);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.isTouching(mouse)){
    cat.changeAnimation("hello",cat4);
    mouse.changeAnimation("hello1",mouse4);
    cat.velocityX=0;
}
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.changeAnimation("walk",catWalk);
}



}
