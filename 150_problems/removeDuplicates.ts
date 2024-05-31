// inline solution

// 1, 2, 3, 4
// 2, 3, 4

function removeItem(nums: number[], index: number): void {
    for (let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }

    nums.pop();
}

function deleteAdjacentDuplicates(nums: number[], compareValue: number, index: number): number {
    for (let i = index; i < nums.length; i++) {
        if (nums[i] != compareValue) {
            return (i);
        }
        removeItem(nums, i);
        i--;
    }

    return (-1);
}

function removeDuplicates(nums: number[]): number {
    
    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];

        // delete all duplicates of ${currentValue}
        let nextIndex = deleteAdjacentDuplicates(nums, currentValue, i + 1);

        if (nextIndex == -1) {
            break ;
        }

        i = nextIndex - 1;
    }

    return (nums.length);
};

const array = [1, 1, 1, 2, 2, 3];

const k = removeDuplicates(array);

console.log('k: ' + k);
console.log('nums: ' + array);
