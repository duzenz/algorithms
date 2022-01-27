/*

Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

bestSum(7, [5, 3, 4, 7]) -> [7]
bestSum(8, [2, 3, 5]) -> [3, 5]

Optimization Problem
*/

//brute force solution
//m = targetSum
//n = numbers array length

//O (n ^ m * m) time
//O (m * m) //space
const bestSum = (targetSum, numbers) => {

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};


//console.log(bestSum(7, [5, 3, 4, 7]));
//console.log(bestSum(8, [2, 3, 5]));
//console.log(bestSum(8, [1, 4, 5]));
//console.log(bestSum(100, [1, 2, 5, 25]));


//time : O(m ^ 2 * n)
//space : O(m ^ 2)
const bestSumDp = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumDp(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

// console.log(bestSumDp(7, [5, 3, 4, 7]));
// console.log(bestSumDp(8, [2, 3, 5]));
// console.log(bestSumDp(8, [1, 4, 5]));
// console.log(bestSumDp(100, [1, 2, 5, 25]));


const bestSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }

            }
        }
    }

    return table[targetSum];

}

console.log(bestSumTabulation(7, [5, 3, 4, 7]));
console.log(bestSumTabulation(8, [2, 3, 5]));
console.log(bestSumTabulation(8, [1, 4, 5]));
console.log(bestSumTabulation(100, [1, 2, 5, 25]));