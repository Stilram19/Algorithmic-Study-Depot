const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const minimum_island = (grid) => {
    let minimum = Infinity
    let visitedLand = new Set();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'W' || visitedLand.has(`${i}, ${j}`)) {
                continue ;
            }

            let size = get_island_size(grid, visitedLand, i, j);

            if (size > 0 && size < minimum) {
                minimum = size;
            }
        }
    }

    return (minimum);
};

const get_island_size = (grid, visitedLand, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return (0);
    }

    if (grid[i][j] === 'W' || visitedLand.has(`${i}, ${j}`)) {
        return (0);
    }

    visitedLand.add(`${i}, ${j}`);

    let size = 1;
    size += get_island_size(grid, visitedLand, i, j - 1);
    size += get_island_size(grid, visitedLand, i, j + 1);
    size += get_island_size(grid, visitedLand, i - 1, j);
    size += get_island_size(grid, visitedLand, i + 1, j);

    return (size);
}

console.log(minimum_island(grid));