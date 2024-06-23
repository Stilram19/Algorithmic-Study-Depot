function twoSum(numbers: number[], target: number): number[] {
    let i = 0;
    let j = numbers.length - 1;
    let returnedIndices: number[] = [1, numbers.length]

    while (i < j) {
        let sum = numbers[i] + numbers[j];

        if (sum == target) {
            returnedIndices = [i + 1, j + 1];
            break ;
        }

        if (sum > target) {
            j--;
        }

        if (sum < target) {
            i++;
        }
    }

    return (returnedIndices);
};

// [2,7,11,15], target = 9