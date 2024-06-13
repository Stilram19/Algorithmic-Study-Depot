function hiddenCanJump(nums: number[], memo: boolean[], firstIndex: number): boolean {
    // base case
    if (memo[firstIndex] !== undefined) {
        return (memo[firstIndex]);
    }

    let maxJumps = nums[firstIndex];

    if (firstIndex + maxJumps >= nums.length - 1) {
        return (true);
    }

    for (let i = maxJumps; i >= 1; i--) {
        if (hiddenCanJump(nums, memo, i + firstIndex) == true) {
            memo[firstIndex] = true;
            return (true);
        }
    }

    memo[firstIndex] = false;
    return (false);
}

// [2, 3, 4]
function canJump(nums: number[]): boolean {
    if (nums.length == 0) {
        return (false);
    }

    const memo: boolean[] = Array(nums.length);

    return (hiddenCanJump(nums, memo, 0));
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([4, 1, 2, 3, 4]));
