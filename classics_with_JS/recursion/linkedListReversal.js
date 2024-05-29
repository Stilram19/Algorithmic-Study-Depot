// linked list reversal

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

const displayList = (head) => {
    let current = head;

    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

// 1 => 2 => 3 => 4 => 5 => null
// null <= 1 <= 2 <= 3 <= 4 <= 5

// iterative approach
// time complexity: O(N)
// space complexity: O(1)

const reverseLinkedList = (head) => {
    let previous = null;
    let current = head;

    while (current != null) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return (previous);
};

// time complexity: O(N)
// space complexity: O(N)
const recReverseLinkedList = (current) => {
    if (current === null || current.next === null) {
        return (current);
    }

    const newHead = recReverseLinkedList(current.next);

    // adjusting the next of the next node to point to the current.
    current.next.next = current;

    // if this is the first node in the old order of the list,
    // its next field will point to null, this will mark the end of
    // the new list. Otherwise it will be adjusted to point
    // to the current variable of the previous recursive call
    // once this call is finished.
    current.next = null;

    return (newHead);
};

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log('List before reversal: ');
displayList(a);
console.log('List after reversal: ');
displayList(reverseLinkedList(a));
