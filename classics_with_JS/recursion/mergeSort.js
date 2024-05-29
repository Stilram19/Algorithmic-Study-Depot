const mergeSortedArrays = (mergeArray, mergeIndex, leftArray, rightArray) => {
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
        if (leftIndex === leftArray.length) {
            mergeArray[mergeIndex++] = rightArray[rightIndex++];
            continue ;
        }

        if (rightIndex === rightArray.length) {
            mergeArray[mergeIndex++] = leftArray[leftIndex++];
            continue ;
        }

        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            mergeArray[mergeIndex++] = leftArray[leftIndex++];
            continue ;
        }

        mergeArray[mergeIndex++] = rightArray[rightIndex++];
    }

    return (mergeArray);
}

// (*) time complexity: O(N * logN)
// (*) space complexity:
// it depends on the garbage collection of the JS engine:
// if it immediately frees up the memory referenced by leftArray and rightArray
// right after the correspondant recursive call is finished
// the space complexity will be O(N) ( O(N + logN) O(N) is due to slice
// and O(logN) is due to the recursion depth). Otherwise it's O(N * logN).

const mergeSort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) {
        return (arr);
    }

    const middleIndex = Math.floor((start + end) / 2);
    mergeSort(arr, start, middleIndex);
    mergeSort(rra, middleIndex + 1, end);

    let leftArray = arr.slice(start, middleIndex + 1);
    let rightArray = arr.slice(middleIndex + 1, end + 1);

    return (mergeSortedArrays(arr, start, leftArray, rightArray));
};

const array = [1, 3, 2, 4, 5, 7, 6, 9, 8, 90, 7, 6, 5434, 23, -123, 4, 32];

console.log(mergeSort(array));
