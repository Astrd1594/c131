function preload(){
    img = loadImage('bed.jpg');
}
function setup(){
    canvas = createCanvas(800, 600);
    canvas.center()
}
function draw(){
    image(img, 0, 0, 800, 600);
    fill('#6a0dad');
    text('bed', 45, 175);
    noFill();
    stroke('#6a0dad');
    rect(125, 200, 450);
}