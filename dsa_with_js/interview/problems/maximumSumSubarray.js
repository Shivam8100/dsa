// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// input: nums = [-2,1,-3,4,-1,2,1,-5,4] ---> output: 6 [4,-1,2,1]
//input: nums = [5,4,-1,7,8]---> output: 23 [5,4,-1,7,8]


// method 1: unoptimized O(n^2)

function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let startIndex = 0;
    let endIndex = 0;
    for(let i=0;i<nums.length;i++){
        let currentSum = 0;
        for(let j=i;j<nums.length;j++){
            currentSum+=nums[j];
            if(currentSum>maxSoFar){
                maxSoFar=currentSum;
                startIndex=i;
                endIndex=j;
            }
            // maxSoFar = Math.max(maxSoFar,currentSum);
        }
    }
    return {
        maxSum: maxSoFar,
        subArray: nums.slice(startIndex,endIndex+1)
    }
  
}

//Kadan's Algorithm O(n)

function kadansMaxSubArray(nums) {
    let sum=0;
    let maxSum=nums[0]
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>maxSum){
            maxSum=sum; 

        }
        if(sum<0){
            sum=0;
        }

    }
    return maxSum

}

//if we want subArrat as well 

function kadansMaxSubArray1(nums) {
    let sum = 0;
    let maxSum = nums[0];

    let start = 0;      // temp start pointer
    let end = 0;        // final end index
    let s = 0;          // reset point for start index

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum > maxSum) {
            maxSum = sum;
            start = s;  // update start index
            end = i;    // update end index
        }

        if (sum < 0) {
            sum = 0;
            s = i + 1; // potential new start
        }
    }

    return {
        maxSum,
        subarray: nums.slice(start, end + 1)
    };
}

const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(kadansMaxSubArray(arr));


console.time("maxSubArray");
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6 
console.timeEnd("maxSubArray");

console.time("kadansMaxSubArray");
console.log(kadansMaxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.timeEnd("kadansMaxSubArray");

console.time("kadansMaxSubArray1");
console.log(kadansMaxSubArray1([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.timeEnd("kadansMaxSubArray1");