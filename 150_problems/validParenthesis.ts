function isValid(s: string): boolean {
    let stack: string[] = [];
    let closingParenthesis = new Map<string, string>([[')', '('], [']', '['], ['}', '{']]);
    let openParenthesis = new Set<string>(['(', '[', '{']);

    for (let i = 0; i < s.length; i++) {
        if (openParenthesis.has(s[i])) {
            stack.push(s[i]);
            continue ;
        }

        const top = stack.pop();

        if (top != closingParenthesis.get(s[i])) {
            return (false);
        }
    }

    return (stack.length === 0);
};

console.log(isValid('[({{}})]'));
