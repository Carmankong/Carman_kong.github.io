console.log("main js is called");

var BB = new Ball(300, 300, 20, colArray[2][5]);
console.log(colArray[2][7]);


var count = 0;
function animate(){
    ctx.clearRect(0, 0, width, height);
    count += 1;
    console.log(count);
    count = count%100;
    BB.update();



 window.requestAnimationFrame(animate);
}
animate();