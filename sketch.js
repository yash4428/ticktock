function setup() {
  createCanvas(400,400);
  
}

function draw() {
background(0);  
angleMode(DEGREES);
let hr = hour();
let  mn = minute()
let  sc = second();


 
scAngle = map(sc,0,60,0,360);
//arc(200,200,300,300,0,scAngle)
mnAngle = map(mn,0,60,0,360);
hrAngle = map(hr,0,60,0,360);

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
push();
rotate(mnAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,100,0);
pop();
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,100,0);
pop();



drawSprites();
}