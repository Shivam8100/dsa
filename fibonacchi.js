function fibonacci(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib;
}
// resursive approach 
function fibonacci (n){
    if (n < 2) {
        return [0];   
    }
    if (n < 3) {
        return [0, 1];
    }

    var a = fibonacci(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;



}


console.log(fibonacci(3))//[ 0, 1, 1 ]
console.log(fibonacci(6))//[ 0, 1, 1, 2, 3, 5 ]
console.log(fibonacci(9))
// [
//     0, 1,  1,  2, 3,
//     5, 8, 13, 21
//   ]

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
console.log("with new approach")
console.log(fibonacciWithSwap(10));


















