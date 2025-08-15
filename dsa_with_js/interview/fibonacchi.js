function fibonacci(n){
    const fib=[0,1];
    for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib[n];
}


console.time("fibonacci");
console.log(fibonacci(5))//[ 0, 1, 1 ]
console.timeEnd("fibonacci");



// resursive approach 
function fibonacciWithRecursion (n){
   if(n<=1){
    return n
   }
   else {
    return fibonacciWithRecursion(n-1)+fibonacciWithRecursion(n-2)
   }



}
console.time("Fibonacci with Recursion");
console.log(fibonacciWithRecursion(5))// 2
console.timeEnd("Fibonacci with Recursion");




function fibonacciWithSwap(n){
let a = 0
let b = 1
let sum = 0
let arr = [a,b]
for(let i = 2 ; i <= n ; i++){
    sum = a + b
    arr.push(sum);
    a = b
    b = sum
}
return arr[n];

}
// console.log("with new approach")
console.time("Fibonacci with Swap");
console.log(fibonacciWithSwap(5)); // [0, 1, 1, 2, 3]
console.timeEnd("Fibonacci with Swap");


//fib optimized
var fibOpt = function(n) {
    if (n < 2) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};
console.time("Optimized Fibonacci");
console.log(fibOpt(5)); // 55
console.timeEnd("Optimized Fibonacci");


//results:
// 5
// fibonacci: 3.864ms
// 5
// Fibonacci with Recursion: 0.029ms
// 5
// Fibonacci with Swap: 0.028ms
// 5
// Optimized Fibonacci: 0.03ms



















