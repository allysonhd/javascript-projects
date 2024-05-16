//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel = 0
let astronautsAboard = 0
let shuttleAltitude = 0

//I'm a little confused as to when to use "0" and when to use an empty string/array.

const { allowedNodeEnvironmentFlags } = require('process');
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');

startingFuelLevel = input.question('Enter the fuel level: ');
startingFuelLevel = Number(startingFuelLevel);

while (startingFuelLevel <= 5000 || startingFuelLevel > 30000) {
 startingFuelLevel = input.question("Invalid fuel level.  Please enter a number between 5001 and 30000: ");
 startingFuelLevel = Number(startingFuelLevel);
}
console.log(startingFuelLevel);
//I checked my answer and saw that I needed to add the NaN option.  I tested adding a word and saw why that was necessary.

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

  astronautsAboard = input.question('Enter number of astronauts aboard: ');
  astronautsAboard = Number(astronautsAboard);

  while (astronautsAboard > 7 || astronautsAboard < 1 || isNaN(astronautsAboard)) {

    astronautsAboard = input.question("Invalid entry.  Please enter a number between 1 and 7: ");
    astronautsAboard = Number(astronautsAboard);
  }
  console.log(astronautsAboard);

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel - (astronautsAboard * 100) > 0) {
startingFuelLevel = startingFuelLevel - (astronautsAboard * 100);
shuttleAltitude = shuttleAltitude + 50;
}  
console.log(startingFuelLevel);
console.log(shuttleAltitude);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = ""

output = (`The shuttle gained an altitude of ${shuttleAltitude} km.`)
console.log(output);

if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved.");
} else
console.log("Failed to reach orbit.");
