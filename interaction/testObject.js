console.log("test object js is called");

class TestObject{
    constructor(canvas){

        console.log("test object constructor");
        this.xMouse = 0;
        this.yMouse = 0;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
        }

        mDown(e){
            console.log("mouse down event");
            console.log("xMouse is :" + this.xMouse);
            console.log("yMouse is :" + this.yMouse);
        }

        mMove(e){
            this.xMouse = e.offSetX;
            this.yMouse = e.offSetY;
            console.log("mouse move event") 
        }


        mUp(e){
            console.log("mouse up event")

        }

}