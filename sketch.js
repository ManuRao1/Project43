var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  hr = hour();
  sc = secoond();
  mn = minute();
  
  angleModes(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);

  line();
  drawSprites();
}
function line() {
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 100, 0);
}