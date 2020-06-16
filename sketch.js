// create thickness and wall variables
var thickness, wall;

//create bullet, speed, and weight variables
var bullet, speed, weight;

function setup() {
  
  //create canvas
  createCanvas(1200,400);

   //thickness variable
   thickness = random (22,83);

   //create wall
   wall = createSprite (1000, 200, thickness, height/2);
 
   //speed variable
   speed = random (223, 321);
 
   //weight variable
   weight = random (30,52);
  
  //display bullet on left of canvas
  bullet=createSprite(50, 200, 50,20); 

    //set bullet velocity
    bullet.velocityX = speed;

    //set bullet color
	  bullet.shapeColor=color(50);
  
    //set wall color
  	wall.shapeColor=color(80,80,80)
  
}

function draw() {
  
  //set background
  background(255,255,255);  

  //if bullet collides with wall...
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
      bullet.velocityX=0;
      var deformation=0.5 * weight * speed* speed/thickness*thickness*thickness;
      if(deformation<12.43)
      {
        bullet.shapeColor=color(0,255,0);
      }
      if(deformation<12.43 && deformation>3.68)
      {
        bullet.shapeColor=color(255,0,0);
      }
  }  

  //display sprites
  drawSprites();
  
}