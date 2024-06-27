function twoSum(nums: number[], target: number): number[] {
    let indicesMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let complementIndex = indicesMap.get(complement);

        if (complementIndex != undefined) {
            return ([complementIndex, i]);
        }

        indicesMap.set(nums[i], i);
    }

    return ([]);
}
