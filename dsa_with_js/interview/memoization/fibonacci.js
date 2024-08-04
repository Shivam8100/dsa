const fib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
console.time("time");
console.log(fib(40), "without memoizing");
console.timeEnd("time");

const fibwithMemo = (n, memo = {}) => {
  if (n < 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibwithMemo(n - 1, memo) + fibwithMemo(n - 2, memo);
  console.log(memo, "this is memo obj ");
  return memo[n];
};
console.time("time");
console.log(fibwithMemo(40), "with memoizing");
console.timeEnd("time");
