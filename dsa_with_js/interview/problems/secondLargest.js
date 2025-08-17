//find the second largest number in an array
//[12,35,1,10,34,1]->34
//[5,10,5]->5



function secondLargest(arr) {
let largest = -Infinity;
let secondLargest = -Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];
    } else if(arr[i]!=largest && arr[i]>secondLargest){
        secondLargest = arr[i];
    }
}
return secondLargest

}//0(n) time complexity and O(1) space complexity
const a=[12,35,1,10,34,1]
console.time("SecondLargest");
console.log(secondLargest(a))
console.timeEnd("SecondLargest");
