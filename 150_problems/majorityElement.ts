function majorityElement(nums: number[]): number {
    let elements = new Map<number, number>();
    let ret = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let count = elements.get(nums[i]);

        if (count != undefined) {
            if (count + 1 > Math.floor(nums.length / 2)) {
                ret = nums[i];
                break ;
            }

            elements.set(nums[i], count + 1);
            continue ;
        }

        elements.set(nums[i], 1);
    }

    return (ret);
};

console.log('res: ' + majorityElement([8, 8, 7, 7, 7]))