// basic code for animate loop
console.log("main2 js called");

var myT = new control_draw(canvas);

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();
    

    window.requestAnimationFrame(animate);
}
animate();
