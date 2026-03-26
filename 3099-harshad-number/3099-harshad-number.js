var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0, temp = x;

    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    return x % sum === 0 ? sum : -1;
};