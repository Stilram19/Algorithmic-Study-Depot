function removeDuplicates2(nums: number[]): number {
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

