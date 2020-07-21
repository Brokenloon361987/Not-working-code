var car , wall ;
var speed , weight;
var deformation;

function setup() {
createCanvas(1600,400);

speed = random(55,90);
weight = random (400,1500);

wall = createSprite (1200 , 200, 60 ,height/2 );
wall.shapeColor = "black";

car = createSprite(50, 200, 50, 80);
  car.shapeColor = "white";
  car.debug = false;
  car.velocityX = speed;




}
function draw (){
  background(120);
  if (wall.x - car.X<( car.width + wall.width )/2){
  car.velocityX = 0   ;
  var  deformation = 0.5 * weight * speed * speed /22500;
   console.log (deformation);
  if (deformation >180){
    car.shapecolor = color(255,0,0);
  }
  if (deformation <180 && deformation>100){
    car.shapecolor = color(230,230,0);
  }
  if (deformation <100){
    car.shapecolor = color(0,255,0);
  }
  }
     drawSprites();
}