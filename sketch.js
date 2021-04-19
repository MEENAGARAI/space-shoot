var backgroundImg;
var spaceshipImg;
var alien;
var alienImg;
var shoot;
var meteor
var flag = 0;
var alienGrp;
var shootGrp;
var AshootGrp;
var bubbleGrp;
var meteorGrp;
var score=0;
var lifeline=3;
var gameState=5;
var c=0;

function preload(){
  backgroundImg=loadImage("images/space.jpg");
  spaceshipImg=loadImage("images/spaceship.png");
  alienImg=loadImage("images/alien.png");
  bulletImg=loadImage("images/bullet.png");
  bubbleImg=loadImage("images/add.png")
  meteorImg=loadImage("images/meteor.png")
  AshootImg=loadImage("images/shoot.png")
  explode=loadImage("images/explode.png")
}

function setup() {
  createCanvas(600, 600);
  spaceship=createSprite(300, 500, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.1
  alienGrp=new Group();
  shootGrp=new Group();
  AshootGrp=new Group();
  bubbleGrp=new Group();
  meteorGrp=new Group();
  dummy=createSprite(300,540,600,1)
  dummy.visible=false


}

function draw() {
  background(backgroundImg);  

  


  if(gameState===0){
    if(keyDown(LEFT_ARROW)){
      spaceship.x -= 5
    }
    if(keyDown(RIGHT_ARROW)){
      spaceship.x += 5
    }
    if(keyWentDown("space")&& flag===0){
      Shoot();
      flag = 1;
    }

    if(keyWentUp("space")){
    // flag=0;
    setInterval(call, 1000);
      
      function call(){
        flag = 0
      }
    }

    spawnBubble();
    spawnAliens();
    for(var i=0; i<alienGrp.length;i++){
      if(alienGrp.isTouching(dummy)&& c===0){
        lifeline-=1; 
        c=1
      }
    }

    for(var i=0; i<bubbleGrp.length;i++){
      if(bubbleGrp.isTouching(spaceship)){
        lifeline++;
        bubbleGrp.destroyEach()
      }
    }
  
    //destroying bullet and alien
    for(var j=0;j<shootGrp.length;j++){
      if(shootGrp.get(j).isTouching(alienGrp)){
        shootGrp.get(j).destroy();
        alienGrp.destroyEach(); 
        score+=1
      }
    }
  
  if(lifeline===0){
    gameState=1;
  }

  if(score>=2){
    gameState=10
  }

  for(var j=0;j<meteorGrp.length;j++){
    if(meteorGrp.get(j).isTouching(spaceship)){
      meteorGrp.get(j).destroy();
      lifeline--; 
    }
  }

}

if(gameState===2){
  if(keyDown(LEFT_ARROW)){
    spaceship.x -= 5
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x += 5
  }
  if(keyWentDown("space")&& flag===0){
    Shoot();
    flag = 1;
  }

  if(keyWentUp("space")){
  // flag=0;
  setInterval(call, 1000);
    
    function call(){
      flag = 0
    }
  }

  spawnBubble();
  spawnAliens();
  spawnMeteor()
  for(var i=0; i<alienGrp.length;i++){
    if(alienGrp.isTouching(dummy)&& c===0){
      lifeline-=1; 
      c=1
    }
  }

  for(var i=0; i<bubbleGrp.length;i++){
    if(bubbleGrp.isTouching(spaceship)){
      lifeline++;
      bubbleGrp.destroyEach()
    }
  }

  //destroying bullet and alien
  for(var j=0;j<shootGrp.length;j++){
    if(shootGrp.get(j).isTouching(alienGrp)){
      shootGrp.get(j).destroy();
      alienGrp.destroyEach(); 
      score+=1
    }
  }

if(lifeline===0){
  gameState=1;
}

for(var j=0;j<meteorGrp.length;j++){
  if(meteorGrp.get(j).isTouching(spaceship)){
    meteorGrp.get(j).destroy();
    lifeline--; 
  }
}

if(score>=4){
  gameState=15
}

}

if(gameState===3){
  if(keyDown(LEFT_ARROW)){
    spaceship.x -= 5
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x += 5
  }
  if(keyWentDown("space")&& flag===0){
    Shoot();
    flag = 1;
  }

  if(keyWentUp("space")){
  // flag=0;
  setInterval(call, 1000);
    
    function call(){
      flag = 0
    }
  }

  spawnBubble();
  spawnAlienshoot();
  spawnMeteor()
  for(var i=0; i<alienGrp.length;i++){
    if(alienGrp.isTouching(dummy)&& c===0){
      lifeline-=1; 
      c=1
    }
  }

  for(var i=0; i<bubbleGrp.length;i++){
    if(bubbleGrp.isTouching(spaceship)){
      lifeline++;
      bubbleGrp.destroyEach()
    }
  }

  //destroying bullet and alien
  for(var j=0;j<shootGrp.length;j++){
    if(shootGrp.get(j).isTouching(alienGrp)){
      shootGrp.get(j).destroy();
      alienGrp.destroyEach(); 
      score+=1
    }
  }

if(lifeline===0){
  gameState=1;
}

for(var j=0;j<meteorGrp.length;j++){
  if(meteorGrp.get(j).isTouching(spaceship)){
    meteorGrp.get(j).destroy();
    lifeline--; 
  }
}

for(var j=0;j<AshootGrp.length;j++){
  if(AshootGrp.get(j).isTouching(spaceship)){
    AshootGrp.get(j).destroy();
    spaceship.scale=1
    spaceship.addImage(explode)
    gameState=1;
  }
}

}


  edges=createEdgeSprites()
  spaceship.collide(edges[0])
  spaceship.collide(edges[1])

  drawSprites();

  if(gameState===5){
    textSize(28);
    fill(rgb(random(0,255),random(0,255),random(0,255)));
    text("Press Enter to start the game",120,280)
    text("Level 1",250,320)
    if(keyCode===13){
      gameState=0;
    }
    alienGrp.setLifetimeEach(0);
    meteorGrp.setLifetimeEach(0);
    bubbleGrp.setLifetimeEach(0);
  }

  if(gameState===10){
    textSize(28);
    fill(rgb(random(0,255),random(0,255),random(0,255)));
    text("Press Enter to Resume",150,280)
    text("Level 2",250,320)
    if(keyCode===13){
      gameState=2;
    }
    alienGrp.setLifetimeEach(0);
    meteorGrp.setLifetimeEach(0);
    bubbleGrp.setLifetimeEach(0);
  }

  if(gameState===15){
    textSize(28);
    fill(rgb(random(0,255),random(0,255),random(0,255)));
    text("Press Enter to Resume",150,280)
    text("Level 3",250,320)
    if(keyCode===13){
      gameState=3;
    }
    alienGrp.setLifetimeEach(0);
    meteorGrp.setLifetimeEach(0);
    bubbleGrp.setLifetimeEach(0);
  }

  if(gameState===1){
    alienGrp.setVelocityYEach(0);
    alienGrp.setLifetimeEach(-1);
    meteorGrp.setVelocityYEach(0);
    meteorGrp.setLifetimeEach(-1);
    bubbleGrp.setVelocityYEach(0);
    bubbleGrp.setLifetimeEach(-1);
    textSize(28);
    fill("white");
    text("Game Over!", 230, 300)
  }

  textSize(30);
  fill("white");
  text("Score: "+ score, 450, 50);
  text("Lifelines: " + lifeline, 50, 50);

}

function Shoot(){
  shoot=createSprite(spaceship.x, spaceship.y, 10, 10);
  shoot.addImage(bulletImg);
  //shoot.debug = true;
  shoot.scale=0.1
  shoot.velocityY=-5;
  shoot.lifetime=100;
  shootGrp.add(shoot);
}

function spawnAliens(){
  if(frameCount%150===0){
  alien=createSprite(random(50, 550), -50, 20, 20);
  c=0
  alien.addImage(alienImg);
  //alien.debug=true; 
  alien.setCollider("circle", 0, 0, 340);
  alien.scale=0.1;
  alien.velocityY=3+score/15;
  alien.lifetime=200;
  alienGrp.add(alien);

  }
}

function spawnBubble(){
  if(frameCount%1000===0){
  bubble=createSprite(random(50,550),-50, 10, 10);
  bubble.addImage(bubbleImg);
  //bubble.debug=true; 
  bubble.setCollider("circle", 0, 0, 80);
  bubble.scale=0.5
  bubble.velocityY=5;
  bubble.lifetime=100;
  bubbleGrp.add(bubble);
}
}

function spawnMeteor(){
  if(frameCount%80===0){
  meteor=createSprite(random(50,550),-50, 10, 10);
  meteor.addImage(meteorImg);
  //meteor.debug=true; 
  meteor.setCollider("circle", 0, 0, 300);
  meteor.scale=0.05
  meteor.velocityY=5;
  meteor.lifetime=300;
  meteorGrp.add(meteor);
}
}

function spawnAlienshoot(){
  if(frameCount%150===0){
    alien=createSprite(random(50, 550), -50, 20, 20);
    c=0
    
    Ashoot=createSprite(alien.x,alien.y,10,10)
    Ashoot.addImage(AshootImg);
    Ashoot.scale=0.05;
    Ashoot.velocityY=6
    Ashoot.lifetime=200;
    AshootGrp.add(Ashoot);

    alien.addImage(alienImg);
    //alien.debug=true; 
    alien.setCollider("circle", 0, 0, 340);
    alien.scale=0.1;
    alien.velocityY=3+score/15;
    alien.lifetime=200;
    alienGrp.add(alien);
  
    }
}
