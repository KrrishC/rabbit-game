var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf;
var appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ('apple.png');
  leafImg = loadImage ('leaf.png');

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0){
  if (select_sprites ==1){
 spawnApple();
  }
else {
   spawnLeaf();
;
}
  
}


  drawSprites();
}

function spawnApple(){
  if (frameCount % 80 == 0){

    apple = createSprite(100,100);
    apple.addImage(appleImg);
    apple.velocityY = 6
    apple.x = random(100,300);
    apple.lifetime = 200;
    apple.scale = 0.1;

  }

}
function spawnLeaf(){
  if (frameCount % 80 == 0){

    leaf = createSprite(100,100);
    leaf.addImage(leafImg);
    leaf.velocityY = 6
    leaf.x = random(100,300);
    leaf.lifetime = 200;
    leaf.scale = 0.1;

  }
}
