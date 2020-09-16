var moveRect, fixRect;


function setup() {
  createCanvas(800,400);
  

  moveRect = createSprite(400,200,100,50);
  moveRect.debug = true;
  fixRect = createSprite(200,200,50,100);
  fixRect.debug = true;
 
 
}

function draw() {
  background("black");  
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;

  if(moveRect.x-fixRect.x<moveRect.width/2+fixRect.width/2 && fixRect.x-moveRect.x<moveRect.width/2+fixRect.width/2 &&moveRect.y-fixRect.y<moveRect.width/2+fixRect.width/2 && 
    fixRect.y-moveRect.y<moveRect.width/2+fixRect.width/2){

     moveRect.shapeColor = "cyan";
     fixRect.shapeColor = "cyan";

  }
  else{
      moveRect.shapeColor = "white";
      fixRect.shapeColor = "white";
  }

  drawSprites();
}