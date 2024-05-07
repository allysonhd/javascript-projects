//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.substring(0,1)+ language.substring(4,5));
//How can I do this with method chaining???
language = language.substring(0,1).charAt(4);
console.log(language);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is 'JS'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
language = language.replace("v","m").toUpperCase().slice(4,10);
console.log(language);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.replace("t","T").replace("c","C"));
