
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var survivalTime,score;
var ground,invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  ground=createSprite(300,280,600,10);
  ground.velocityX=-4; 
  ground.shapeColor="brown"
  
  monkey=createSprite(50,250,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.setCollider("rectangle",0,0,300,600);
  
  invisibleGround=createSprite(300,280,600,10)
  invisibleGround.visible=false;
 
  obstacleGroup=new Group();
  FoodGroup=new Group();
  
  survivalTime=0;
  score=0;
  
  
}


function draw() {
background(255)  
  spawnBanana()
  spawnObstacles() 
  monkey.collide(invisibleGround);
  obstacleGroup.collide(invisibleGround);
 monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x<200) {
    ground.x = ground.width /2;
  }

if(keyDown("space")&& monkey.y >= 240) {
        monkey.velocityY = -12;
   } 
 
  if (FoodGroup.isTouching(monkey)) {
      FoodGroup.destroyEach()
    survivalTime=survivalTime+2;
      }
  if ( obstacleGroup.isTouching(monkey)) {
       obstacleGroup.destroyEach()
     survivalTime=survivalTime-2;
      }
  
stroke("black")
textSize(20); 
score=score + Math.round(getFrameRate()/60);  
text("Score:"+score,100,50)  
  
 stroke("black")
textSize(20);  
 text("SurvivalTime:"+survivalTime,100,70) 
  
  
  drawSprites();
}
 function spawnBanana()            {  
   if (frameCount % 120 === 0) {
    var Banana= createSprite(380,120,40,10);
    Banana.y = Math.round(random(140,180));
    Banana.addImage(bananaImage);
    Banana.scale = 0.1;
    Banana.velocityX = -3;
    Banana.lifetime=120; 
     FoodGroup.add(Banana)
   }
 }
  
   function spawnObstacles()            {  
   if (frameCount % 300 === 0) {
    var obstacle= createSprite(380,280,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
     obstacle.lifetime=200;
     obstacleGroup.add(obstacle)
     obstacle.setCollider("circle",0,0,200);
  
     
     
   }
 }
  
  







