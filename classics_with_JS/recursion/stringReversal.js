// time complexity: O(N^2)
// space complexity: O(N)

const reverseString = (str) => {
    if (str.length <= 1) {
        return str; // Base case: return the string itself when its length is 0 or 1
    }

    const remainingString = str.slice(1);
    return reverseString(remainingString) + str[0]; // Recursive call with remaining string
}

const str = "The Average Programmer";
console.log(reverseString(str));
