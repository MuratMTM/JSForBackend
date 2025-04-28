function calculate(number1, number2, operation) {
    let result;
    switch (operation) {
        case `+`:
            result = number1 + number2;
            break
        case `-`:
            result = number1 - number2;
            break
        case `*`:
            result = number1 * number2;
            break
        case `/`:
            result = number2 !== 0 ? number1 / number2 : `can not be divided by 0`;
            break
        default:
            console.log(`Invalid request.`);
    }
    return result;
}

module.exports = calculate;