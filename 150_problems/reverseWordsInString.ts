function reverseWords(s: string): string {
    let words: string[] = [];
    let currentWord = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            currentWord += s[i];

            if (i == s.length - 1) {
                words.push(currentWord);
            }

            continue ;
        }

        if (currentWord.length > 0) {
            words.push(currentWord);
            currentWord = '';
        }
    }

    let newStr = '';

    for (let i = words.length - 1; i >= 0; i--) {
        newStr += words[i];
        if (i > 0) {
            newStr += ' ';
        }
    }

    return (newStr);
};

console.log(reverseWords("a good   example"));
