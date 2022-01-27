/*
2D grid, you are a traveler
start from top-left
end goal is reach to bottom-right corner
* you can move right or down

how many ways can you travel on a grid with dimensions(m * n)

example
gridTraveler(2, 3) row, column
right-right-down
right-down-right
down-right-right
3 ways

gridTraveler(1, 1) -> 1 => in and out

//if one of the dimension is 0 then nowhere to go.
gridTraveler(1, 0) -> 0
gridTraveler(0, 1) -> 0
gridTraveler(8, 0) -> 0
gridTraveler(0, 0) -> 0
*/



//O(2 ^ (n + m))
//O(n + m)
const gridTraveler = (rowCount, columnCount) => {
    if (rowCount == 1 && columnCount == 1) return 1;
    if (rowCount == 0 || columnCount == 0) return 0;
    return gridTraveler(rowCount - 1, columnCount) + gridTraveler(rowCount, columnCount - 1);
}

//console.log(gridTraveler(1, 1));
//console.log(gridTraveler(2, 3));
//console.log(gridTraveler(3, 2));
//console.log(gridTraveler(3, 3));
//console.log(gridTraveler(18, 18)); //not enough memory



//gridTraveler(a,b) = gridTraveler(b, a)
//O(n * m) time
//O(n + m) space
const gridTravelerDp = (rowCount, columnCount, memo = {}) => {
    //are the args in the memo
    const key = rowCount + ',' + columnCount;
    if (key in memo) return memo[key];

    if (rowCount == 1 && columnCount == 1) return 1;
    if (rowCount == 0 || columnCount == 0) return 0;

    memo[key] = gridTravelerDp(rowCount - 1, columnCount, memo) + gridTravelerDp(rowCount, columnCount - 1, memo);
    return memo[key];
}


//console.log(gridTravelerDp(1, 1));
//console.log(gridTravelerDp(2, 3));
//console.log(gridTravelerDp(3, 2));
//console.log(gridTravelerDp(3, 3));
//console.log(gridTravelerDp(18, 18));

// O(mn), O(mn)
const gridTravelerTabulation = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) {
                table[i][j + 1] += current;
            }
            if (i + 1 <= m) {
                table[i + 1][j] += current;
            }
        }
    }

    return table[m][n];
}

console.log(gridTravelerTabulation(1, 1));
console.log(gridTravelerTabulation(2, 3));
console.log(gridTravelerTabulation(3, 2));
console.log(gridTravelerTabulation(3, 3));
console.log(gridTravelerTabulation(18, 18));
