function makeLine(size) {
    let line = "";
    for (let index = 0; index < size; index++) {
      line += "#";
}
return line;
} 
console.log(makeLine(10));

//Square

function makeSquare(size) {
    let square = "";
    for (let index = 0; index < size; index++) {
    square += ("\n" + makeLine(size)); 
 }
     return square;
 } 
 console.log(makeSquare(5));


//Rectangle

function makeRectangle(width, height) {
    let rectangle = "";
    for (let index = 0; index < height; index++) {
    rectangle += ("\n" + makeLine(width)); 
}
return rectangle;
} 
console.log(makeRectangle(5, 3));

//Downward Stairs
function makeDownwardStairs(height) {
    let downwardStairs = ""
    for (let index = 0; index < height; index++) {
        downwardStairs += ("\n" + makeLine(index + 1));
    }
    return downwardStairs;
}
console.log(makeDownwardStairs(5));

//the "slice(0, -1)" listed in the "check your answer" sections is not returning the result that I am supposed to be trying to achieve.  
//It is removing a # from the bottom row.  I'm not sure why it's included in the solution.
//The above code is printing the correct solution.

function makeSpaceLine(numSpaces, numChars) {
 let spaceLine = ""
    for (let index = 0; index < (numSpaces); index++) {
    spaceLine += " ";
}
    for (let index = 0; index < (numChars); index++) {
    spaceLine += "#";
}
    for (let index = 0; index < (numSpaces); index++) {
    spaceLine += " ";
}
return spaceLine;
} 
console.log(makeSpaceLine(3, 5));

//^^THIS NEEDS WORK.  I copied this solution from another student to study bc my code seemed too complicated and not returning the "3". 
// I need to understand this better and try to write it.

//TRIANGLE
// 4 - 1 - 4
// 3 - 3 - 3
// 2 - 5 - 2
// 1 - 7 - 1
// 0 - 9 - 0 (10-1?)
// reversed


function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = ""
    for (index = 0; index < height; index++) {
        isoscelesTriangle += ("\n" + makeLine(index) + " ");
    }
    for (index = 0; index < height; index++) {
        isoscelesTriangle += ("\n" +makeLine(index) + "#");
    }
    return isoscelesTriangle;
}
console.log(makeIsoscelesTriangle(5));
