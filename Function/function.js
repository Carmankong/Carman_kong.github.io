console.log("drawing js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
]

console.log(colArray[3])

// --------------------function---------------------------------
function drawRectangle(x,y,w,h,fcol,scol,lw){
    ctx.fillStyle = fcol;
    ctx.strokeStyle = scol;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = scol;
    ctx.beginPath();
    ctx.arc(x+w/2, y+h/2, h/2, 0, 2*Math.PI);
    ctx.fill();
}

drawRectangle(30,100,250,95,colArray[7],colArray[8],2);
drawRectangle(200,200,250,95,colArray[8],colArray[7],2);
drawRectangle(400,300,250,95,colArray[7],colArray[8],2);
drawRectangle(200,400,250,95,colArray[8],colArray[7],2);
drawRectangle(30,500,250,95,colArray[7],colArray[8],2);
drawRectangle()

function cirle(x,y,r,fillc,strokec,linew,fill,stroke){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillc;
        ctx.fill();
    }
    if(stroke == true){
        ctx.strokeStyle = strokec;
        ctx.lineWidth = linew;
        ctx.stroke();
    }
}
cirle(540, 130, 30, colArray[2], colArray[4], 15, true, true);
