function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//optimized code 
// if composite number then sqrt(number)>= a*b always
function isPrimeOpt(n){
    if (n < 2) {
        return false;
    }
    for (let i=2;i<=Math.sqrt(n);i++){
        if(n %i ===0){
            return false;
        }

    }
    return true;

}
console.log(isPrime(7)) //O(n)
console.log(isPrime(31))
console.log(isPrime(35))
console.log("optimize code result of O(sqrt(n))")
console.log(isPrimeOpt(7))
console.log(isPrimeOpt(31))
console.log(isPrimeOpt(35))


