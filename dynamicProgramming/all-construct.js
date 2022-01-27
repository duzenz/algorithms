/*

Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings

all of te ways 

You may reuse elements of wordbank as many times as needed.

*/

const allConstruct = (target, wordBank) => {

    if (target === "") return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]); //her elemanı dolaşı subarraylere yeni bir eleman ekleme
            result.push(...targetWays);
        }
    }
    return result;
};

// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
//console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));

const allConstructDp = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstructDp(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]); //her elemanı dolaşı subarraylere yeni bir eleman ekleme
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
};


// console.log(allConstructDp("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(allConstructDp("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstructDp("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// console.log(allConstructDp("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));

/*

brute force
O(n^m)
O(m)

dp way



*/


const allConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }

    return table[target.length];

}

console.log(allConstructTabulation("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstructTabulation("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstructTabulation("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));