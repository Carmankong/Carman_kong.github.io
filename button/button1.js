console.log("button1 js called");

class Button{
    constructor(text, x, y, w, h, stroke, fill, textC, over, canvas, target, tC){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.textC = textC;
        this.text = text;
        this.over = over;
        this.target = target;
        this.tC = tC;



        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.rectBound = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('click', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));

    }

    mClick(e){
        if(this.rectBound == true){
            
            Button.selected = this;
            this.target.setColour(this.tC);
            //this.makeRandomColor()
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("mouse move"); 
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        this.writeText();
        }

    draw(){
        if(Button.selected == this  ){
            ctx.fillStyle = "rgb(255,255,255)"
           
        }
        else if( this.rectBound ){
            ctx.fillStyle = this.over;
           
        }else{
            ctx.fillStyle = this.fill
        }
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        // ctx.fillText(this.text, this.w/2,this.h/2 );
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.stroke();

    }

    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "25px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }

    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }else{
        return false;
    }
    }

    
/*
    makeRandomColor(){
        var R = Math.round(255*Math.random());
        var G = Math.round(255*Math.random());
        var B = Math.round(255*Math.random());
        var new_colour = "rgb("+R+","+G+","+B+")";
        console.log(new_colour);
        return new_colour;
    }
*/


}
Button.selected = "";