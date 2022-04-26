function preload(){
    img = loadImage('piano.jpg');
}
function setup(){
    canvas = createCanvas(750, 600);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 750, 600);
    fill('#6a0dad');
    text('piano', 45, 75);
    noFill();
    stroke('#6a0dad');
    rect(125, 60, 500);
}