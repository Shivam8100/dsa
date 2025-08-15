//Greedy algorithm:algorithm that makes locally optimal choices in a sequence of steps with the goal of reaching a global optimum
//  to find the maximum profit from stock prices

// General method
function maxProfit(prices) {
    let result=0;
    for (let i=0;i<prices.length-1;i++){
        let currPrice=prices[i];
        for (let j=i+1;j<prices.length;j++){
            const temp=prices[j]-currPrice
            if(temp>result){
                result =temp
            }
        }

    }
    return result 
    
};

console.time("MaxProfit");
console.log(maxProfit([7,1,5,3,6,4])); // 5-> 7.174ms
console.timeEnd("MaxProfit");
// Optimized method

function optimizedMaxProfit(prices) {
    let profit=0;
  let minStockPrice=prices[0];//7->1
  for (let i=1;i<prices.length;i++){
    if(minStockPrice>prices[i]){
      minStockPrice=prices[i]//1->
    }
    profit=Math.max(profit,prices[i]-minStockPrice)
  }
  return profit
}

console.time("OptMaxProfit");
console.log(optimizedMaxProfit([7,1,5,3,6,4])); // 0.035ms 
console.timeEnd("OptMaxProfit");

function maxProfit1(prices) {
    let min = prices[0];
    let maxp = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > maxp) {
            maxp = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return maxp;
};

console.time("OptMaxProfit1");
console.log(maxProfit1([7,1,5,3,6,4])); // 0.024ms 
console.timeEnd("OptMaxProfit1");