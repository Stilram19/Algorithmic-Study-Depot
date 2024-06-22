function productExceptSelf(nums: number[]): number[] {
    let answer: number[] = Array(nums.length).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];        
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return (answer);
};

console.log(productExceptSelf([-1,1,0,-3,3]));
