function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) {
        return (false);
    }

    let replacingMemo = new Map<string, string>();
    let replacedMemo = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        if (replacingMemo.has(t[i])) {
            if (s[i] != replacingMemo.get(t[i])) {
                return (false);
            }
        }

        if (replacedMemo.has(s[i])) {
            if (t[i] != replacedMemo.get(s[i])) {
                return (false);
            }
        }

        replacedMemo.set(s[i], t[i]);
        replacingMemo.set(t[i], s[i]);
    }

    return (true);
};

console.log(isIsomorphic("paper", "title"));