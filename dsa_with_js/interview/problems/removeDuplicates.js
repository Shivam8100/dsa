//Given an integer array nums sorted in non-decreasing order,
//  remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//  Then return the number of unique elements in nums.
// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


function removeDuplicates1(nums){
    if (nums.length === 0) return 0; // If the array is empty, return 0
    for (let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            nums.splice(i,1);
            i--; // Decrement i to check the new element at the current index
        }
    }
    return nums.length; // The length of the array with unique elements
}
console.log(removeDuplicates1([0,0,1,1,1,2,2,3,3,4])); // Output: 5, nums = [0,1,2,3,4,_]


//Note: In space complexity O(1) we can't use any extra space  for array or object
function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0

    let uniqueIndex = 1; // Start from the second position

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // Check if the current element is different from the previous one
            nums[uniqueIndex] = nums[i]; // Place it at the uniqueIndex position
            uniqueIndex++; // Move to the next position for unique elements
        }
    }
    console.log(nums); // The modified array with unique elements at the front

    return uniqueIndex; // The length of the array with unique elements

}
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5, nums = [0,1,2,3,4,_]


