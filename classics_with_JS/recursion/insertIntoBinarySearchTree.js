class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};


// time complexity: best case O(logN), worst case O(N)
// space complexity: best case O(logN), worst case O(N)

const insertNodeIntoBinarySearchTree = (root, val) => {
    if (root === null) {
        return (new Node(val));
    }

    if (val < head.val) {
        root.left = insertNodeIntoBinarySearchTree(root.left, val);
        return (root);
    }

    root.right = insertNodeIntoBinarySearchTree(root.right, val);
    return (root.right);
}
