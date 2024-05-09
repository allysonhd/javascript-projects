let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); //breaks up by phrase
console.log(str.split('e')); //breaks up into elements on letter 'e'
console.log(str.split(' ')); //breaks up into elements on spaces
console.log(str.split('')); //breaks up into elements on each character (including spaces)

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join()); //lists elements
console.log(arr.join('a')); //adds 'a' between all elements (not at beginning or end)
console.log(arr.join(' ')); //adds spaces between elements
console.log(arr.join('')); //lists elements without commas (prints as one word)

//3) Do split or join change the original string/array? NO
console.log(str);
console.log(arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(",").sort().join(","));

console.log(cargoHold);
