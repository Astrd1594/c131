function preload(){
    img = loadImage('lamp.jpg');
}
function setup(){
    canvas = createCanvas(450, 600);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 450, 600);
    fill('#6a0dad');
    text('lamp', 45, 75);
    noFill();
    stroke('#6a0dad');
    rect(125, 60, 400);
}