/*

Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings

number of ways

You may reuse elements of wordbank as many times as needed.

*/

const countConstruct = (target, wordBank) => {

    if (target === "") return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numberOfWays = countConstruct(target.slice(word.length), wordBank);
            totalCount += numberOfWays;
        }
    }

    return totalCount;

};

/*
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
*/

const countConstructDp = (target, wordBank, memo = {}) => {

    if (target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numberOfWays = countConstructDp(target.slice(word.length), wordBank, memo);
            totalCount += numberOfWays;
        }
    }

    memo[target] = totalCount;
    return totalCount;

};


// console.log(countConstructDp("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(countConstructDp("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(countConstructDp("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// console.log(countConstructDp("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
// console.log(countConstructDp("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));


const countConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    return table[target.length];

}

console.log(countConstructTabulation("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstructTabulation("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstructTabulation("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstructTabulation("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));