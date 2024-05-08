const sumNaturalNumbers = (number) => {
    if (number < 0) {
        return (number);
    }

    if (number == 0) {
        return (0);
    }

    return (number + sumNaturalNumbers(number - 1));
};

// number = 4;

console.log(sumNaturalNumbers(4));