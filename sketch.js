var backGroundImg
var player,playerImg,alien,alienImg,asteroid,asteroidImg,rocket,rocketImg,ufo,ufoImg,bullet
var gameState = 0 
var rand
var mkc

function preload(){
  backGroundImg = loadImage("background.png")
  alienImg = loadImage("alien.png")
  ufoImg = loadImage("ufo.png")

  asteroidImg = loadImage("asteroid.png")
  rocketImg = loadImage("rocket.png")
}


function setup() {
  createCanvas(1080,700);

  player = createSprite(width/2,height/2)
  player.addImage(rocketImg)
  player.scale = 0.3
  
  mkc = createGroup()
  

  
}

function draw() {
  background("black");
  console.log(camera.position.y)
  
  if (gameState===0){
    
    textSize(20)
    fill("red")
    text("dodge all the obstacles like aliens,enemy ufo's,asteroids. Press w to play",width/2-width/3,540)
    textSize(50)
    text("SPACE GAME",width/2,100)

    if (keyDown("w")){
     
      gameState=1
    }
  }
if (gameState===1){

  camera.position.y=player.y-200
  
  imageMode(CENTER)
  image(backGroundImg,540,-1700)

rand = round(random(1,4))

 if (player.y % -200 === 0 ){
    
  if(rand === 1){
    asteroid = createSprite(random(200,500),player.y-900)
    asteroid.addImage(asteroidImg)
    asteroid.scale = 0.8
   asteroid.velocityX = random(-6,6)
   asteroid.velocityY = random(1,6)
   mkc.add(asteroid)
  
  }
  if ( rand  === 2){
    alien = createSprite(350,player.y-900)
    alien.addImage(alienImg)
    alien.velocityY = 6
    alien.scale = 0.6
    if (player.x<233){
    alien.velocityX = -6
    }
    if (player.x>=233 && player.x<=466){
      alien.velocityX = 0
      }
    if (player.x>466){
        alien.velocityX = 6
      }
      mkc.add(alien)
  }

  if (rand ===3){
    ufo = createSprite(random(200,500),player.y-900)
    ufo.addImage(ufoImg)
    ufo.scale = 0.1
    var speed = map(player.x,0,700,-6,6)
    ufo.velocityX = speed
    ufo.velocityY = 5
    mkc.add(ufo)
  }
  
   console.log(rand)
 }


  
  if (keyDown(UP_ARROW)){
    player.y=player.y-5
  }
  if (keyDown(RIGHT_ARROW)){
    player.x=player.x+5
  }
  if (keyDown(DOWN_ARROW)){
    player.y=player.y+5
  }
  if (keyDown(LEFT_ARROW)){
    player.x=player.x-5
  }

  if (keyDown("space")){
    console.log(player.y)
  }
  if(player.isTouching(mkc) ){
    gameState=3
  }
  drawSprites()
}

  

  if (gameState === 3){
    textSize(50)
    camera.position.y = 150
    fill("red")
    text("YOU LOST!!",width/2-width/4,340)
    text("press r to restart",width/2-width/4,440)

  }

  if (player.y<-3600){
    gameState = 2
    textSize(30)
    strokeWeight(1)
    stroke("yellow")
    fill("white")
    
    text("congratulations you have reached the destination",width/2-width/4,-3800)
  }
  
  
}