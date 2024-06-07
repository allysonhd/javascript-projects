// Code your selectRandomEntry function here:

let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(array){
  randomSelection =[];
  while (randomSelection.length < 3) {
    let randomNumber = Math.floor(Math.random() * array.length); 
    let chosenID = array[randomNumber];  
    if (!randomSelection.includes(chosenID)) {  
      randomSelection.push(chosenID)
  }   
}
return randomSelection;
}

console.log(selectRandomEntry(idNumbers));

// use Math.random to get a random number that matches the index of IdNumbers
// pull ID based on the random number
// if that number doesn't match a number that was already selected then push it
// keep going until there are three in the new array

// Code your buildCrewArray function here:
//use our selectRandomEntry function to select random id numbers
//we need the randomSelection output
//we need to associate the random selection output with the astronaut IDs
function buildCrewArray(arrRandomID, arrCandidate){
  let crew = [];
    for (let i = 0; i < arrRandomID.length; i++) {
      for ( let j = 0; j < arrCandidate.length; j++) {
        if ()

      }
    }


    
  return crew;
}

console.log(buildCrewArray(idNumbers, animals));

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
