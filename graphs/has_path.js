const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// DFS iterative approach
const hasPathDfsIterative = (graph, source, dest) => {
    let stack = [ source ];

    while (stack.length != 0) {
        let currentNode = stack.pop();

        if (currentNode === dest) {
            return (true);
        }

        let neighbors = graph[currentNode];

        stack = stack.concat(neighbors);
    }

    return (false);
};

// DFS recursive approach
const hasPathDfsRecursive = (graph, source, dest) => {
    if (source === dest) {
        return (true);
    }

    for (let neighbor in neighbors) {
        if (hasPathDfsRecursive(graph, neighbor, dest) === true) {
            return (true);
        }
    }

    return (false);
};

// BFS approach
const hasPathBfs = (graph, source, dest) => {
    let queue = [ source ];

    while (queue.length != 0) {
        let currentNode = queue.shift();

        if (currentNode === dest) {
            return (true);
        }

        let neighbors = graph[currentNode];

        queue = queue.concat(neighbors);
    }

    return (false);
};

console.log('a: ' + hasPathBfs(graph, 'a', 'b'));
console.log('b: ' + hasPathBfs(graph, 'a', 'b'));
console.log('c: ' + hasPathBfs(graph, 'a', 'b'));
console.log('d: ' + hasPathBfs(graph, 'a', 'b'));
console.log('e: ' + hasPathBfs(graph, 'a', 'b'));
console.log('f: ' + hasPathBfs(graph, 'a', 'b'));
console.log('f: ' + hasPathBfs(graph, 'a', 'g'));