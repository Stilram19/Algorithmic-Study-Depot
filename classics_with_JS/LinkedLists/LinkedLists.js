class Node {
    constructor(val) {
       this.val = val;
       this.next = null;
    }

    getLink() {
        return (this.next);
    }

    setLink(next) {
        this.next = next;
    }
}

const printLinkedList = (head) => {
    while (head != null) {
        console.log(head.val);
        head = head.next;
    }
}

const reversePrintLinkedList = (head) => {
    if (head == null) {
        return ;
    }

    reversePrintLinkedList(head.next);
    console.log(head.val);
}

const convertToArray = (head) => {
    const array = [];
    const current = head;

    while (current != null) {
        array.push(current.val);
        current = current.next;
    }
    return (array);
}

// returns the sum of a linked list

const sumList = (head) => {
    let sum = 0;
    let current = head;

    while (current != null) {
        sum += current.val;
        current = current.next;
    }

    return (sum);
}

const recursiveListSum = (head) => {
    let sum = head.val;

    if (head == null) {
        return (0);
    }

    return (sum + recursiveListSum(head.next));
}

// function that returns the element at index i, (head is of index 0)

const returnElement = (index, head) => {
    for (let i = 0, current = head; current != null; i++, current = current.next) {
        if (i == index) {
            return (current.val);
        }
    }

    return (undefined);
}

const returnElementRecursive = (index, node) => {
    if (index < 0 || node == null || node == undefined) {
        return (undefined);
    }

    if (index == 0) {
        return (node.val);
    }

    return (returnElementRecursive(index - 1, node))
}

// reverse a linked list

// 1, 2, 3, 4, 5

// 1
const reverseLinkedList = (head) => {
   // having head point to the current last element in the list
   // having every node pointing to the current previous node

    let previous = null;
    let current = head;
    let next = current.next;

    while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return (previous);
}

const recursiveReverseLinkedList = (current, previous) => {
    // base case
    if (current == null) {
        return (previous);
    }

    let next = current.next;

    current.next = previous;
    return (recursiveReverseLinkedList(next, current));
}

// 1 => 2 => 3 => 4 => 5 => 6 (null)
// (null) 1 <= 2 <= 3 <= 4 <= 5 <= 6
const recReverseLinkedList = (current) => {
    if (current == null) {
        return (null);
    }

    const next = current.next;

    if (next == null) {
        return (current);
    }

    let ret = recReverseLinkedList(current.next);

    next.next = current;
    current.next = null;
    return (ret);
}

const zipperLists = (list1, list2) => {
    let newList = null;
    let temp = null;

    if (list1 == null && list2 == null) {
        return (null);
    }

    while (list1 != null || list2 != null) {
        if (list1 != null) {
            temp = addNode(temp, list1);
            if (newList == null) {
                newList = temp;
            }
            list1 = list1.next;
        }

        if (list2 != null) {
            temp = addNode(temp, list2);
            if (newList == null) {
                newList = temp;
            }
            list2 = list2.next;
        }
    }

    return (newList);
}

const addNode = (dest, src) => {
    if (dest == null) {
        return (new Node(src.val));
    }
    dest.next = new Node(src.val);
    return (dest.next);
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(10);
let f = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

let x = new Node(1);
let y = new Node(2);
let z = new Node(3);
let xx = new Node(4);
let yy = new Node(10);
let zz = new Node(5);

x.next = y;
y.next = z;
z.next = xx;
xx.next = yy;
yy.next = zz;

x = recReverseLinkedList(x);
let res = zipperLists(a, x);
printLinkedList(res);