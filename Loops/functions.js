console.log(" function is called!")
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

function drawLine(x1, y1, x2, y2, scol, lw, strokec){
    ctx.strokeStyle = scol;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function curve(scol, lw, x1, y1, x2, y2, x3, y3){
    ctx.strokeStyle = scol;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineWidth = lw;
    ctx.quadraticCurveTo(x2, y2, x3, y3);
    ctx.stroke();
}    

var m_gradient = ctx.createLinearGradient(10,350,10,550);
m_gradient.addColorStop(0,"rgb(255,102,102)");
m_gradient.addColorStop(0.5,"rgb(255,255,153)");
m_gradient.addColorStop(1,"rgb(0,153,204)");
ctx.fillStyle = m_gradient;
ctx.beginPath()
ctx.rect(10,350, 200,200);
ctx.fill();
ctx.stroke();
