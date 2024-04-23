
// by runing the script you'll find out time measurement isn't consistent
// the elapsedTime is within the range 5, 7 ms in my machine.

const sumArray = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];     
    }

    return sum;
}

let array = [1, 2, 3, 4, 5];

let startTime = new Date();
console.log(sumArray(array));
const endTime = new Date();

const elapsedTime = endTime - startTime;
console.log(`finished in ${elapsedTime} ms.`);

