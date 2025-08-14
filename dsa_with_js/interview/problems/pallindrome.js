//statement: A number is a palindrome if it remains the same when its digits are reversed.
// Given a string, write a function to check if it is a palindrome.

function Pallindrome(num){
    if(num<0 || (num%10==0 && num!==0)){
      return false;
    }
    // Convert number to string, split into characters, reverse, and join back to string
   
    return  num === +num.toString().split("").reverse().join("")//execute time: 4.356 ms
    
  }
  
  const a=121;
  const result= Pallindrome(a);
  console.time("Pallindrome");
  console.log(result)
  console.timeEnd("Pallindrome");

  function OptimizedPallindrom(n){
    if(n<0 ||n%10===0 && n!==0){
      return false;
    }
    let reversed = 0;
    while(n > reversed){
      reversed = reversed * 10 + n % 10;
      n = Math.floor(n / 10);
    }   
    return n === reversed || n === Math.floor(reversed / 10);//execute time: 0.042 ms
  }
  console.time("OptimizedPallindrome");
  console.log(OptimizedPallindrom(a));
  console.timeEnd("OptimizedPallindrome");

