console.log("loops js called");

var i=0;
cirle(100 +70*i, 230, 30, colArray[2], colArray[4], 15, true, true);
i=1;
cirle(100 +70*i, 230, 30, colArray[2], colArray[4], 15, true, true);
i=2;
cirle(100 +70*i, 230, 30, colArray[2], colArray[4], 15, true, true);
i=3;
cirle(100 +70*i, 230, 30, colArray[2], colArray[4], 15, true, true);

for(var i=0; i<4; i++){
    console.log(i)
    cirle(100 +100*i, 100, 30, colArray[2], colArray[4], 15, true, true);

}
 
for(var k=0; k<8; k++){
    drawLine(10, 200+30*k, 300, 200+30*k, colArray[2], 0.5);
}

curve(colArray[2], 10, 500, 700, 800, 450, 500, 400);
