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

var ding=createSprite(50,200,15,15);
var wall1=createSprite(200,120,250,3);
var wall2=createSprite(200,280,250,3);
var wall3=createSprite(75,145,3,50);
var wall4=createSprite(75,255,3,50);
var wall5=createSprite(325,145,3,50);
var wall6=createSprite(325,255,3,50);
var wall7=createSprite(45,170,60,3);
var wall8=createSprite(45,230,60,3);
var wall9=createSprite(355,170,60,3);
var wall10=createSprite(355,230,60,3);
var wall11=createSprite(15,200,3,60);
var wall12=createSprite(385,200,3,60);
var dong1=createSprite(120,130,10,10);
var dong2=createSprite(170,270,10,10);
var dong3=createSprite(220,130,10,10);
var dong4=createSprite(270,270,10,10);


dong1.shapeColor="red";
dong2.shapeColor="red";
dong3.shapeColor="red";
dong4.shapeColor="red";
ding.shapeColor="green";

dong1.velocityY=8;
dong2.velocityY=-8;
dong3.velocityY=8;
dong4.velocityY=-8;

var death=0;

playSound("Background-music-(online-audio-converter.com).mp3",true);



function draw() {
  background("white");
  
  text("Deaths :"+death,200,100);
  
  
  
  
  fill("lightblue");
  stroke("white");
  rect(15,170,61,60);
  
  rect(324,170,61,60);
  
  dong1.bounceOff(wall1);
  dong2.bounceOff(wall1);
  dong3.bounceOff(wall1);
  dong4.bounceOff(wall1);
  
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall2);
  
  if(keyDown(RIGHT_ARROW)){
    ding.x=ding.x+2;
  }
  
  if(keyDown(LEFT_ARROW)){
    ding.x=ding.x-2;
  }
  
  if (ding.isTouching(wall11) || ding.isTouching(wall12) ||
  ding.isTouching(dong1) || ding.isTouching(dong2) || 
  ding.isTouching(dong3) || ding.isTouching(dong4)){
    death=death+1;
    ding.x=50;
    ding.y=200;
    
  }
  
  
  
  
  
  
  
  
  drawSprites();
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
