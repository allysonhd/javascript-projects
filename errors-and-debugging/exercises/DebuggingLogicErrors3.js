// Let’s break the code down into smaller chunks.
// Now consider the second if/else block. 
// Add another console.log(launchReady) after this block and run the program.

// Given the values for crewStatus and computerStatus, should launchReady be true or false after the check? 
// Is the program behaving as expected? 

// Why can you just change launchReady to "true" when it's assigned "false"?
// Why does crewStatus && computerStatus NOT evaluate to "true" AND "green"?
// Could you also code launchReady = true as launchReady = !false?

let launchReady = false;
// let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
} console.log(launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
// IN LINE 33 - HOW DOES IT KNOW TO LOOK FOR 'launchReady' = true WHEN WE'VE ASSIGNED "launchReady" false?¢