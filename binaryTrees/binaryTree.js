class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// depth first search
const dfs = (root) => {
    if (root == null) {
        return ;
    }

    let stack = [root];

    while (stack.length > 0) {
        let current = stack.pop();

        console.log(current.val);

        if (current.right != null) {
            stack.push(current.right);
        }

        if (current.left != null) {
            stack.push(current.left);
        }
    }
}

const recDfs = (current) => {
    if (current == null) {
        return ;
    }
    console.log(current.val);
    recDfs(current.left);
    recDfs(current.right);
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

recDfs(a);