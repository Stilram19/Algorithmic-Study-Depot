function summaryRanges(nums: number[]): string[] {
    let ranges: string[] = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        let end = nums[i];

        while (i + 1 < nums.length && nums[i + 1] - nums[i] <= 1) {
            i++;
        }

        end = nums[i];
        ranges.push(`${start}` + `${start != end ? `->${end}` : ''}`);
    }

    return (ranges);
};

console.log(summaryRanges([0,2,3,4,6,8,9]));
