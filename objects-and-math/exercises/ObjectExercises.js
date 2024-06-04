let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,
   animalMove: function() {return Math.ceil(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   animalMove: function() {return Math.ceil(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 5,
   animalMove: function() {return Math.ceil(Math.random()*10)}
};

let hound = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 8,
   animalMove: function() {return Math.ceil(Math.random()*10)}
};

let mossPiglet = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 10,
   animalMove: function() {return Math.ceil(Math.random()*10)}
};
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object
// function() {
//    return Math.ceil(Math.random()*10);
// }
// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, hound, mossPiglet];
// Print out the relevant information about each animal.
//console.log(crew);
function crewReports(animalStats) {
   animalStats = (`${animalStats.name} is a ${animalStats.species}. They are ${animalStats.age} years old and ${animalStats.mass} kilograms. Their ID is ${animalStats.astronautID}.`);
   return animalStats;
}; 
console.log(crewReports(hound));

// // Start an animal race!;
function fitnessTest(animalnauts) {
   let results = [], numberOfSteps, turns;
   for (index = 0; index < animalnauts.length; index++) {
      let turns = 0;
      let numberOfSteps = 0;
         while (numberOfSteps < 20) {
            numberOfSteps += animalnauts[index].animalMove();
            turns += 1; 
         };
         results.push(`${animalnauts[index].name} took ${turns} turns to take 20 steps.`);
         };
   return results;
}; 
console.log(fitnessTest(crew));
   
//log the number of times the function runs
//How would you log the first animal who's moves === 20?