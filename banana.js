function preload(){
    img = loadImage('banana.jpg');
}
function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 800, 600);
    fill('#6a0dad');
    text('banana', 45, 75);
    noFill();
    stroke('#6a0dad');
    rect(125, 60, 400);
}