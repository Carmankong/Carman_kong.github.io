console.log("main js called");

var objectSet = [];


// class Point (contructor) x,y,r, stroke, fill, over, canvas
var PointOne = new Point(200, 120, 10, colArray[1][3], colArray[2][3], colArray[0][5], canvas);
var PointTwo = new Point(200, 120, 40, colArray[2][2], colArray[2][3], colArray[0][5], canvas);
objectSet.push(PointOne, PointTwo); 

function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();

    }
    

    window.requestAnimationFrame(animate);
}
animate();
