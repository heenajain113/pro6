var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1=createSprite(200,28,100,20)
goal1.shapeColor="yellow"

var goal2=createSprite(200,372,100,20)
goal2.shapeColor="yellow"

var playerMallet=createSprite(200,350,50,10)
playerMallet.shapeColor="black"

var computerMallet=createSprite(200,50,50,10)
computerMallet.shapeColor="black"

var ball=createSprite(200,200,10,10)
ball.shapeColor="white"

var wall1, wall2, wall3,wall4,wall5,wall6

var wall1=createSprite(380,200,10,400)
wall1.shapeColor="white"
var wall2=createSprite(20,200,10,400)
wall2.shapeColor="white"
var wall3=createSprite(200,380,400,10)
wall3.shapeColor="white"
var wall4=createSprite(200,20,400,10)
wall4.shapeColor="white"
var wall5=createSprite(200,125,400,10)
wall5.shapeColor="white"
var wall6=createSprite(200,375,400,10)
wall6.shapeColor="white"

var computerscore=0
var playerscore=0
var gamestate="serve"


function draw() {
  background("green")
  
  if (gamestate==="serve"){
    textSize(18);
    
    fill("white");
    text("press space to serve",202,158);
    computerMallet.x=200
    computerMallet.y=50
  }
  
  fill("white");
  
  text(playerscore,40,215)
  text(computerscore,40,195)
  
  playerMallet.velocityx=0
  playerMallet.velocityY=0
  
  createEdgeSprites()
  ball.bounceOff(wall1) ||ball.bounceOff(wall2) || ball.bounceOff(playerMallet)||  ball.bounceOff(computerMallet)
  
  playerMallet.bounceOff(wall1) || playerMallet.bounceOff(wall2) || playerMallet.bounceOff(wall3) ||
  playerMallet.bounceOff(wall4) ||playerMallet.bounceOff(wall6)
  
  computerMallet.bounceOff(wall5)
  if(keyDown("space")&& gamestate==="serve"){
    ball.velocityX=7
    ball.velocityY=-5
    gamestate="play"
  }
  
  
  if(keyDown("left")){
    playerMallet.x =playerMallet.x-10
  }
  
  if(keyDown("right")){
    playerMallet.x =playerMallet.x+10
  }
  
  
  if(keyDown("up")){
    if(playerMallet.y>25){
       playerMallet.y =playerMallet.y-10
    }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120){
      playerMallet.y =playermallet+10
    }
  }
  
  
  if(keyDown(RIGHT_ARROW)){
    playerMallet.velocityX=4
    playerMallet.velocityY=0
  }

  if(keyDown(LEFT_ARROW)){
    playerMallet.velocityX=-4
    playerMallet.velocityY=0
  }
  
  if(keyDown(DOWN_ARROW)){
    playerMallet.velocityX=0
    playerMallet.velocityY=4
  }
  
  if(keyDown(UP_ARROW)){
    playerMallet.velocityX=0
    playerMallet.velocityY=-4
  }
  computerMallet.x=ball.x

 if(playerscore===5 || computerscore===5){
  gamestate="over"
  text("Game Over",170,160)
 }
 
 //reset the ball to the centre if it crosses the screen
 if(ball.x>400  || ball.x<0){
    
    if(ball.x>400){
      computerscore=computerscore+1
    }
    if(ball.x<0){
      playerscore=playerscore+1
    }   
    }
 
 if(playerscore===5 || computerscore===5){
  gamestate="over"
  text("Game Over",170,160)
  text("press R to restart the game",150,180)
  playerMallet.y=350
  playerMallet.x=200
 }
 
 if(keyDown("r") && gamestate==="end"){
   gamestate="serve"
   computerscore=0
   playerscore=0
 }
 function reset(){
   ball.x=200
   ball.y=400
   
   ball.velocityY=0
   ball.velocityX=0
 }
 
 
 
 
  
  drawSprites()
}










// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
