const calculateAverage = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        sum += number;
    }

    return sum / numbers.length;
}

// time complexity is O(n)
