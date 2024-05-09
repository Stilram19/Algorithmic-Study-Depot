'use strict';

const binarySearch = (array, item) => {
    let lowerIndex = 0;
    let upperIndex = array.length - 1;

    while (lowerIndex <= upperIndex) {
        let midIndex = Math.floor((lowerIndex + upperIndex) / 2);
        if (array[midIndex] === item) {
            return (midIndex);
        }
        if (array[midIndex] < item) {
            lowerIndex = midIndex + 1;
            continue ;
        }
        upperIndex = midIndex - 1;
    }

    return (-1);
};

const binarySearchRec = (array, item, lowerIndex = 0, upperIndex = array.length - 1) => {
    let midIndex = Math.floor((lowerIndex + upperIndex) / 2);

    if (lowerIndex > upperIndex) {
        return (-1);
    }

    if (array[midIndex] == item) {
        return (midIndex);
    }

    if (array[midIndex] < item) {
        return (binarySearchRec(array, item, midIndex + 1, upperIndex));
    }

    return (binarySearchRec(array, item, lowerIndex, midIndex - 1));
};

const array = [1, 2, 3, 100];
const searchItems = [2, 5, 10, 8, 20, 0, -1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

for (let i = 0; i < searchItems.length; i++) {
    let item = searchItems[i];
    if (binarySearchRec(array, searchItems[i]) != -1) {
        console.log(`Item ${item} Found!!`);
    }
}
