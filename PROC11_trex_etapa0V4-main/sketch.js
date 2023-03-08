

var player1,player2,player3,player4,player5,player6
var flechaD,flechaI
var kick , jump
var suelo 
function preload(){
  canchaImg = loadImage("37038.jpg")
player1Img = loadImage("player1sandia.png")
player2Img = loadImage("Hong_Kong.png")
player3Img = loadImage("serbiaPlayer.png")
player4Img = loadImage("ucraniaPlayer.png")
player5Img = loadImage("indiaPlayer.png")
player6Img = loadImage("italyPlayer.png")
flechaDimg = loadImage("Flecharoja.png")
flechaIimg = loadImage("flechaIzquierda.png")
kickImg = loadImage("kick.png")
jumpImg = loadImage("jump.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  player1 = createSprite(200,height-200)
  player2 = createSprite(width-200,height-200)
  player1.addImage(player1Img)
  player2.addImage(player2Img)
  flechaD = createSprite(150,height-50)
  flechaI = createSprite(50,height-50)
  flechaD.addImage(flechaDimg)
  flechaI.addImage(flechaIimg)
  flechaD.scale = 0.05
  flechaI.scale = 0.05
  kick = createSprite(width-150,height-50)
  jump = createSprite(width-50,height-50)
  kick.addImage(kickImg)
  jump.addImage(jumpImg)
  kick.scale = 0.1
  jump.scale = 0.1
  suelo = createSprite(width/2,height-100,width,10)
  suelo.visible=false
  
}

function draw(){
  background("black")
  image(canchaImg,0,0,width,height)
  player1.velocityY += 0.8
  player2.velocityY +=0.8
  player1.collide(suelo)
  player2.collide(suelo)
  if(mousePressedOver(flechaD)){
    player1.x +=10
  }
  if(mousePressedOver(flechaI)){
    player1.x -=10
  }
  if(mousePressedOver(jump)){
    player1.velocityY =-8
  }
drawSprites()
}
