function binarySearch(arr, target) {//[2,5,7,9,12,24,25]  O(logn)
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        // console.log(mid,"midddd")
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1
}
function binarySearchWithRecusrsion(arr,target){
  return Search(arr,target,0,arr.length-1);
}

function Search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target===arr[middleIndex]){
        return middleIndex
    }
    if(target<arr[middleIndex]){
        return Search(arr,target,leftIndex,middleIndex-1)
    }
    else{
        return Search(arr,target,middleIndex+1,rightIndex)
    }
}

console.log(binarySearch([2, 5, 7, 9, 12, 24, 25], 9))//3
console.log(binarySearch([2, 5, 7, 9, 12, 24, 25], 7))//3
console.log(binarySearch([2, 5, 7, 9, 12, 24, 25], 50))//-1
console.log("<<<<<<<<<<<<<<=============result of resursive approach of binary search =========>>>>>>>>>>>>>")

console.log(binarySearchWithRecusrsion([2, 5, 7, 9, 12, 24, 25], 9))//3
console.log(binarySearchWithRecusrsion([2, 5, 7, 9, 12, 24, 25], 7))//3
console.log(binarySearchWithRecusrsion([2, 5, 7, 9, 12, 24, 25], 50))//-1

