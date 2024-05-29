class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

const insertNode = (dest, src) => {
    if (dest === null) {
        return (new Node(src.val));
    }

    dest.next = new Node(src.val);
    return (dest.next);
}

// time complexity: O(N + M)
// space complexity: O(N + M)

const mergeSortedLinkedLists = (list1, list2) => {
    let mergeList = null;
    let mergeListCurrent = null;

    while (list1 != null && list2 != null) {
        let correspondantNode = null;

        if (list1.val < list2.val) {
            correspondantNode = list1;
            list1 = list1.next;
        } else {
            correspondantNode = list2;
            list2 = list2.next;
        }

        mergeListCurrent = insertNode(mergeListCurrent, correspondantNode);

        if (mergeList === null) {
            mergeList = mergeListCurrent;
        }
    }

    while (list1 != null) {
        insertNode(mergeListCurrent, list1);
        list1 = list1.next;
    }

    while (list2 != null) {
        insertNode(mergeListCurrent, list2);
        list2 = list2.next;
    }

    return (mergeList);
}

// time complexity: O(N + M)
// space complexity: O(N + M)

const recMergeSortedLinkedLists = (firstNode, secondNode) => {
    if (firstNode == null) {
        return (secondNode);
    }

    if (secondNode == null) {
        return (firstNode);
    }

    if (firstNode.val < secondNode.val) {
        firstNode.next = recMergeSortedLinkedLists(firstNode.next, secondNode);
        return (firstNode);
    }

    secondNode.next = recMergeSortedLinkedLists(firstNode, secondNode.next);
    return (secondNode);
}


const displayList = (head) => {
    let current = head;

    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

let a = new Node(2);
let b = new Node(4);
let c = new Node(6);
let d = new Node(8);
let e = new Node(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let aa = new Node(1);
let bb = new Node(5);
let cc = new Node(7);
let dd = new Node(9);
let ee = new Node(11);

aa.next = bb;
bb.next = cc;
cc.next = dd;
dd.next = ee;

// displayList(aa);

displayList(recMergeSortedLinkedLists(a, aa));
