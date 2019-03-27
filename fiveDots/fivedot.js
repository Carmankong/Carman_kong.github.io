console.log("fivedot is called");

class FiveDot{
    constructor (xc,yc,s,c1,c2,c3){
    this.xc=xc;    
    this.yc=yc;    
    this.s=s;
    this.r=s/8;    
    this.c1=c1;    
    this.c2=c2;    
    this.c3=c3; 
    }
update(){
this.draw();
    }

draw(){
    console.log("draw is called");
    ctx.beginPath();
    ctx.rect(this.xc-this.s/2,this.yc-this.s/2,this.s,this.s);
    ctx.fillStyle = this.c1;
    ctx.fill();
    //top left
    this.drawCircle(this.xc-this.s/2,this.yc-this.s/2,this.r,this.c2)
    //top right
    this.drawCircle(this.xc+this.s/2,this.yc-this.s/2,this.r,this.c2)
    //bottom left
    this.drawCircle(this.xc-this.s/2,this.yc+this.s/2,this.r,this.c2)
    //bottom right
    this.drawCircle(this.xc+this.s/2,this.yc+this.s/2,this.r,this.c2)
    //middle
    this.drawCircle(this.xc,this.yc,this.r,this.c3)
    }


drawCircle(x,y,r,fill){
    ctx.beginPath();
    ctx.arc(x,y,r,0 ,2*Math.PI);
    ctx.fillStyle = fill;
    ctx.fill();
    }

}

/*
this.drawCircle(this.xc-this.s/2,this.yc-this.s/2,this.r,this.c2)
this.drawCircle(this.xc-this.s/2,this.yc-this.s/2,this.r,this.c2)
this.drawCircle(this.xc-this.s/2,this.yc-this.s/2,this.r,this.c2)
this.drawCircle(this.xc-this.s/2,this.yc-this.s/2,this.r,this.c2)
this.drawCircle(this.xc,this.yc,this.r,this.c3)
*/