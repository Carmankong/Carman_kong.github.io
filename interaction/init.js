console.log("init js file is called");

var myScale = 0;

function setupCanvas(canvas){
    var dpr = window.devicePixelRatio || 1;
    myScale = dpr;

    var rect = canvas.getBoundingClientRect();
    console.log(rect.width);
    console.log(rect.height);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr,dpr);
    return ctx;
    }

    var ctx = setupCanvas(document.querySelector('#myCanvas'));
    canvas = document.querySelector('#myCanvas');
    const width = canvas.width/myScale;
    const height = canvas.height/myScale;
    console.log(width);
    console.log(height);

var colArray=[
    [ "rgba(255,255,255,1,1)", "rgba(153,153,153,1)", "rgba(0,0,0,1)", 
      "rgba(204,0,0,1)","rgba(255,204,51,1)","rgba(51,51,255,1)",
      "rgba(255,102,102,1)","rgba(255,255,153,1)", "rgba(0,153,204,1)"
    ],
    [ "rgba(255,255,255,0.67)", "rgba(153,153,153,0.67)", "rgba(0,0,0,0.67)", 
       "rgba(204,0,0,0.67)","rgba(255,204,51,0.67)","rgba(51,51,255,0.67)",
       "rgba(255,102,102,0.67)","rgba(255,255,153,0.67)", "rgba(0,153,204,0.67)"
     ],
     [ "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)", "rgba(0,0,0,0.33)", 
       "rgba(204,0,0,0.33)","rgba(255,204,51,0.33)","rgba(51,51,255,0.33)",
       "rgba(255,102,102,0.33)","rgba(255,255,153,0.33)", "rgba(0,153,204,0.33)"
      ]
        ]