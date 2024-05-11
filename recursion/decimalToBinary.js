
// 7 = 1 * 2^2 + 1 * 2^1 + 1 * 2^0
// 7 = 2 * 3 + 1;
// 3 = 2 * 1 + 1;
// 1 = 2 * 0 + 1;

// 7 =  1 * 2^2 + 1 * 2^1 + 1 * 2^0

// iterative solution

// time complexity: O(log(N))
// space complexity: O(log(N))
const decimalToBinary = (number) => {
    let binary = [];

    while (number != 0) {
        let r = number % 2;
        binary.push(r);
        number = Math.floor(number / 2);
    }

    binary.reverse();

    return (binary);
}

// recursive solution

// time complexity: O(log(N))
// space complexity
const decimalToBinaryRec = (number) => {
    if (number == 0) {
        return [];
    }

    let binary = decimalToBinaryRec(Math.floor(number / 2));

    binary.push(number % 2);

    return (binary);
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < test.length; i++) {
    console.log(decimalToBinaryRec(test[i]));
}
