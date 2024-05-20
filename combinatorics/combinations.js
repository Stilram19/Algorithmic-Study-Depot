// this function returns all the combinations of a given array (set)

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

console.log(combinations(['a', 'b', 'c', 'd']));