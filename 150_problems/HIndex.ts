function hIndex(citations: number[]): number {
    for (let i = citations.length; i >= 1; i--) {
        let numberOfCitations = 0;

        for (let j = 0; j < citations.length; j++) {
            if (citations[j] >= i) {
                numberOfCitations++;
            }

            if (numberOfCitations == i) {
                return (i);
            }
        }

    }

    return (0);
};

console.log(hIndex([1,3,1]));