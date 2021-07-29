var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var score;
var cloudImg;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  trex_collided = loadImage("trex_collided.png");
cloudImg=loadImage("cloud.png");
  groundImage = loadImage("ground2.png");



}

function setup() {

  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  //creating invisible ground
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  //generate random numbers
  var rand = Math.round(random(1, 100));
  console.log(rand);

  var marks = [35, 38, 42, 45, 43, 34, 46, 41, 48, 32];
  for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 45) {
      console.log(marks[i]);
    }
  }

}

function draw() {
  //set background color
  background(180);

  //console.log(trex.y)



  // jump when the space key is pressed
  if (keyDown("space") && trex.y >= 161) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //stop trex from falling down
  trex.collide(invisibleGround);

  //Spawn Clouds
  spawnClouds()
console.log(frameCount);
  drawSprites();
}

//function to spawn the clouds
function spawnClouds() {
  // write your code here 
  if(frameCount%60===0){
    var cloud=createSprite(600,100,40,10);
    cloud.addImage(cloudImg);
    cloud.scale=0.5;
    cloud.velocityX=-3;
    cloud.y=Math.round(random(10,60));
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
  }

}



