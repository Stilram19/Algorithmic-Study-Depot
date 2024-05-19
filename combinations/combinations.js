// time complexity: 
// space complexity: O(2^n)

const combinations = (elements) => {
    if (elements.length === 0) {
        return ([ [] ]);
    }

    let firstElement = elements[0];
    let rest = elements.slice(1);
    let withoutFirstCombinations = combinations(rest);
    let withFirstCombinations = [];

    withoutFirstCombinations.forEach(comb => {
        let withFirstCombination = [...comb];

        withFirstCombination.push(firstElement);
        withFirstCombinations.push(withFirstCombination);
    });

    return ([...withoutFirstCombinations, ...withFirstCombinations]);
};
// [a, b, c, d]
// stack: ([a])
// return: [ [], [d], [c], [d, c], [b], [d, b], [c, b], [d, c, b], [a], [d, a], [c, a], [d, c, a], [b, a], [d, b, a], [c, b, a], [d, c, b, a] ]

console.log(combinations(['a', 'b', 'c', 'd']));