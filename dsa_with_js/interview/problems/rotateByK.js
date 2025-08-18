function rotateArray(nums,k){
    const n = nums.length;
    if(k>n){
        k = k % n; 
    }
  
    const rotated=nums.splice(n-k, k);
    nums.unshift(...rotated);
    return nums;
}

const nums = [1,2,3,4,5,6,7];
const k = 3;
console.time("RotateArray");
console.log(rotateArray(nums, k)); // [5, 6, 7, 1, 2, 3, 4]
console.timeEnd("RotateArray");

function optimizedRotateArray(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k is greater than n
    reverse(nums, 0, n - 1); // Reverse the entire array->  [7, 6, 5, 4, 3, 2, 1]
    reverse(nums, 0, k - 1); // Reverse the first k elements-> [5, 6, 7, 4, 3, 2, 1]
    reverse(nums, k, n - 1); // Reverse the remaining elements-> [5, 6, 7, 1, 2, 3, 4]
    return nums;
}
function reverse(arr, start, end) {
    while (start < end) {
        // [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        // start++;
        // end--;

        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.time("OptRotateArray");
console.log(optimizedRotateArray(nums, k)); // [5, 6, 7, 1, 2, 3, 4]
console.timeEnd("OptRotateArray");