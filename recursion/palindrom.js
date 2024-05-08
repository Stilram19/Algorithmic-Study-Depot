// iterative solution

const isPalindrom = (str) => {
    let i = 0, j = str.length - 1;

    while (i < j) {
        if (str[i] != str[j]) {
            return (false);
        }
        i++;
        j--;
    }

    return (true);
};

// recursive solution

const isPalindromRec = (str, i = 0) => {
    // base case
    if (i >= str.length - 1 - i) {
        return (true);
    }

    // recursive logic
    if (str[i] == str[str.length - 1 - i]) {
        return (isPalindromRec(str, i + 1));
    }

    return (false);
}

const strTestArr = ["RACECAR", "", "A", "AB", "ABA", "AABAA", "ABBA", "PALINDROMNORDNILAP", "PALINDROMMORDNILAP", "PALINDROMORDNILAP"];

for (let i = 0; i < strTestArr.length; i++) {
    console.log(strTestArr[i]);
    if (isPalindromRec(strTestArr[i]) === true) {
        console.log("YES!");
        continue ;
    }
    console.log("NO!");
}

// ababababa
// aba
// aabaa
// ASMSA
// AMMA
