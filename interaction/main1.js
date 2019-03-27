console.log("main1 js called");

var myT = new controlObject(canvas);


function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();
    

    window.requestAnimationFrame(animate);
}
animate();