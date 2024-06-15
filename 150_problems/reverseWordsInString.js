function reverseWords(s) {
    var words = [];
    var currentWord = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            currentWord += s[i];
            if (i == s.length - 1) {
                words.push(currentWord);
            }
            continue;
        }
        if (currentWord.length > 0) {
            words.push(currentWord);
            currentWord = '';
        }
    }
    var newStr = '';
    for (var i = words.length - 1; i >= 0; i--) {
        newStr += words[i];
        newStr += ' ';
    }
    return (newStr);
}
;
console.log(reverseWords("a good   example"));
