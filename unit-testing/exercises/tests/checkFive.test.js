const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("should correctly state that the number is less than five", function() { //should add "when number is less than 5"
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

   test("should correctly state that the number is greater than five if number is > 5", function() { 
    let output = checkFive(6);
    expect(output).toBe("6 is greater than 5.");
 });

 test("should correctly state that the number is equal to five if number is === 5", function() { 
    let output = checkFive(5);
    expect(output).toBe("5 is equal to 5.");
 });

});