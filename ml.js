var data = [];
var datax = [];
var datay = [];

var avgx;
var avgy;

var diffx;
var diffy;

var weight = [];

var finalweight;
var zerodecider;


function setup() {
  createCanvas(400, 400);
}

function numberGuess() {
  
  for (var i = 0; i < data.length; i++) {

    var x = data[i].x;
    datax.push(x);

    var y = data[i].y;
    datay.push(y);

    avgx += datax[i]/datax.length
    avgy += datay[i]/datay.length

    let diffx = x - avgx;
    let diffy = y - avgx;

    if (diffy = 0) {
      diffy += 1
    }

    let ratio = diffx/diffy
    if (ratio > 0) {
      ratio *= -1
    }

    finalweight = ratio/data.length;

    zerodecider = 0.2;


  }

}

function printText() {

  if (finalweight > zerodecider) {
    document.write("<h1>Computer guess: 0</h1>")

  }

  if (finalweight <= zerodecider) {
    document.write("<h1>Computer guess: 1</h1>")
  
  }

}

function mousePressed() {
  //This function adds data points to the list every time the mouse is clicked. 
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);
  var dot = createVector(x, y);
  data.push(dot);
}

function draw() {
  background(30);
  for (var i = 0; i < data.length; i++) {
    var x = map(data[i].x, 0, 1, 0, width);
    var y = map(data[i].y, 0, 1, height, 0);
    fill(255);
    stroke(255);
    ellipse(x, y, 5, 5);
  }

  if (data.length > 1) {
    numberGuess();
    printText();

  }
}
