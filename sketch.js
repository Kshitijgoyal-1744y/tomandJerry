
var jerry,jerry1,jerryCheese,jerry2
var tom,tomRunning,tomATREST,tomsitting
var garden,backGround
function preload() {
    //load the images here
    tomRunning = loadAnimation("cat2.png","cat3.png")
    tomATREST = loadImage("cat1.png")
    tomsitting = loadImage("cat4.png")
    jerry1 = loadAnimation("mouse2.png","mouse3.png")
    jerryCheese = loadImage("mouse1.png")
    jerry2 = loadImage("mouse4.png")
    backGround = loadImage("garden.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
    garden = createSprite(500,height/2,20,20)
    garden.addImage(backGround)


    tom = createSprite(750,480,20,20)
    tom.addImage(tomATREST)
    tom.scale = 0.15

    tom.addAnimation("tommy",tomRunning) 
    tom.addAnimation("r",tomsitting)
    tom.setCollider("rectangle",0,0,30,500)


  jerry = createSprite(200,500,20,20)
  jerry.addImage(jerryCheese)
  jerry.addAnimation("jerryt",jerry1)
  jerry.addImage(jerry2)
  jerry.scale = 0.09
 
  jerry.setCollider("rectangle",0,0,30,500)
  
}

function draw() {

    background(255);
    if(mousePressedOver(garden)){
     tom.changeAnimation("tommy",tomRunning) 
     jerry.changeAnimation("jerryt",jerry1)  
     tom.velocityX = -6
    }
   if(tom.x-jerry.x<tom.width/2+jerry.width/2
    &&jerry.x-tom.x<tom.width/2+jerry.width/2
    ){
      jerry.addImage("j",jerry2)
      jerry.changeAnimation("j")
      tom.addImage("r",tomsitting)
      tom.changeAnimation("r")
      tom.velocityX = 0
    }
    else{
      tom.changeAnimation(tomATREST)
  }

    drawSprites();
}

