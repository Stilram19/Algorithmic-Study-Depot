const graph = {
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
};

// we need to count the number of connected components of the input graph

const connected_components_count = (graph) => {
    let count = 0;
    let visited = new Set();

    for (let node in graph) {
        if (visited.has(node) == true) {
            continue ;
        }

        dfsIterTraverse(graph, node, visited);
        count++;
    }

    return (count);
};

const dfsIterTraverse = (graph, source, visited) => {
    let stack = [ source ];

    while (stack.length != 0) {
        const currentNode = stack.pop();

        if (visited.has(currentNode) == true) {
            continue ;
        }

        const currentNeighbors = graph[currentNode];

        for (let i = currentNeighbors.length - 1; i >= 0; i--) {
            stack.push(currentNeighbors[i]);
        }

        visited.add(currentNode);
    }
};

console.log(connected_components_count(graph));