function rotate(nums: number[], k: number): void {
    if (nums.length == 0 || nums.length == 1) {
        return ;
    }

    if (k >= nums.length) {
        k = (k % nums.length)
    }

    let temp: number[] = [];

    for (let i = nums.length - k; i < nums.length; i++) {
        temp.push(nums[i]);
    }

    for (let i = 0; i < nums.length - k; i++) {
        temp.push(nums[i]);
    }

    nums.splice(0, nums.length, ...temp);
};

// const arrr = [1, 2, 3, 4, 5, 6, 7, 8];

// rotate(arrr, 5);

// console.log(arrr);