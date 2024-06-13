let arrayOne = ["hornbill", "parakeet", "cockatiel"]

function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.

  for (index = 0; index < arr.length; index++) {
  let selectedElement = Math.floor(Math.random()*arr.length);
  return arr[selectedElement];
  }
}
console.log(randomFromArray(arrayOne));
//TODO: Export the randomFromArray function.
module.exports = randomFromArray;