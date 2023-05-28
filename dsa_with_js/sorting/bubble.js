function sort(arr){
    let swapped=false;
    for(let i=0;i<arr.length;i++){
        swapped=false
        for(let j=1;j<arr.length-i;j++){
        if(arr[j-1]>arr[j]){
            //swap two numbers (aba)
            arr[j-1]=arr[j-1]+arr[j];
            arr[j]=arr[j-1]-arr[j];
            arr[j-1]=arr[j-1]-arr[j]
            swapped=true
        }
        }
        //.if you didn't swap for a particular i then it should be out of loop(array is sorted)
        if(!swapped){
            break;
        }
    }
    // console.log(arr)
    return arr;
}
//  console.log(sort([1,2,3,4,5])) 
let prices = [12, 20, 18];
let newPriceArray = [...prices,13];
newPriceArray[0]=1234
console.log(newPriceArray);
console.log(prices)
