var hr, mn, sec,c,d;
hr = hour();
mn = minute();
sec = seccond();

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  push();
rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  text('Current second: ' + sec, 5, 50);
  angleMode(DEGREES);

  text('Current minute: ' + mn, 5, 80);

  text('Current hour: ' + hr, 5, 110);

   c = map(mouseX, 0, width, 0, 175);
  
   d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  drawSprites();
}