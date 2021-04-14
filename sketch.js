var snowImage;
var snow;

function preload(){
  snowImage=loadImage("snow3.jpg")

}

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(snowImage);  


  drawSprites();
}
 