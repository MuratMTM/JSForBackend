const readline = require(`readline`);
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let orders = [
    { id: 1, product: `Laptop`, quantity: 2, price: 15000 },
    { id: 2, product: `Mouse`, quantity: 3, price: 250 },
    { id: 3, product: `Monitor`, quantity: 1, price: 3000 },
];

let extraOrder = {};

r1.question('Enter order ID: ', function (id) {
    extraOrder.id = Number(id);

    r1.question('Enter product name: ', function (product) {
        extraOrder.product = product;

        r1.question('Enter price: ', function (price) {
            extraOrder.price = Number(price);

            r1.question('Enter quantity: ', function (quantity) {
                extraOrder.quantity = Number(quantity);

                console.log('Extra Order:', extraOrder);
                addNewOrder(extraOrder);
                console.log(orders);

                function addNewOrder(newOrder) {
                    orders.push(newOrder);
                    return orders;
                }

                function calculateTotalPriceOfProducts(orders) {
                    let totalPrice = 0;
                    for (let i = 0; i < orders.length; i++) {
                        totalPrice += (orders[i].quantity * orders[i].price);
                    }
                    return totalPrice;
                }

                let calculatedTotalPrice = calculateTotalPriceOfProducts(orders);
                console.log(`Total price of products: ${calculatedTotalPrice}`);

                r1.close();
            });
        });
    });
});


