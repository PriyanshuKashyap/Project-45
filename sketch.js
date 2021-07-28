var pkbob, pkbobAnim, bgImage, bgSprite1, bgSprite2, virus, virusImg, rand, obstacleImg, obstacleSpr;
var pkbobstop;
var obstacleFrameCount = 120;
//var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var gameState = "serve";
var edges;
var score = 100;
var count = 0;
function preload() {
  pkbobAnim = loadAnimation("ch_01.png", "ch_02.png", "ch_03.png", "ch_04.png", "ch_05.png", "ch_06.png", "ch_07.png", "ch_08.png");
  pkbobstop = loadAnimation("ch_01.png");
  bgImage = loadImage("InfScrollBg.jpg");
  rand = Math.round(random(1, 6));
  obstacleImg = loadImage("Obstacle" + rand + ".png");
}

function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();
  pkbob = createSprite(400, 222, 50, 50);
  pkbob.addAnimation("pkbob", pkbobAnim);
  pkbob.addAnimation("pkbob2", pkbobstop);
  pkbob.scale = 0.18;
  pkbob.depth = 2;
  bgSprite1 = createSprite(0, 125);
  bgSprite1.addAnimation("bgSpr1", bgImage);
  //var bg = createSprite(0, 0, 1600, 800);
  //bg.shapeColor = "rgba(0, 0, 0, 0.5)";
  bgSprite1.depth = 1;
  bgSprite1.x = bgSprite1.width / 2;
  bgSprite1.velocityX = -6;
  
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
  /*bgSprite2 = createSprite(1145, 125, width, height);
  bgSprite2.addAnimation("bgSpr2", bgImage);
  bgSprite2.depth = 1;
  bgSprite2.velocityX = -6;
  bgSprite1.debug = true;
  bgSprite2.debug = true;*/
  //pkbob.debug = true;
  virusImg = loadImage("virus2.png");
  //virus = createSprite(random(0, width), random(0, height));
  virus = createSprite(600, 200);
  virus.addImage("virus", virusImg);
  virus.scale = 0.05;
  //virus.setVelocity(random(-30, 30), random(-30, 30));
  obstacleSpr = createSprite(width - 10, 222);
  obstacleSpr.addImage("obstacle", obstacleImg);
  obstacleSpr.velocityX = -6;
  //obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
}

function draw() {
  //console.log("Game State: " + gameState, "Player visibility: " + pkbob.visible, "Background visibility: " + bgSprite1.visible, "Obstacle visibility: " + obstacleSpr.visible, "Virus visibility: " + virus.visible);
  //console.log("Player velocity: x = " + pkbob.velocityX + ", y = " + pkbob.velocityY, "Background velocity: x = " + bgSprite1.velocityX + ", y = " + bgSprite1.velocityY, "Obstacle velocity: x = " + obstacleSpr.velocityX + ", y = " + obstacleSpr.velocityY, "Virus velocity: x = " + virus.velocityX + ", y = " + virus.velocityY);
  console.log(score);
  //console.log("Virus: " + virus.isTouching(pkbob), virus.x, virus.y);
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
  //background(bgImage);
  //rand = Math.round(random(1, 6));
  //console.log(rand);
  //obstacleImg = loadImage("Obstacle" + rand + ".png");
  //obstacleSpr.addImage("obstacle", obstacleImg);
  //obstacleSpr.velocityX = -6;
  background(0);
  //bgSprite1 = createSprite(0, 125);
  //bgSprite1.addAnimation("bgSpr1", bgImage);
  //bgSprite1.depth = 1;
  //bgSprite1.x = bgSprite1.width / 2;
  //bgSprite1.velocityX = -6;
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
  
  if (gameState === "serve") {
    background(bgImage);
    bgSprite1.visible = false;
    pkbob.setVelocity(0, 0);
    obstacleFrameCount = 120;
    //pkbob.visible = true;
    obstacleSpr.setVelocity(0, 0);
    obstacleSpr.visible = false;
    obstacleSpr.x = width - 10;
    obstacleSpr.y = 222;
    bgSprite1.setVelocity(0, 0);
    score = 100;
    var bg = createSprite(0, 0, 1600, 800);
    bg.shapeColor = "rgba(0, 0, 0, 0.000001)";
    push();
    //fill("black");
    fill("white");
    textSize(15);
    text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship,", 0, 45);
    text(" and discipleship.", 0, 60);
    text("Throughout this game, you will be tested on discipleship. ", 0, 90);
    text("It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 120);
    text("Use the 'r' key for game pausing and 'space' for game resuming purposes.", 0, 180);
    //fill("gold");
    text("Your key information including your score will be printed in the beginning, the end game state, and the console", 0, 270);
    text("(Mac: Control + Mouse + Inspect --> >> Console), (Windows: Right Click + Inspect --> >> Console).", 0, 290);
    //fill("grey");
    //text("Be sure to utilize this feature at the beginning and end slots of the game.", 0, 315);
    //fill("white");
    text("Be sure to utilize this feature at the beginning and end slots of the game.", 0, 315);
    text("By alternative, if you press the key 'q', you will have quit the game.", 0, 360);
    //fill("brown");
    text("Press the key 'space' to continue.", 400, 200);
    pop();  
    pkbob.y = 222;
    if (keyIsDown(32)) {
      gameState = "play";
    }

  }
  
  if (gameState === "play") {
    virus.setVelocity(random(-30, 30), random(-30, 30));
    virus.bounceOff(edges);
    bgSprite1.visible = true;
    //pkbob.visible = true;
    obstacleSpr.visible = true;
    obstacleSpr.velocityX = -6;
    obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;
    
    count++;
    score = score + 0.5;
    if (bgSprite1.x < 0) {
      bgSprite1.x = bgSprite1.width / 2;
      //bgSprite2.x = 1145;
    }

    /*if (keyIsDown(32)) {
      //if (keyCode === 38) {
      pkbob.velocityY = -5;
      //}
    }*/

    pkbob.velocityY = 5;
    if (pkbob.y > 222) {
      pkbob.y = 222;
    }
    //pkbob.collide(bgSprite1);
    if (count % obstacleFrameCount === 0) {
      //image(obstacle, width - 20, 222);
      //obstacleImg = loadImage("Obstacle" + rand + ".png");
      //obstacleSpr.x = width - 10;
      //obstacleSpr.changeImage("obstacle", obstacleImg);
      rand = Math.round(random(1, 6));
      obstacleImg = loadImage("Obstacle" + rand + ".png");
      obstacleSpr = createSprite(width - 10, 222);
      //obstacleSpr.visible = true;
      obstacleSpr.addImage("obstacle", obstacleImg);
      obstacleSpr.velocityX = -6;
      obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;
    }

    if (frameCount % 20 === 0) {
      virus = createSprite(600, 200);
      virus.addImage("virus", virusImg);
      virus.scale = 0.05;
      virus.setVelocity(random(-30, 30), random(-30, 30));
      virus.bounceOff(edges);
    }

    if (pkbob.isTouching(obstacleSpr)) {
      //bgSprite1.velocityX = 0;
      //obstacleSpr.velocityX = 0;
      //pkbob.velocityY = 0;
      //virus.setVelocity(0, 0);
      score = score - 10;
      //gameState = "end";
    }

    if (keyIsDown(82)) {
      obstacleSpr.setVelocity(0, 0);
      pkbob.setVelocity(0, 0);
      virus.setVelocity(0, 0);
      bgSprite1.setVelocity(0, 0);
      gameState = "pause";
    }

    if (virus.isTouching(pkbob)) {
      virus = createSprite(pkbob.x, pkbob.y);
      virus.addImage("virus", virusImg);
      virus.scale = 0.05;
      virus.setVelocity(random(-30, 30), random(-30, 30));
      virus.bounceOff(edges);
    }

    if (score % 100 === 0) {
      //console.log(true);
      background.velocityX += 0.5;
      obstacleFrameCount -= 10;
      /*if (count % obstacleFrameCount === 0) {
        rand = Math.round(random(1, 6));
        obstacleImg = loadImage("Obstacle" + rand + ".png");
        obstacleSpr = createSprite(width - 10, 222);
        //obstacleSpr.visible = true;
        obstacleSpr.addImage("obstacle", obstacleImg);
        obstacleSpr.velocityX = -6;
        obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;
      }*/
    }

    if (score <= 0 || score >= 1000) {
      gameState = "end";
    }
  }

  if (gameState === "pause") {
    if (keyIsDown(32)) {
      gameState = "play";
    }
  }

  if (gameState === "end") {
    background("black");
    bgSprite1.setVelocity(0, 0);
    bgSprite1.visible = false;
    virus.setVelocity(0, 0);
    virus.visible = false;
    obstacleSpr.setVelocity(0, 0);
    obstacleSpr.visible = false;
    pkbob.setVelocity(0, 0);
    pkbob.y = 300;
    pkbob.changeAnimation("pkbob2", pkbobstop);
    
    //pkbob.x = pkbob.x;
    //pkbob.y = pkbob.y;
    push();
    fill("red");
    //textSize(30);
    textStyle(BOLD);
    if (score <= 0) {
      //textSize(30);
      //textStyle(BOLD);
      /*text("Sorry to say, but you have clearly proven yourself an immoral and an irresponsible citizen by rejecting health guidelines and", (((width / 2) / 3) / 5), height/4);
      text(" performing relative immoral actions in life.", (((width / 2) / 3) / 5), height / 3);
      text("However, if you use life chances wisely, you can become a responsible citizen that is of highest expectations and are thus forgiven", (((width / 2) / 3) / 5), height/2.5);
      text(" from actions of immorality resulting in consequences. ", (((width / 2) / 3) / 5), height / 2.25);
      text("Remember, in life, failure means success, but it can not control after a point of limited extension.")
      text("Press the key 'r' for restarting purposes.", ((width / 2) / 3), height/2);*/
      text("Sorry to say, but you have clearly proven yourself an immoral and an irresponsible citizen by rejecting health guidelines and", (((width / 2) / 3) / 5), height/5);
      text(" performing relative immoral actions in life resulting in consequences.", (((width / 2) / 3) / 5), height / 4);
      text("However, if you use life chances wisely, you can become a responsible citizen that is of highest expectations and are thus forgiven", (((width / 2) / 3) / 5), height/3);
      text(" from actions of immorality resulting in proper sustainabily and stewardship. ", (((width / 2) / 3) / 5), height / 2.6);
      text("Remember, in life, failure always means success, but success can not control failure after a point of limited extension.", (((width / 2) / 3) / 5), height / 2.25);
      text("Press the key 'r' for restarting purposes.", ((width / 2) / 3), height/2);
      push();
      fill("white");
      text("failure", 40, 40);
      pop();
      console.log("failure");
    } 
    
    if (score >= 1000) {
      text("Dear responsible citizen, may God gift you eternal life and blessings after you have demonstrated responsibility and actions of", (((width / 2) / 3) / 5), height/4);
      text(" common good.", (((width / 2) / 3) / 5), height/3);
      text("With this, you have chosen to respect Mother Earth. You may choose to restart by pressing the key 'r'.", (((width / 2) / 3) / 5), height/2);
      push();
      fill(0, 255, 0);
      text("success", 40, 40);
      console.log("success");
    }
    //text("Sorry to say, but you have clearly proven yourself an immoral and an irresponsible citizen.", ((width / 2) / 3), height/4);
    //text("Press the key 'r' for restarting purposes.", ((width / 2) / 3), height/2);
    pop();
    
    if (keyIsDown(82)) {
      //bgSprite1.visible = true;
      virus.visible = true;
      obstacleSpr.visible = true;
      virus.setVelocity(0, 0);
      obstacleSpr.setVelocity(0, 0);
      pkbob.setVelocity(0, 0);
      //bgSprite1.setVelocity
      pkbob.changeAnimation("pkbob", pkbobAnim);
      gameState = "serve";
    }
  }

  if (gameState !== "play") {
    count = 0;
    fill("white");
    text("Score: " + score, 40, 20);
  }

  

  drawSprites();
}

function keyPressed() {
  /*if (keyIsDown(LEFT_ARROW)) {
    pkbob.x = pkbob.x - 5;
  }*/

  /*if (keyIsDown(RIGHT_ARROW)) {
    pkbob.x = pkbob.x + 5;
  }*/
  if (keyIsDown(32) && pkbob.y >= 30) {
    //if (keyCode === 38) {
    pkbob.velocityY = -50;
    //console.log(pkbob.y);
    //}
  } //else {
    //pkbob.velocityY = 5;
  //}
  
  //pkbob.velocityY = 5;

  /*if (keyIsDown(DOWN_ARROW)) {
    pkbob.y = pkbob.y + 5;
  }*/
  /*if (pkbob.y > 222) {
    pkbob.y = 222;
  }*/
  //pkbob.collide(bgSprite1);
}
//No issues(0)