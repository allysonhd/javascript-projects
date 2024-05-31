//Sample arrays for testing:

let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sor each array in descending order.

function sortDecr(arr){
    return arr.slice().sort((a,b) => b-a);
}
console.log("Descending order:");
console.log(sortDecr(nums1));

// //Sort each array in ascending order.

function sortArr(arr){
    return arr.slice().sort((a,b) => a-b);
}
console.log("Ascending order:");
console.log(sortArr(nums1));