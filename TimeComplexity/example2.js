const foo = (n) => {
    // O(n)
    for (let a = 0; a < n / 2; a++) {
        console.log(a);
    }

    // O(n ^ 2)
    for (let b = 0; b < n; b++) {
        for (let c = 0; c < n; c++) {
            console.log(b + ", " + c);
        }
    }
}

foo(10);

// (*) applying the product rule:
// the time complexity is O(n^2 + n)
// (*) applying the sum rule:
//  the time complexity is O(n ^ 2), quadratic time
