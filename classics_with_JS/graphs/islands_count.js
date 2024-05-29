const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const islands_count = (grid) => {
    let count = 0;
    let visitedLand = new Set();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'W') {
                continue ;
            }

            if (visitedLand.has(`${i}, ${j}`)) {
                continue ;
            }

            explore_island(grid, visitedLand, i, j);

            count++;
        }
    }

    return (count);
};

const explore_island = (grid, visitedLand, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return ;
    }

    if (grid[i][j] === 'W' || visitedLand.has(`${i}, ${j}`)) {
        return ;
    }

    // mark the land as visited
    visitedLand.add(`${i}, ${j}`);

    explore_island(grid, visitedLand, i, j - 1);
    explore_island(grid, visitedLand, i, j + 1);
    explore_island(grid, visitedLand, i - 1, j);
    explore_island(grid, visitedLand, i + 1, j);  
};

console.log(islands_count(grid));