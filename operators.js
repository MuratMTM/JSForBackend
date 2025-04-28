const readline = require(`readline`);
const calculate = require("./switchCase");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question(`First Number: `, function (number1) {
    r1.question(`Second Number: `, function (number2) {

        r1.question(`What is the operation do you wanna do?: `, function (operation) {

            number1 = Number(number1);
            number2 = Number(number2);

            let result;

            if (isNaN(number1) || isNaN(number2)) {
                console.log(`Please input a number!`);
                return;
            }

            result = calculate(number1, number2, operation);

            console.log(`Result: ${result}`);
            r1.close();
        });
    });
});










