// MARK: for Loops
const readline = require(`readline`);

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question(`Please input a positive number: `, function (number) {
    number = Number(number);
    let multipliers = [];

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            multipliers.push(i);

        }
    }
    console.log(`Çarpanlar:${multipliers}`);
    console.log(`En küçük çarpan:${multipliers[0]}`);
    console.log(`En büyük çarpan:${multipliers[multipliers.length - 1]}`);

    r1.close();
});


// MARK: for in Loops
let myPhone = {
    brand: `OnePlus`,
    model: `12`
};

let myBrotherPhone = {
    brand: `Xiaomi`,
    model: `Note 11T Pro`
};
let mySisterPhone = {
    brand: `Apple`,
    model: `Iphone 12`
};

let phones = [myPhone, myBrotherPhone, mySisterPhone];

for (let phone of phones) {
    for (let key in phone) {
        if (key === 'brand') {
            console.log(`Our phone brand: ${phone[key]}`);
        }
    }
}