function swap_items(array: number[], firstIndex: number, secondIndex: number) {
    let temp = array[firstIndex];

    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function removeElement(nums: number[], val: number): number {
    let i = 0; // pointer to traverse the array
    let j = nums.length - 1; // pointing to the current last element (not occupied)

    while (i <= j) {
        if (nums[i] == val) {
            swap_items(nums, i, j);
            j--;
            continue ;
        }
        i++;
    }

    return (i);
};
