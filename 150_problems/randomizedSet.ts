class RandomizedSet {
    private randomizedSet: Set<number>;

    constructor() {
        this.randomizedSet = new Set();
    }

    insert(val: number): boolean {
        if (this.randomizedSet.has(val) == true) {
            return (false);
        }

        this.randomizedSet.add(val);
        return (true);
    }

    remove(val: number): boolean {
        if (this.randomizedSet.has(val) == true) {
            this.randomizedSet.delete(val);
            return (true);
        }

        return (false);
    }

    getRandom(): number {
        let randomIndex = Math.floor(Math.random() * this.randomizedSet.size);
        let currentIndex = 0;
        let setIterator = this.randomizedSet.values();

        for (let value of setIterator) {
            if (randomIndex == currentIndex) {
                return (value);
            }
            currentIndex++;
        }

        throw new Error("Index out of bounds");
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */