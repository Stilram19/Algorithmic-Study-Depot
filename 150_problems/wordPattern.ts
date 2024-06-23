function wordPattern(pattern: string, s: string): boolean {
    let words = s.split(' ');

    if (words.length != pattern.length) {
        return (false);
    }

    let patternWordMemo = new Map<string, string>();
    let wordPatternMemo = new Map<string, string>();

    for (let i = 0; i < words.length; i++) {
        if (patternWordMemo.has(pattern[i])) {
            if (words[i] != patternWordMemo.get(pattern[i])) {
                return (false);
            }
        } else {
            patternWordMemo.set(pattern[i], words[i]);
        }

        if (wordPatternMemo.has(words[i])) {
            if (pattern[i] != wordPatternMemo.get(words[i])) {
                return (false);
            }
        } else {
            wordPatternMemo.set(words[i], pattern[i]);
        }
    }

    return (true);
};

console.log(wordPattern("aaaa", "dog cat cat dog"));
