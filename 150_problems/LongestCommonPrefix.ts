function getCommonPrefix(str1: string, str2: string): string {
    let commonPrefix = '';

    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] != str2[i]) {
            break ;
        }

        commonPrefix += str1[i];
    }

    return (commonPrefix);
}

function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 0) {
        return ('');
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        prefix = getCommonPrefix(prefix, strs[i]);

        if (prefix == '') {
            break ;
        }
    }

    return (prefix);
};

console.log(longestCommonPrefix(["dog","racecar","racecar"]));