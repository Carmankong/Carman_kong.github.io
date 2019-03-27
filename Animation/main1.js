console.log("main 1 js is called");

objectSet = [];

var BBOne = new BouncingBall(300, 200, 400, 270, colArray[0][8], 10, 3, 1);
var BBTwo = new BouncingBall(400, 200, 200, 270, colArray[0][2], 10, 5, 1);
var BBThree = new BouncingBall(300, 200, 400, 270, colArray[0][3], 10, 7, 1);
objectSet.push(BBOne, BBTwo, BBThree); 


function animate(){
    ctx.clearRect(0, 0, width, height);
    
    for (var i = 0; i < objectSet.length; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);

}

animate();