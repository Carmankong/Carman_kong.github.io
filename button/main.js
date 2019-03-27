console.log("main js called");

var objectSet = [];

// class Button (contructor) text, x,y, w, h, stroke, fill, textC, over, canvas
var butOne = new Button("touch me", 200, 120, 200, 100, colArray[1][3], colArray[2][3], colArray[1][5], colArray[2][0], canvas);
var butTwo = new Button("DONT touch me", 200, 240, 200, 100, colArray[0][3], colArray[1][3], colArray[0][6], colArray[2][0], canvas);
objectSet.push(butOne, butTwo);


function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();

    }
    

    window.requestAnimationFrame(animate);
}
animate();
