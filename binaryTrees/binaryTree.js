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

// includes problem using depth first traversal

const includes = (root, val) => {
    if (root == null) {
        return (false);
    }

    if (root.val == val) {
        return (true);
    }

    return (includes(root.left, val) || includes(root.right, val));
}

// tree sum using depth first traversal

const treeSum = (root) => {
    if (root == null) {
        return (0);
    }

    return (root.val + treeSum(root.left) + treeSum(root.right));
}

// tree min value using depth first traversal

const minimum = (values) => {
    let min = values[0];

    for (let i = 1; i < values.length; i++) {
        if (min > values[i]) {
            min = values[i];
        }
    }

    return (min);
}

const minVal = (root) => {
    if (root == null) {
        return (0);
    }

    let values = [ root.val ]

    if (root.left != null) {
        values.push(minVal(root.left));
    }
    if (root.right != null) {
       values.push(minVal(root.right));
    }

    return (minimum(values));    
}

//        a
//   b         c
// d   e     f   g

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(20);
const f = new Node(2);
const g = new Node(10);

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

// const vals = BFT(a);

// console.log(vals);

// console.log(treeSum(a));

console.log(minVal(a));