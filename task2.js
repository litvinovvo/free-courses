const args = process.argv;

function fib(n) {
    const nAbs = Math.abs(n);
    if (nAbs < 2) return nAbs;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= nAbs; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return n < 0 ? b*(Math.pow(-1, n + 1)) : b;
}
if (args[2])process.stdout.write(fib(parseInt(args[2])).toString());
