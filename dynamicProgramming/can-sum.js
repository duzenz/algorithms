/*
write a function canSum(targetSum, numbers) that takes ina targetSum and an array of numbers as arguments.

the function should return a boolean indicating whether or not it  is possible to generate the targetSum using numbers from the array

You may use an element of the array as many times as needed.

You may use that all input numbers are nonnegative.

canSum(7, [5, 3, 4, 7]) -> true (3,4), (7)
canSum(7, [2, 4]) -> false

DECISON PROBLEM

*/

//brute force solution
//m = targetSum
//n = array length
//O (n ^ m) time
//O (m) //space
const canSum = (targetSum, numbers) => {

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }

    return false;
};


//console.log(canSum(7, [2, 3]));
//console.log(canSum(7, [5, 3, 4, 7]));
//console.log(canSum(7, [2, 4]));
//console.log(canSum(8, [2, 3, 5]));
//console.log(canSum(300, [7, 14])); //runtime problem

const canSumDp = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSumDp(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};


//console.log(canSumDp(300, [7, 14]));


const canSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
};

console.log(canSumTabulation(7, [2, 3]));
console.log(canSumTabulation(7, [5, 3, 4, 7]));
console.log(canSumTabulation(7, [2, 4]));
console.log(canSumTabulation(8, [2, 3, 5]));
console.log(canSumTabulation(300, [7, 14]));
