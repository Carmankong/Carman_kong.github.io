console.log("point1 js called");

class Point{
    //the ball should have x, y, r, stroke, fill, over, canvas
    constructor(x, y, r, stroke, fill, over, canvas){
        this.x = x;
        this.y = y;
        this.r = r;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over;
        
        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        this.drag = false;
        this.circularBound = false;
    }
        mDown(e){
            console.log("mouse down");
            if(this.circularBound){
                this.drag = true;
            }
        }

        mMove(e){
            this.xMouse = e.offsetX;
            this.yMouse = e.offsetY;
            console.log("mouse move"); 
            this.circularBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.r);
        }
        
        mUp(e){
            console.log("mouse up");
            this.drag = false;
        }

        update(){
            if (this.drag){
                this.x = this.xMouse;
                this.y = this.yMouse;
            }
            this.draw();
        }

        draw(){
            if(this.circularBound){
                ctx.fillStyle = this.over;
            }
            else{
                ctx.fillStyle = this.fill;
            }
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
        }

        boundsCheck(x_1, y_1, x_2, y_2, r){
            var d = Math.sqrt( Math.pow(x_2 - x_1, 2) + Math.pow(y_2 - y_1, 2) );
            if(d<r){
                return true;
            }
            else{
                return false;
            }
    
        }
 
    
        }
     
