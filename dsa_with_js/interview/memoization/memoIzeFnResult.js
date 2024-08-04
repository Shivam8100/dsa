const add = (a, b) => a + b;
const memoizedAdd = memoizedOne(add);
console.log(memoizedAdd(1, 2)); //3 add function called so get new value
console.log(memoizedAdd(1, 2)); //3 add function is not executed, previous result returned
console.log(memoizedAdd(2, 3)); //5 add function is called to get new value
console.log(memoizedAdd(2, 3)); //5 add function not executed
console.log(memoizedAdd(1, 2)); //3 add function is not executed, previous result returned

// function memoizedOne(fun) {
//   const memo = new Map();
//   function temp(...args) {
//     console.log(args);
//     const key = args.join("_");
//     if (memo.has(key)) {
//       return memo.get(key);
//     }
//     const result = fun(...args);
//     memo.set(key, result);
//     console.log(memo, "here is memo");
//     return result;
//   }
//   return temp;
// }
function memoizedOne(fun) {
  const memo = {};
  function temp(...args) {
    const key = args.join("_");
    if (memo[key]) {
      console.log(" getting result from cache");
      return memo[key];
    }
    const result = fun(...args);
    memo[key] = result;
    // console.log(memo, "here is memo");
    return result;
  }
  return temp;
}
