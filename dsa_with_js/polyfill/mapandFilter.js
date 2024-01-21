// Array.prototype.myFunction=function(){
//   console.log(this)
// }
// let arr=[1,2,3,5,4];
// arr.myFunction()

//map polifill
Array.prototype.myMap = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]));
  }
  return newArray;
};
let arr = [1, 2, 4, 5, 6, 7];
const res = arr.myMap((x) => x * 2);
// console.log(res)

//filter polifill
Array.prototype.myFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
function isEven(x) {
  return x % 2 === 0;
}
//reduce

Array.prototype.myReduce = function (cb, s) {
  for (let i = 0; i < this.length; i++) {
    s = cb(s, this[i]);
  }
  return s;
};
function sum(x, y) {
  return x + y;
}
let arr1 = [2, 4, 6, 7, 8, 9, 45, 46];
// const result = arr1.myFilter((x) => x % 2 === 0);
const result = arr1.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(result);
