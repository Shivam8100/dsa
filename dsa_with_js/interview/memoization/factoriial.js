function factorialUsingRecursion(n) {
  // 5*4*3*2*1
  if (n === 0) {
    return 1;
  }
  return n * factorialUsingRecursion(n - 1);
}
console.time("without Memo");
console.log(factorialUsingRecursion(8));
console.timeEnd("without Memo");
function factorialWithMemo(n, memo = {}) {
  if (n === 0) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = n * factorialWithMemo(n - 1, memo);
  return memo[n];
}
console.time("with Memo");
console.log(factorialWithMemo(8));
console.timeEnd("with Memo");
