// 5! = 5 x 4 x 3 x 2 x 1 = 120 cinco fatorial

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) { // começa no número e enquanto ele(c) for maior do que 1 ele(c) vai perdendo 1 até chegar em 1.
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
