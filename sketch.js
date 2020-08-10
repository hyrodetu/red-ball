var b1, b2 
var theKillers,boy
function setup() {
  createCanvas(800,400);
  b1=createSprite(400, 200, 50, 50);
  b2=createSprite(700, 200, 50, 50);
  b1.shapeColor= "black"
  b2.shapeColor= "green";
  theKillers=createSprite(100, 200, 50, 50);
  boy=createSprite(300, 200, 50, 50);
  theKillers.shapeColor= "grey"
  boy.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  b2.x=mouseX
  b2.y=mouseY
  if(isTouching(b1,b2)){
      b1.shapeColor= "red";
      b2.shapeColor= "red";
  }
  else if(isTouching(theKillers,b2)){
    b2.shapeColor="red"
    theKillers.shapeColor="red"
  }
  else if (isTouching(boy, b2)){
b2.shapeColor="red"
boy.shapeColor="red"
  }
  else
  { b1.shapeColor= "black";
  b2.shapeColor= "green";
  theKillers.shapeColor= "grey";
  boy.shapeColor="blue";
}

  drawSprites();
}

function isTouching(o1,o2){
  if( o1.x-o2.x<=o1.width/2+o2.width/2
    &&o2.x-o1.x<=o1.width/2+o2.width/2
    &&o1.y-o2.y<=o1.height/2+o2.height/2
    &&o2.y-o1.y<=o1.height/2+o2.height/2){
 return true;
}
else{
  return false;
}
}