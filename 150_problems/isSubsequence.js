function isSubsequence(s, t) {
    var i = 0;
    var j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
        }
        j++;
    }
    return (i == s.length);
}
;
console.log(isSubsequence("axc", "ahbgdc"));
