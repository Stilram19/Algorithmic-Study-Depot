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

const largest_component = (graph) => {
    if (graph == null) {
        return ;
    }

    let longest_number = 0;
    let visited = new Set();

    for (let node in graph) {
        if (visited.has(node) == true) {
            continue ;
        }

        let current_component_size = explore(graph, node, visited);

        console.log(`Component Size: ${current_component_size}`);

        if (longest_number < current_component_size) {
            longest_number = current_component_size;
        }
    }

    return (longest_number);
};

const explore = (graph, source, visited) => {
    let stack = [ source ];
    let size = 0;

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
        size++;
    }

    return (size);
};


console.log(largest_component(graph));