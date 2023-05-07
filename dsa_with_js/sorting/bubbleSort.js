function bubblesort(arr){//big 0->O(n^2)
    let swapped;
    do{
        swapped=false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp;
                swapped =true            
            }
        }
    }
    while(swapped)
}
const array=[-5,-6,2,5,3,1]
bubblesort(array);
console.log(array)