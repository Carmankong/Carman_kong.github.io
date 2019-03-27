console.log("main js called");

var objectSet = [] //empty array (python list)

/*var myRectangle = new Rectangle(100,200,50,300,colArray[8]);
    myRectangle.update();


var myRectangleOne = new Rectangle(200,200,50,300,colArray[7]);
    myRectangleOne.update();

var myRectangleTwo = new Rectangle(300,200,50,300,colArray[8]);
    myRectangleTwo.update();

var myRectangleThree = new Rectangle(400,200,50,300,colArray[7]);
    myRectangleThree.update();

var myRectangleFour = new Rectangle(500,200,50,300,colArray[8]);
    myRectangleFour.update();

    */
/*
var FDOne = new FiveDot(400,100,60,colArray[1], colArray[7], colArray[0]);
    FDOne.update();

var FDTwo = new FiveDot(200,300,100,colArray[3], colArray[4], colArray[1]);
    FDTwo.update();

var FDThree = new FiveDot(600,300,120,colArray[2], colArray[5], colArray[6]);
    FDThree.update();

var FDFour = new FiveDot(400,400,80,colArray[1], colArray[4], colArray[9]);
    FDFour.update();
*/

var FDOne = new FiveDot(400,100,60,colArray[1], colArray[7], colArray[0]);
var FDTwo = new FiveDot(200,300,100,colArray[3], colArray[4], colArray[1]);
var FDThree = new FiveDot(600,300,120,colArray[2], colArray[5], colArray[6]);
var FDFour = new FiveDot(400,400,200,colArray[1], colArray[4], colArray[9]); 
objectSet.push(FDOne, FDTwo, FDThree, FDFour);
objectSet.push(new FiveDotRotate(900,400,200,colArray[3], colArray[4], colArray[5],60));
console.log(objectSet);
for(var i=0; i<objectSet.length; i++){
    objectSet[i].update();


}

/*var fireDotOne = new FiveDot();
    fireDotOne.update();

    var fireDotTwo = new FiveDot();
    fireDotTwo.update();

var fireDotThree = new FiveDot();
    fireDotThree.update();

var fireDotFour = new FiveDot();
    fireDotFour.update();
    */