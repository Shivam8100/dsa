//sorted union
function uniteUnique(...arr) {
  const arg = [...arguments];
  const flatArr = arg.reduce((acc, cur) => [...acc, ...cur]);
  const uniqArr = [];
  const obj = {};
  for (let i of flatArr) {
    if (!obj[i]) {
      uniqArr.push(i);
      obj[i] = true;
    }
  }
  console.log(obj, "onj=====");
  console.log(uniqArr);

  return uniqArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
