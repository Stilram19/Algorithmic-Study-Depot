function convertStrToMap(str: string): Map<string, number> {
    let strMap = new Map<string, number>();

    for (let i = 0; i < str.length; i++) {
        strMap.set(str[i], (strMap.get(str[i]) ?? 0) + 1);     
    }

    return (strMap);
}

function canConstruct(ransomNote: string, magazine: string): boolean {
    let magazinMap = convertStrToMap(magazine);

    for (let i = 0; i < ransomNote.length; i++) {
        let currentCharacterFrequency = magazinMap.get(ransomNote[i]);

        // 0 or undefined
        if (!currentCharacterFrequency) {
            return (false);
        }

        magazinMap.set(ransomNote[i], currentCharacterFrequency - 1);
    }

    return (true);
};

console.log(canConstruct("abc", "ab"));