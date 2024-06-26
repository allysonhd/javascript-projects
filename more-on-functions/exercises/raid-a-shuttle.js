function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

let stackChairs = function(numChairs) {
  if (checkFuel(numChairs) === "green") {
    return numChairs - 100001;
  } else if (checkFuel(numChairs) === "yellow") {
    return numChairs - 50001;
  } else {
    return numChairs;
  }
};
console.log(stackChairs(fuelLevel));

let pickUpCats = function (n) {
   n = cargoHold.slice(0,2);
   return n;
}
let numCats = cargoHold.map(pickUpCats);

console.log(numCats);
