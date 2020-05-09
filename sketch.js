var fixedrect , movingrect
var obj1 , obj2 , obj3

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400,200,50,80);
  fixedrect.shapeColor = "red";

  movingrect = createSprite(100,100,80,50);
  movingrect.shapeColor = "red";

  obj1= createSprite(200,200,50,50);
  obj1.shapeColor="blue";

  obj2=createSprite(600,200,50,50);
  obj2.shapeColor = "pink";

  obj3 = createSprite(300,200,50,50);
  obj3.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  

  //movingrect.x = mouseX;
 // movingrect.y = mouseY;
  obj3.x = mouseX;
  obj3.y=mouseY;
  
  if(isTouching(obj1,obj3)){
 obj1.shapeColor = "purple";
obj3.shapeColor="purple";
  }
  else{
    obj1.shapeColor="blue";
    obj3.shapeColor="blue";
  }
 
  drawSprites();
}

function isTouching(object1, object2){
  if(object2.x - object1.x < object2.width/2+object1.width/2
    && object1.x- object2.x < object2.width/2 + object1.width/2
    && object2.y - object1.y<object2.height/2 + object1.height/2
    && object1.y - object2.y < object2.height/2 + object1.height/2){
    return true;
  }
  else{
    return false;
  }
}