/*

Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings

The function should return a boolean indicating whether or not the target can be constructed by concatanating elements 
of the wordBank array.

You may reuse elements of wordbank as many times as needed.

*/

//m = target.length
//n = wordBank.length
// O (n ^ m * m) //second m comes from slice
// O (m * m) //space
const canConstruct = (target, wordBank) => {

    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank)) {
                return true;
            }
        }
    }

    return false;

};


//console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
//console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
//console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
//console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));


// O (n * m ^ 2)
// O (m * m)
const canConstructDp = (target, wordBank, memo = {}) => {

    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstructDp(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;

};


//console.log(canConstructDp("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
//console.log(canConstructDp("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
//console.log(canConstructDp("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
//console.log(canConstructDp("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));



const canConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
}

console.log(canConstructTabulation("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstructTabulation("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstructTabulation("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));