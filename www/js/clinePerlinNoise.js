let increament = 0.1;
let scale = 10;
let rows, cols;
let zoff = 0;
let particles = [];
let flowfield;

let canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight, P2D);
    // translate(window.innerWidth / 2, window.innerHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-3');
    cols = floor(width / scale);
    rows = floor(height / scale);

    flowfield = new Array(cols * rows);
    for (let i = 0; i < 600; i++) {
        particles[i] = new Particle();
    }
    background(255, 2);
}



function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 6;
            let vec = p5.Vector.fromAngle(angle);
            vec.setMag(1);
            flowfield[index] = vec;
            xoff += increament;
            stroke(0, 5);
        }
        yoff += increament;
        zoff += increament;
    }
    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}