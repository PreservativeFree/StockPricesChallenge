let maxVal = 0;
let largeVal = 0;
let largePos = 0;
let profit = 0;
let best = function(priceArray) {
    largeVal = Math.max(priceArray)
    if(largeVal === priceArray[0])
        return 0;

    for(let i = 0; i < priceArray.length; i++){
        if(maxVal < priceArray[i]) {
            maxVal = priceArray[i]
            largePos = i;
        }
    }
    let myArray = priceArray.slice(0, largePos + 1)
    for(let i = 0; i < myArray.length; i++)
        console.log(myArray[i]);
    let minVal = Math.min(...myArray);
    profit = maxVal - minVal;
    return profit;
}
console.log(best([15, 10, 20, 22, 1, 9]));