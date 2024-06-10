function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
            continue ;
        }

        if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return (maxProfit);
};

console.log(maxProfit([7,6,4,3,1]));