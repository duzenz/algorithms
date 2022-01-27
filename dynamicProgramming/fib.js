const fib = (n) => {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}


//implement memoization
//for js it is object java hashmaps
//time coplexity O(n)
//space coplexity O(n)
const fibDynamic = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibDynamic(n - 1, memo) + fibDynamic(n - 2, memo);
    return memo[n];
}
//console.log(fibDynamic(5));
//console.log(fibDynamic(8));
//console.log(fibDynamic(4));
//console.log(fibDynamic(50));


/*
tabulation is about building a table
O(n)

*/
const fibTabulation = (n) => {
    const table = Array(n + 1).fill(0);
    //console.log(table);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
}

console.log(fibTabulation(6));
console.log(fibTabulation(7));
console.log(fibTabulation(8));
console.log(fibTabulation(50));



/*
5 4 3 2 1
time coplexity O(n)
space coplexity O(n)
*/
const foo = (n) => {
    if (n <= 1) return; //base case
    foo(n - 1);
}


/*
5 3 1
time coplexity O(n)
space coplexity O(n)
*/
const bar = (n) => {
    if (n <= 1) return;
    bar(n - 2);
}

/*
time coplexity O(2^n)
space coplexity O(n)
*/
const dib = (n) => {
    if (n <= 1) return;
    dib(n - 1);
    dib(n - 1);
}


