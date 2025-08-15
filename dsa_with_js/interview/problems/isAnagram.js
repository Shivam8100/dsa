//Statement: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Write a function to determine if two strings are anagrams of each other.
function isAnagram(s, t) {
if(s.length !== t.length) return false;
  const charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;

}

// var isAnagram = function(s, t) {
//     if(s.length!==t.length){
//         return false
//     }
//     const obj1={}
//     const obj2={}
//     for (i of s){
//         obj1[i]=(obj1[i]||0)+1
//     }
//       for (i of t){
//         obj2[i]=(obj2[i]||0)+1
//     }
    
//     for(key in obj1){
//         if(obj1[key]!==obj2[key]){
//             return false
//         }
//     }
//     return true
    
// };

console.time("isAnagram");
console.log(isAnagram("listennn", "silnnent")); // true
console.timeEnd("isAnagram");

function isAnagram2(s, t) {
  if (s.length !== t.length) return false;

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
}

console.time("isAnagram2");
console.log(isAnagram2("listnnen", "nnsilent")); // true
console.timeEnd("isAnagram2"); 


 function optIsAnagram(s, t) {
    if(s.length!==t.length){
        return false
    }
    const obj1={}
    const obj2={}
    for (let i=0;i<s.length;i++){
        obj1[s[i]]=(obj1[s[i]]||0)+1
        obj2[t[i]]=(obj2[t[i]]||0)+1

    }
    for(key in obj1){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }
    return true
    
};


console.time("isAnagram3");
console.log(optIsAnagram("nnlisten", "sinnlent")); 
console.timeEnd("isAnagram3"); 