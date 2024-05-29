// const graph = {
//     i: ['j', 'k'],
//     j: ['i'],
//     k: ['i', 'm', 'l'],
//     l: ['k'],
//     m: ['k'],
//     n: ['o'],
//     o: ['n'],
// };

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const convertEdgesToGraph = (edges) => {
    if (edges == null) {
        return ;
    }

    let graph = {};

    for (let edge of edges) {
        const [firstNode, secondNode] = edge;

        if (firstNode in graph === false) {
            graph[firstNode] = [];
        }

        if (secondNode in graph === false) {
            graph[secondNode] = [];
        }

        graph[firstNode].push(secondNode);
        graph[secondNode].push(firstNode);
    }

    return (graph);
};

const dfsIterTraverse = (edges, source) => {
    const graph = convertEdgesToGraph(edges);

    let stack = [ source ];
    const visitedNeighbors = new Set();

    while (stack.length != 0) {
        const currentNode = stack.pop();

        if (visitedNeighbors.has(currentNode)) {
            continue ;
        }

        const currentNeighbors = graph[currentNode];

        for (let i = currentNeighbors.length - 1; i >= 0; i--) {
            stack.push(currentNeighbors[i]);
        }

        visitedNeighbors.add(currentNode);
        console.log(currentNode);
    }
};

dfsIterTraverse(edges, 'i');