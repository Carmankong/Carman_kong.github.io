console.log("test object js is called");

class controlObject {
    constructor(canvas){
        console.log("test object constructor");
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.w = 0;
        this.h = 0;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
        }

        mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        }

        mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log("mouse move event") 
        }


        mUp(e){
        this.mouseDown = false;
        //console.log("mouse up event")
        }

        update(){
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
            if(this.mouseDown == true){
                console.log("mouse is down");
                this.draw();
                }
        }

        draw(){
            this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
        }

        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colArray[2][3];
            ctx.stroke();
        }
        
}