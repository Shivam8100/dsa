// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums,target){
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            return [i,j]
        }
    }
}
}
const nums=[2,7,11,15]
target=26
console.time("TwoSum");
console.log(twoSum(nums,target))//7.66ms
console.timeEnd("TwoSum");

function optTwoSum(nums, target) {
    const map={};
  for (let i=0;i<nums.length;i++){
    const currData=nums[i]  //2 //5//11//15
    if(map[target-currData]>=0){ //24//21//15//.  if current position exist hence check this 
      return [i,map[target-currData]]
    }
    else{
      
    map[currData]= i //{"2":0,"5":1,"11":2}
    }
  
}
};

console.time("TwoOptSum");
console.log(twoSum(nums,target))//0.035ms
console.timeEnd("TwoOptSum");

