// function lengthOfLastWord(s: string): number {
//     let lastWordLength = 0;
//     let i = s.length - 1;
//     while (i >= 0 && s[i] == ' ') {
//         i--;
//     }
//     while (i >= 0 && s[i] != ' ') {
//         lastWordLength++;
//         i--;
//     } 
//     return (lastWordLength);
// };
function lengthOfLastWord(s) {
    var currentWordLength = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            continue;
        }
        if (i == 0 || s[i - 1] == ' ') {
            currentWordLength = 0;
        }
        currentWordLength++;
    }
    return (currentWordLength);
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));
