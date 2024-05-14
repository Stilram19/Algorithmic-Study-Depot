class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// time complexity: O(N)
// space complexity: best case O(logN), worst case O(N)
const printAllLeafNodes = (node) => {
    if (node === null) {
        return ;
    }

    if (node.left === null && node.right === null) {
        console.log(node.val);
    }

    printAllLeafNodes(node.left);
    printAllLeafNodes(node.right);
}
