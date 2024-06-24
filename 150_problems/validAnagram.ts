function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
        return (false);
    }

    let memo = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        memo.set(s[i], 1 + (memo.get(s[i]) ?? 0));
    }

    for (let i = 0; i < t.length; i++) {
        let numberOfOccurrences = memo.get(t[i]);

        if (!numberOfOccurrences) {
            return (false);
        }

        numberOfOccurrences--;
        memo.set(t[i], numberOfOccurrences);
    }

    return (true);
};

console.log(isAnagram("anagram", "nagaram"));

// check that every character is s is in t
