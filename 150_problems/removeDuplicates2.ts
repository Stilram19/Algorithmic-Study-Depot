function removeDuplicates(nums: number[]): number {
    if (nums.length == 0) {
        return (0);
    }

    let i = 0;
    let isFirstItem = true;

    for (let j = 1; j < nums.length; j++) {
        if (isFirstItem && nums[i] == nums[j]) {
            i++;
            nums[i] = nums[j];
            isFirstItem = false;
        }

        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
            isFirstItem = true;
        }
    }

    return (i + 1);
};

const arr = [0,0,1,1,1,1,2,3,3];

console.log('k: ' + removeDuplicates(arr));

console.log('arr: ' + arr);
