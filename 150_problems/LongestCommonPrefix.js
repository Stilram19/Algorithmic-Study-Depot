function getCommonPrefix(str1, str2) {
    var commonPrefix = '';
    for (var i = 0; i < str1.length && i < str2.length; i++) {
        if (str1[i] != str2[i]) {
            break;
        }
        commonPrefix = commonPrefix.concat(str1[i]);
    }
    return (commonPrefix);
}
function longestCommonPrefix(strs) {
    if (strs.length == 0) {
        return ('');
    }
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        prefix = getCommonPrefix(prefix, strs[i]);
        if (prefix == '') {
            break;
        }
    }
    return (prefix);
}
;
console.log(longestCommonPrefix(["dog", "racecar", "racecar"]));
