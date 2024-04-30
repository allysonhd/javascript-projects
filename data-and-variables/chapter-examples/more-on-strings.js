console.log(typeof "17");
console.log(typeof "3.2");

console.log(typeof 'This is a string');
console.log(typeof "And so is this");

console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));
console.log(Boolean("true, test"));

console.log(Boolean(4=="4"));

let num = 5;

if (num % 2 === 0) {
    console.log("zero");
} else if (num % 2 === 1) {
    console.log("odd");
}