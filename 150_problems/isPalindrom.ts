function isAlphaNum(char: string) {
    return (char.length == 1 && /^[A-Za-z0-9]+$/.test(char));
}

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    s = s.toLowerCase();

    while (i < j) {
        if (isAlphaNum(s[i]) == false) {
            i++;
            continue ;
        }

        if (isAlphaNum(s[j]) == false) {
            j--;
            continue ;
        }

        if (s[i] != s[j]) {
            return (false);
        }

        i++;
        j--;
    }

    return (true);
};

console.log(isPalindrome(" "));