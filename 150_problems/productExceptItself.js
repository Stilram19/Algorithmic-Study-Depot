function productExceptSelf(nums) {
    var answer = Array(nums.length).fill(1);
    var leftProduct = 1;
    var rightProduct = 1;
    for (var i = 0; i < nums.length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return (answer);
}
;
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
