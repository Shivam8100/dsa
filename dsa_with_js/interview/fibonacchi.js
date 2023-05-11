function fibonacci(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib[n-1];
}


console.log("iterative")
console.log(fibonacci(3))//[ 0, 1, 1 ]
console.log(fibonacci(6))//[ 0, 1, 1, 2, 3, 5 ]
// console.log(fibonacci(9))

// resursive approach 
function fibonacciWithRecursion (n){
    if(n<0){
    console.log("provide positive number")
    }
   if(n<=1){
    return n
   }
   else {
    return fibonacciWithRecursion(n-1)+fibonacciWithRecursion(n-2)
   }



}
console.log(fibonacciWithRecursion(4),"resursive")




function fibonacciWithSwap(n){
let a = 0
let b = 1
let sum = 0
let arr = [a,b]
for(let i = 3 ; i <= n ; i++){
    sum = a + b
    arr.push(sum);
    a = b
    b = sum
}
return arr;

}
// console.log("with new approach")
// console.log(fibonacciWithSwap(10));


















