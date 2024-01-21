//using recursion
function myFlat() {
  const output = [];
  function getFlattenData(arr) {
    for (let i = 0; i < arr.length; i++) {
      const currElem = arr[i];
      Array.isArray(currElem)
        ? getFlattenData(currElem)
        : output.push(currElem);
    }
  }
  getFlattenData(this);
  return output;
}
function SimplestFlat() {
  let output;
  output = this.toString();
  // console.log([output]);
  return output.split(",").map((item) => Number(item));
}
Array.prototype.flat = SimplestFlat;
const input = [1, 2, 3, [1, 5, 6], [1, 2, 3]];
console.log(input.flat());
// c
