const str = "this is javascript code and you have to find max char";
let newStr = str.split(" ").join("");
console.log(newStr);
let obj = {};
let res = "",
  maxVal = -Infinity;
for (let i of newStr) {
  if (obj[i]) {
    obj[i] = obj[i] + 1;
  } else {
    obj[i] = 1;
  }
}
console.log(obj, "freq");
for (let [key, value] of Object.entries(obj)) {
  if (value > maxVal) {
    maxVal = value;
    res = key;
  }
}
console.log(res, maxVal);
