function insertionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j>0;j--){
            if(arr[j]<arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
                // [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
            else{
                break
            }
        };
    }
    return arr;

}
function findMax(arr){
    let max=arr[0]
    let maxIndex=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){

            max=arr[i];
            maxIndex=i
        }
       
    }
    
    // console.log(max)
    return maxIndex;

}

let array=[5,4,2,3,1];
findMax(array)
// insertionSort(array);
