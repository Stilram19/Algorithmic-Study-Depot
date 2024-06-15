function isAlpha(char) {
    return (char.length == 1 && /^[A-Za-z]+$/.test(char));
}
function isPalindrome(s) {
    var i = 0;
    var j = s.length - 1;
    s = s.toUpperCase();
    while (i < j) {
        if (isAlpha(s[i]) == false) {
            i++;
            continue;
        }
        if (isAlpha(s[j]) == false) {
            j--;
            continue;
        }
        if (s[i] != s[j]) {
            return (false);
        }
        i++;
        j--;
    }
    return (true);
}
;
console.log(isPalindrome(" "));
