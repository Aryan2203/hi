var box;
var ball

function setup() {
  createCanvas(400,400);
  box =createSprite(200,150,50,50)
  ball=createSprite(15,350,20,20)
  ball.shapeColor="red"
}
function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
   box.position.x= box.position.x + 5 
  }
  if(keyDown(LEFT_ARROW)){
    box.position.x=box.position.x - 5
  }
  if (keyDown(UP_ARROW)){
    box.position.y=box.position.y - 5
  }
  if (keyDown(DOWN_ARROW)){
    box.position.y=box.position.y + 5
  }
 drawSprites ()

 
}




