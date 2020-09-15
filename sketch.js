var a, b, c, d;

function setup() {
   createCanvas(800,400);
  a = createSprite(200, 200, 50, 50);
  b = createSprite(200, 300, 50, 50);
  c = createSprite(100,100,50,50);
  d = createSprite(400,100,50,50);

  a.debug = true;
  b.debug = true;
  c.debug = true;
  d.debug = true;


c.velocityX = 2;
d.velocityX = -2;




}

function draw() {
  background(0);  
  
  a.x = World.mouseX;
  a.y = World.mouseY;
  a.shapeColor = "pink";
  b.shapeColor = "pink";




 if ( d.x-c.x<c.width/2+d.width/2) {

  c.velocityX = c.velocityX*-1;
  d.velocityX = d.velocityX*-1;

 }
  
 if (touching()){
  b.shapeColor = "blue";
  a.shapeColor = "blue";
  
 }else{
  
  a.shapeColor = "pink";
  b.shapeColor = "pink";
 }


 drawSprites();
}






