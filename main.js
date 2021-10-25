// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// DRAW RIGHT BUILDING WINDOWS
ctx.fillStyle = "white"
for (let x = 171; x <= 271; x += 25) {
    ctx.fillRect(x, 115, 14, 500)
   
}

// DRAW WINDOWS ON THE BOTTOM OF LEFT BUILDING
for (let y = 370; y <= 595; y += 45) {
    ctx.fillRect(20, y, 110, 20)
    
}

//  DRAW WINDOWS ON THE TOP OF THE LEFT BUILDING

for (let y = 200; y <= 325; y += 25) {
    for (let x = 40; x <= 100; x += 20) {
        ctx.fillRect(x, y, 12, 12)
    } 
}