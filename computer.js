function preload(){
    img = loadImage("computer.jpg")
}
function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 800, 600);
    fill('#6a0dad');
    text('computer', 45, 75);
    noFill();
    stroke('#6a0dad');
    rect(125, 60, 450);
}