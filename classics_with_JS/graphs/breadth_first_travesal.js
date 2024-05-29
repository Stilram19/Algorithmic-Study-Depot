const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const breadth_first_traversal = (graph) => {
    if (graph == null) {
        return ;
    }

    let KeysQueue = [ 'a' ];

    while (KeysQueue.length != 0) {
        let currentKey = KeysQueue.shift();
        let currentValue = graph[currentKey];

        console.log(currentKey);

        KeysQueue = KeysQueue.concat(currentValue);
    }
};

// a => b, c
// b => d
// c => e
// d => f
// e => NOTHING
// f => NOTHING

// queue:
// currentKey:
// stdout: a, b, c, d, e, f

breadth_first_traversal(graph);
