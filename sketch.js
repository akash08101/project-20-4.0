var tom,jerry,tomImg,jerryImg;
var bg,bgImg;
var tomHappy,jerryHappy;
var jerryTease;
var catMoving;
function preload() {
    //load the images here

tomImg=loadAnimation("images/cat1.png");
jerryImg=loadAnimation("images/mouse1.png");

tomHappy=loadAnimation("images/cat4.png");
jerryHappy=loadAnimation("images/mouse4.png");
jerryTease=loadAnimation("images/mouse2.png","images/mouse3.png");
catMoving=loadAnimation("images/cat2.png","images/cat3.png");
bgImg=loadImage("images/garden.png");
}

function setup(){
   
    createCanvas(600,400);
    bg=createSprite(200,30,20,20);
    bg.addImage("..",bgImg);
    bg.scale=1;
    //create tom and jerry sprites here
    tom=createSprite(500,200,50,20);
    tom.addAnimation("..",tomImg);
    tom.scale=0.1;
   jerry=createSprite(100,200,50,20);
jerry.addAnimation("..",jerryImg);
jerry.scale=0.1;
    
}

function draw() {

    background("green");
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.addAnimation("..",tomHappy);
tom.changeAnimation("..",tomHappy);
jerry.addAnimation('..',jerryHappy);
jerry.changeAnimation("..",jerryHappy);
tom.velocityX=0;
tom.x=tom.x+50
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.x=tom.x-20;
jerry.addAnimation("..",jerryTease);
jerry.changeAnimation("..",jerryTease);
tom.addAnimation("..",catMoving);
tom.changeAnimation("..",catMoving);
}

}
