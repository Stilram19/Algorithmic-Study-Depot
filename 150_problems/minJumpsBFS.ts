function jump(nums: number[]): number {
    let minJumpsCount = 0;
    let queue: number[][] = [ [0, 0] ]; // element: [index, level(or number of jumps from the root)]

    while (queue && queue.length > 0) {
        let current = queue.shift();

        if (current == undefined) {
            break ;
        }

        let currentIndex = current[0];
        let currentMaxJump = nums[currentIndex];
        let currentJumpsCount = current[1];

        if (currentIndex == nums.length - 1) {
            minJumpsCount = currentJumpsCount;
            break ;
        }

        if (currentMaxJump + currentIndex >= nums.length) {
            currentMaxJump = nums.length - currentIndex - 1;
        }

        while (currentMaxJump--) {
            queue.push([currentIndex + currentMaxJump + 1, currentJumpsCount + 1]);
        }
    }

    return (minJumpsCount);
};

console.log(jump([2,3,0,1,4]));