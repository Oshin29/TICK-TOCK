var hr, mn, sec;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
   translate(200,200)
   rotate(-90)

  //Calculating time using predefined func from p5.js
  hr = hour();
  mn = minute();
  sc = second();
  
  
   scAngle = map(sc, 0, 60, 0, 360);
   mnAngle = map(mn,0,60,0,360);
   hrAngle = map(hr % 12,0,12,0,360);
  
  //drawing seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing mins hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();
  
  //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}
