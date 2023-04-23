function factorial(n){
    let result=1;
    for(let i=n;i>0;i--){
        result*=i
    }
    return result;
}
//recursive approach O(n)
function factorialUsingRecursion(n){// 5*4*3*2*1 
    if(n===0){
        return 1
    }
    return n*factorialUsingRecursion(n-1)
}



console.log(factorial(3));
console.log(factorial(5))
console.log(factorial(7))
console.log("now the result of recursion")
console.log(factorialUsingRecursion(3))
console.log(factorialUsingRecursion(5))
console.log(factorialUsingRecursion(7))
