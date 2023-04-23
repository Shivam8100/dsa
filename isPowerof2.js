function isPowerofTwo(n){ //0(logn)
    if (n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}
function isPowerOfTwoBitwise(n){  //0(1)
     // 8->1000 & 0111 =0000==> true 
     //10->1010 & 1001==>1000==>false as all are not zero 

    if(n<1){
        return false
    }
    return (n & (n-1)) ===0;
}
console.log(isPowerofTwo(3));
console.log(isPowerofTwo(8));
console.log(isPowerofTwo(100));
console.log("here is the result of bitwise method");
console.log(isPowerOfTwoBitwise(3));
console.log(isPowerOfTwoBitwise(8));
console.log(isPowerOfTwoBitwise(256));

