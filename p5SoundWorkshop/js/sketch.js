

 let mySong, amplitude
 function preload(){
     mySong = loadSound('assets/massiveAttackAngel.mp3');
}
function setup() {
    mySong.play();
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    amplitude = new p5.Amplitude();
}

function draw() {
    let level = amplitude.getLevel();
    let col= map(level,0,1,0,255);
    console.log (col);

    background(col*5,70,255-col);

    

    fill(255, col, 255);
    ellipse (width/2, height/2, col*5);
    fill(60, 60, col);
    ellipse (width/2, height/2, col*3);
    fill(250, col, 255);
    ellipse (width/2, height/2, col);

    fill(255, col*5, 255);
    ellipse (width/4, height/4, col*5);
    fill(60, 60, col);
    ellipse (width/3, height/3, col*3);
    fill(col, col, 255);
    ellipse (width/5, height/5, col);
if (col > 50) {
    fill(255,255,255);
    ellipse (width/2, height/2, col*10);
}

}