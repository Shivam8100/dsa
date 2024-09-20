//---------------------------------------problem statement---------------------------
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

//--------------------------------------------Test cases--------------------------------
// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

var map = function (arr, fn) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr[i] = fn(arr[i], i);
  }
  return finalArr;
};
var mapSpaceEfficient = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};
var mapInnbuild = function (arr, fn) {
  let tempArr = [];
  arr.forEach((v, i) => tempArr.push(fn(v, i)));
  return tempArr;
};

let input1 = [1, 2, 3];
fn = function plusI(n, i) {
  return n + i;
};
console.time("time");
console.log(map(input1, fn), "without inbuild method");
console.timeEnd("time");

console.time("time");
console.log(mapInnbuild(input1, fn), "with inbuild method");
console.timeEnd("time");
console.time("time");
console.log(
  mapSpaceEfficient(input1, fn),
  "without inbuild method and space efficient"
);
console.timeEnd("time");
