///////////////////////////  Collatz Conjecture ///////////////////////////////////////
//   Consider the following operation on an arbitrary positive integer:          /////
//                                                                              /////
//     If the number is even, divide it by two.                                /////
//     If the number is odd, triple it and add one.                           /////
//                                                                           /////
//  In modular arithmetic notation, define the function f as follows:       /////
//  For instance, starting with n = 12,                                    /////
//                one gets the sequence 12, 6, 3, 10, 5, 16, 8, 4, 2, 1.  /////
//////////////////////////////////////////////////////////////////////////////


const leng = 40;
const weigth = 3;
const scale = 0.3;
const angle = 0.2;
const lineWeightCoff = 0.01;
const startHeading = -90;
let s = 1;
let inc = 500;
let startPos;

let canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    translate(window.innerWidth / 2, window.innerHeight);
    stroke("#fcb69f");
    noFill();
    strokeWeight(weigth * scale);
    canvas.position(0, 0);
    canvas.style('z-index', '-3');

    //   background("#F2F2F2");
}


function draw() {
    startPos = createVector(window.innerWidth / 2, window.innerHeight);

    let sequence = [];
    let n = s;

    do {
        sequence.push(n);
        n = Collatz(n);
    } while (n != 1);
    sequence.push(1);
    sequence.reverse();

    let pos = startPos.copy();
    let h = startHeading;
    let lWcoff = 1;

    for (let j = 0; j < sequence.length; j++) {
        let value = sequence[j];
        if (value % 2 == 0) {
            h += angle;
        } else {
            h -= angle;
        } //Eif angle
        strokeWeight(weigth * lWcoff);
        lWcoff -= lineWeightCoff;
        beginShape();
        vertex(pos.x, pos.y);
        pos.add(createVector(leng * scale, 0).rotate(h));
        vertex(pos.x, pos.y);
        endShape();
    } //Efor lines
    s++;
    if (s > 5000) {
        s = 1;
    }


} //Edraw


function Collatz(n) {
    if (n % 2 == 0) {
        //even 
        return n / 2;
    } else {
        //odd
        return (n * 3 + 1) / 2;
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}