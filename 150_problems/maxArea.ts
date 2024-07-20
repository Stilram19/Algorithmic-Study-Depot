function getArea(height: number[], firstPointer: number, secondPointer: number) {
    return ((secondPointer - firstPointer) * Math.min(height[firstPointer], height[secondPointer]));
}

function maxArea(height: number[]): number {
    let max = -Infinity;
    let firstPointer = 0;
    let secondPointer = height.length - 1;

    while (firstPointer < secondPointer) {
        max = Math.max(max, getArea(height, firstPointer, secondPointer));

        if (height[firstPointer] < height[secondPointer]) {
            firstPointer++;
        } else {
            secondPointer--;
        }
    }

    return (max);
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// 1, 2, 3, 4, 5, 6, 7, 8, 8

// 7