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

const shortest_path = (graph, source, dest) => {
    let queue = [ source ];
    let min_path_length = 0; // min number of edges between the source and dest
    let visited = new Set();

    while (queue.length > 0) {
        let current_node = queue.shift();

        if (visited.has(current_node) == true) {
            continue ;
        }

        if (source === dest) {
            return (min_path_length);
        }

        queue = queue.concat(graph[current_node]);
        visisted.add(current_node);
        min_path_length++;
    }

    return (-1);
};

// Breadth first search approach is better for this problem.