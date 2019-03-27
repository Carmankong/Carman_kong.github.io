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

/*function drawRectangle(x,y,w,h,fcol,scol,lw){
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
*/
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

function drawRect(x,y,w,h, fcol, scol, lw, fill, stroke ){
    ctx.fillStyle = fcol;
    ctx.strokeStyle = scol;
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if(fill == true){
        ctx.fillStyle = fill;
        ctx.fill();

    }
    if(stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }

}

ctx.save();
ctx.translate(200,200);
ctx.rotate(30*Math.PI/100);
cirle(0, 0, 20, colArray[2], colArray [6], 2, false, true);
drawRect(0, 0, 100, 200, colArray[4], colArray[6], 5, true, true);
ctx.restore();

ctx.save();
ctx.translate(500, 300);
for(var i=0; i<360; i+= 20){
    ctx.rotate(20*Math.PI/ 180);
    drawRect(0, 0, 100, 200, colArray[4], colArray[7], 5, true, true);
}
ctx.restore();

