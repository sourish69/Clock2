var sc, mn, hr;
var scAngle, mnAngle, hrAngle;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  angleMode(DEGREES);
  
  push();
  stroke(255,0,0);
  strokeWeight(7);
  translate(150,200)
  //line(0,0,150,0); 
  rotate(scAngle);
  line(0,0,150,0); 
  pop(); 

  push();
  stroke(0,255,0);
  strokeWeight(7);
  translate(150,200)
  //line(0,0,100,0); 
  rotate(mnAngle);
  line(0,0,100,0); 
  pop();

  push();
  stroke(0,0,255);
  strokeWeight(7);
  translate(150,200)
  //line(0,0,50,0); 
  rotate(hrAngle);
  line(0,0,50,0);   
  pop();
  
}