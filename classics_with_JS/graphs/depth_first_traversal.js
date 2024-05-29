const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const depth_first_traversal = (graph, source) => {
    if (graph == null) {
        return ;
    }

    let KeysStack = [ source ];

    while (KeysStack.length != 0) {
        let currentKey = KeysStack.pop();
        let currentValue = graph[currentKey];

        console.log(currentKey); // log the current node

        for (let i = currentValue.length - 1; i >= 0; i--) {
            KeysStack.push(currentValue[i]);
        }
    }
}

const recursive_depth_first_traversal = (graph, source) => {
    const neighbors = graph[source];

    console.log(source);

    neighbors.forEach(neighbor => {
        recursive_depth_first_traversal(graph, neighbor);
    })
};

// depth_first_traversal(graph, 'a');
recursive_depth_first_traversal(graph, 'a');