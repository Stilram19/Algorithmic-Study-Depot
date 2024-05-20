// this function returns all the permutations of a given array (set)

// time complexity: O(N!)

const swapArrayValues = (arr, firstIndex, secondIndex) => {
    // check if the indices are within the range of arr
    if (firstIndex < 0 || firstIndex > arr.length) {
        return ;
    }
    
    if (secondIndex < 0 || secondIndex > arr.length) {
        return ;
    }

    let temp = arr[firstIndex];

    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
};

const permutations = (elements) => {
    if (elements.length === 0) {
        return ([ [] ]);
    }

    const firstElement = elements[0];
    const rest = elements.slice(1);
    const oldPermutations = permutations(rest);
    const newPermutations = [];

    oldPermutations.forEach(oldPermutation => {
        let newPermutation = [...oldPermutation];

        newPermutation.push(firstElement);
        for (let i = newPermutation.length - 1; i >= 0; i--) {
            newPermutations.push([...newPermutation]);

            // swap adjacent values to get a new postition for firstElement
            if (i > 0) {
                swapArrayValues(newPermutation, i - 1, i);
            }
        }
    });

    return (newPermutations);
};

console.log(permutations([1, 2, 3]));
