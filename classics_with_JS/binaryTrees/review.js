// tackle the dft and bft algorithms in binaryTree

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

// let's start by coding depth first traversal:

//          1
//      2       3
//    4  5    6  7

// stack:

// algorithm: loop(stack != empty) => current => push(current.left)
// push(current.right);

// stdout: 1245367

const DFT = (root) => {
    if (root == null) {
        return ;
    }

    const stack = [ root ];

    while (stack.length > 0) {
        let current = stack.pop();
        console.log(current.val);

        if (current.left != null) {
            stack.push(current.left);
        }

        if (current.right!= null) {
            stack.push(current.right);
        }
    } 
}

//          1
//      2       3
//    4  5    6  7

// queue: 1

// loop condition: queue.length > 0

// iteration: current = current, 

const BFT = (root) => {
    if (root === null) { 
        return ;
    }

    const queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();

        console.log(current.val);

        if (current.left != null) {
            queue.push(current.left);        
        }

        if (current.right != null) {
            queue.push(current.right);       
        }
    }
}
