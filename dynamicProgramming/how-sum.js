/*
write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing ant combination of elements that add up to exactly the targetSum.
If there is no combination that adds up to the targetSum then return null;

if there are multiple combinations possible you may return any single one.

howSum(7, [5,3,4,7]]) -> [3, 4], [7]
howSum(8, [2,3,5]]) -> [2, 2, 2, 2], [3, 5]
howSum(0, [1, 2, 3]]) -> []

Combinatoric Problem
*/

// brute force method
// m = target sum
// n = numbers.length
// time : O(n^m * m) //because of arrat creation  line 28
// space: O(m)
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [...remainderResult, num];
        }
    }

    return null;
}

//console.log(howSum(7, [2, 3]));
//console.log(howSum(7, [5, 3, 4, 7]));
//console.log(howSum(7, [2, 4]));
//console.log(howSum(8, [2, 3, 5]));
//console.log(howSum(300, [7, 14])); 

// time : O(n * m * m) //because of arrat creation  line 28
// space: O(m ^ 2)
const howSumDp = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSumDp(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
}

//console.log(howSumDp(7, [2, 3]));
//console.log(howSumDp(7, [5, 3, 4, 7]));
//console.log(howSumDp(7, [2, 4]));
//console.log(howSumDp(8, [2, 3, 5]));
//console.log(howSumDp(300, [7, 14])); 



const howSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num];       
            }
        }
    }

    return table[targetSum];
}

console.log(howSumTabulation(7, [2, 3]));
console.log(howSumTabulation(7, [5, 3, 4, 7]));
console.log(howSumTabulation(7, [2, 4]));
console.log(howSumTabulation(8, [2, 3, 5]));
console.log(howSumTabulation(300, [7, 14])); 