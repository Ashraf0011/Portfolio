// De Jong Attractor

let a,b,c,d,x,y;
let r,g,bl,t;
function setup() {
  let canvas = createCanvas(window.innerWidth,window.innerHeight);
  background(255);
  noStroke();
  canvas.position(0, 0);
  canvas.style('z-index', '-3');
a = -3; b = -3; c = -1.4; d = 3 ;
  x=0;
  y=0;
  
}

r=242; g=207; bl=29;
function draw() {
  translate(width/2,height/2);
  
  for(let i=0;i<10000;i++){
    let nextX = sin(a*y) -cos(b*x);
    let nextY = sin(c*x) - cos(d*y);  
   
    
    fill(r,g,bl,15);
    ellipse(nextX*250,nextY*250, 1, 1);
    
   fill(242, 98, 46,8);
     ellipse(nextX*250,nextY*250, x, y);
    
       
   fill(34, 183, 242,3);
     ellipse(nextX*250,nextY*250, x-1, y-1);
    x = nextX;
    y = nextY;
  }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}