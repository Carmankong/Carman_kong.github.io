console.log("main js is called");

//objectSet = [];
//var BBOne = new BouncingBall(300,200,190,270,colArray[0][4], 10, 2,-2);
//var BBTwo = new BouncingBall(300,200,190,270,colArray[0][6], 10, -3,1 );
//var BBThree = new BouncingBall(300,200,190 ,270,colArray[0][4], 10, 5,2);
//objectSet.push(BBOne, BBTwo, BBThree);
//BBOne.update();

/*
//var BBOne = new BouncingBall(100,200,190,270,colArray[0][8], 10, 2,1);
//var BBTwo = new BouncingBall(300,200,190,270,colArray[0][6], 10, -3,1);
//var BBThree = new BouncingBall(500,200,190 ,270,colArray[0][4], 10, 5,1);
objectSet.push(BBOne, BBTwo, BBThree);
*/

var TOne = new TestObject(canvas);


function animate(){
    ctx.clearRect(0,0,width,height);
    

    window.requestAnimationFrame(animate);
}
animate();

/*
for(var i=0; i<objectSet.length; i++){
    objectSet[i].update();
    }
*/