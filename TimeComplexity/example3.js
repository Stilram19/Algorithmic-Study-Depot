// write a function, unique, that takes in an array
// and returns a new array containing the unique elements.

const unique = (elements) => {
    let uniqueElements = [];

    for (let i = 0; i < elements.length; i++) {
        if (uniqueElements.includes(elements[i]) == false) {
            uniqueElements.push(elements[i]);
        }
    }

    return uniqueElements;
}

// n is the length of the elements array
// O(n ^ 2) considering that the function includes's complexity
// is O(n)

const fastUnique = (elements) =>{
    let uniqueElements = new Set();

    for (let i = 0; i < elements.length; i++) {
        uniqueElements.add(elements[i]);
    }

    return Array.from(uniqueElements);
}

const startSlow = new Date();
console.log(unique([1, 3, 2, 3, 3, 3, 4, 5, 1, 2, 3, 8, 87]))
const endSlow = new Date();


const startFast= new Date();
console.log(fastUnique([1, 3, 2, 3, 3, 3, 4, 5, 1, 2, 3, 8, 87]))
const endFast = new Date();

console.log("slowUnique: " + (endSlow - startSlow));
console.log("fastUnique: " + (endFast - startFast));
