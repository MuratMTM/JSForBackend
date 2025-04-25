function calculateEstimatedBaseCarPrice(salePrice) {
    
    let firstPermitPrice = 2.757;
    let secondPermitPrice = 3.335;
    let salePriceWithoutPermitsPrice = salePrice - (firstPermitPrice + secondPermitPrice);
    let basePrice = salePriceWithoutPermitsPrice / 2.16
    
    return basePrice;
    
};

console.log(calculateEstimatedBaseCarPrice(1529000));
