class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// the depth first traversal

const IterDFS = (root) => {
    if (root == null) {
        return [];
    }

    let stack = [ root ];
    let values = [];

    while (stack.length > 0) {
       let current = stack.pop();

        values.push(current.val);
        if (current.right != null) {
            stack.push(current.right);
        }

        if (current.left != null) {
            stack.push(current.left);
        }
    }

    return (values);
}

//     a
//   b        c
// d   e        f

// call stack:

// STD_OUT: dbeacf

const recFDT = (root) => {
    if (root == null) {
        return [];
    }

    let left = recFDT(root.left);
    let right = recFDT(root.right);

    return [root.val, ...left, ...right];
}

// Breadth first traversal:

//        a
//   b         c
// d   e     f   g

// queue:
// current: 
// out: abcdefg

const BFT = (root) => {
    if (root === null) {
        return [];
    }

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        let current = queue.shift();

        result.push(current.val);

        if (current.left != null) {
            queue.push(current.left);
        }

        if (current.right != null) {
            queue.push(current.right);
        }
    }

    return (result);
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// const vals = IterDFS(a);

// console.log(vals);

// const vals = recBFT(a);

// console.log(vals);

const vals = BFT(a);

console.log(vals);