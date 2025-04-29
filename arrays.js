let orders = [
    { id: 1, product: `Laptop`, quantity: 2, price: 15000 },
    { id: 2, product: `Mouse`, quantity: 3, price: 250 },
    { id: 3, product: `Monitor`, quantity: 1, price: 3000 },
];

function calculateTotalPriceOfProducts(orders) {

    let totalPrice = 0;
    for (let i = 0; i < orders.length; i++) {
        totalPrice += (orders[i].quantity * orders[i].price);
    }
    return totalPrice;
}

let calculatedTotalPrice = calculateTotalPriceOfProducts(orders);
console.log(`Total price of products: ${calculatedTotalPrice}`);