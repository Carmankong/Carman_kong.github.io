console.log("drawing js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(135,168,193)", 
    "rgb(185,230,228)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
]

console.log(colArray[3])

// complete drawing of a retangle
ctx.strokeStyle = colArray[4];
ctx.fillStyle = colArray[5];
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(120,400,302,88);
ctx.stroke();
ctx.fill();

// another rectangle
ctx.strokeStyle = "rgb(100,100,90)";
ctx.fillStyle = "rgb(50,255,90)";
ctx.lineWidth = 7;
ctx.beginPath();
ctx.rect(100,120,302,54);
ctx.stroke();
ctx.fill();

// draw circle
ctx.fillStyle = "rgb(255,204,51)"
ctx.strokeStyle = "rgb(51,51,255)"
ctx.lineWidth = 5;
ctx.beginPath();
// (x,y, radius, startangle (Math.PI), endangle(Math.PI))
ctx.arc(100,60, 50, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

// add text
ctx.fillStyle = "rgb(0,0,240)";
var myFont = "bold 30px monospace";
ctx.font = myFont;
ctx.fillText("hi people", 400,100);

// var BoxImg = new Image(); // Create new img element
// BoxImg.src = "image_test.png"; // Set Source path
// ctx.drawImage(BoxImg, 600,10,100,100);

// draw line
ctx.strokeStyle = "rgb(102,102,255)"
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0,250);
ctx.lineTo(750,250);
ctx.stroke();

// draw polyline with closure
ctx.strokeStyle = "rgb(122, 130, 45)";
ctx.fillStyle = "rgb(123, 255, 135)";
ctx.lineWidth = 12;
ctx.beginPath();
ctx.moveTo(020, 300);
ctx.lineTo(500, 300);
ctx.lineTo(700, 350);
ctx.lineTo(400, 350);
ctx.closePath();
ctx.stroke();
ctx.fill();

// draw shape with a gradient
var m_gradient = ctx.createLinearGradient(10,350,10,550);
m_gradient.addColorStop(0,"rgb(255,102,102)");
m_gradient.addColorStop(0.5,"rgb(255,255,153)");
m_gradient.addColorStop(1,"rgb(0,153,204)");
ctx.fillStyle = m_gradient;
ctx.beginPath()
ctx.rect(10,350, 200,200);
ctx.fill();
ctx.stroke();

// the curve
ctx.strokeStyle="rgb(25,34,0)";
ctx.beginPath();
ctx.moveTo(500,700);
ctx.lineWidth=10;
ctx.quadraticCurveTo(800, 450, 500, 400);
ctx.stroke();