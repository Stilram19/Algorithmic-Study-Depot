function romanToIntNumeralConverter(Numeral: string, converter: Map<string, number>) {
    return (converter.get(Numeral) ?? 0);
}

function romanToInt(s: string): number {
    let integer = 0;
    const converter = new Map<string, number>([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

    for (let i = 0; i < s.length; i++) {
        let isSubtraction = (s[i] == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X'))
                || (s[i] == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C'))
                || (s[i] == 'C' && (s[i + 1] == 'D' || s[i + 1] == 'M'))

        if (i != s.length - 1 && isSubtraction) {
            integer += romanToIntNumeralConverter(s[i + 1], converter);
            integer -= romanToIntNumeralConverter(s[i], converter);
            i++;
            continue ;
        }

        integer += romanToIntNumeralConverter(s[i], converter);
    }

    return (integer);
};

console.log(romanToInt("MCMXCIV"));

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
