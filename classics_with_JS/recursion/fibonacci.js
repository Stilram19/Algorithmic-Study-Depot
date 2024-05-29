// time complexity O(2^N)
// space complexity O(N)
const fibonacci = (index) => {
    if (index <= 1) {
        return (index);
    }

    return (fibonacci(index - 1) + fibonacci(index - 2));
}

// time complexity O(N) (N is the index)
// space complexity O(1)
const fibonacciOptimized = (index) => {
    
    if (index <= 1) {
        return (index);
    }

    let summand1 = 0;
    let summand2 = 1;
    let currentValue = 0;

    while (--index) {
        currentValue = summand1 + summand2;
        summand1 = summand2;
        summand2 = currentValue;
    }

    return (currentValue);
}

for (let i = 0; i < 10; i++) {
    let fibonacciValue = fibonacciOptimized(i);
    console.log(`${i}: ${fibonacciValue}`);
}
