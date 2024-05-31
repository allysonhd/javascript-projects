function makeLine(size) {
    let line = "";
    for (let index = 0; index < size; index++) {
        line += "#" //I'm not fully understanding what += means.  How would this be written long-form? line = line + "#"
    }
    return line;
}
// console.log(makeLine(5));

//Square
function makeSquare(size) {
    let square = "";
    for(let index = 0; index < size; index++) {
       square += (makeLine(size) + "\n"); //what is makeLine alone vs makeLine(size)?  makeLine without parameters prints the function "size" times
    }
    return square
}
//console.log(makeSquare(5));

//Re-write makeSquare to use makeRectangle

function makeSquare(size) {
    let square = makeRectangle(size, size);
    return square
}
console.log(makeSquare(5));

//Rectangle

function makeRectangle(width, height) {
    let rectangle = "";
    for (let index = 0; index < height; index++) {
        rectangle += (makeLine(width) + "\n")
    }
        return rectangle; //Why does this return an empty line under the rectangle?
}
//console.log(makeRectangle(5,3));

//Downward Stairs
function makeDownwardStairs(height) {
    let downwardStairs = "";
    for (let index = 0; index < height; index++) {
    downwardStairs += (makeLine(index + 1) + "\n"); 
}
return downwardStairs.slice(0, -1);
}
//console.log(makeDownwardStairs(5));

//Make spaces and lines
function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = ""
    for (let index = 0; index < numSpaces; index++) {
        spaceLine += " ";
    }
        for (let index = 0; index < numChars; index++) {
        spaceLine += "#";
    }
        for (let index = 0; index < numSpaces; index++) {
            spaceLine += " ";
    }
    return spaceLine;
}
//console.log(makeSpaceLine(3, 5));

//^^THIS NEEDS WORK.  I copied this solution from another student to study bc my code seemed too complicated and not returning the "3". 
// I need to understand this better and try to write it.

//TRIANGLE
// 4 - 1
// 3 - 3
// 2 - 5
// 1 - 7
// 0 - 9 (10-1?)

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = "";
    for (index = 1; index <= height; index++) {
        isoscelesTriangle += ("\n" + makeSpaceLine(height - index, index * 2 - 1));
    }
    return isoscelesTriangle;
}
console.log(makeIsoscelesTriangle(5));

// Diamond
// 4 - 1 - 4
// 3 - 3 - 3
// 2 - 5 - 2
// 1 - 7 - 1
// 0 - 9 - 0 (10-1?)
// reversed

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height);
    diamond += "\n" + makeIsoscelesTriangle(height).split("\n").reverse().join("\n");
    return diamond;
}  
console.log(makeDiamond(5));