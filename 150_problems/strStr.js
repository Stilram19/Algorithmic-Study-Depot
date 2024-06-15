function isPrefix(prefix, str, startingIndex) {
    var i = 0;
    while (i < Math.min(str.length - startingIndex, prefix.length)) {
        if (prefix[i] != str[i + startingIndex]) {
            return (false);
        }
        i++;
    }
    return (i == prefix.length);
}
function strStr(haystack, needle) {
    for (var i = 0; i < haystack.length; i++) {
        if (needle.length + i > haystack.length) {
            break;
        }
        if (isPrefix(needle, haystack, i)) {
            return (i);
        }
    }
    return (-1);
}
;
console.log(strStr("a", ""));
