module.exports = function makeExchange(currency) {
    let money = new Money();

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else if (currency < 0) {
        return money;
    }
    let cash = currency;

    let H = Math.floor(cash/50);
    if (H != 0) {
        money.H = H;
        cash = cash % 50;
    }

    let Q = Math.floor(cash/25);
    if (Q != 0) {
        money.Q = Q;
        cash = cash % 25;
    }

    let D = Math.floor(cash/10);
    if (D != 0) {
        money.D = D;
        cash = cash % 10;
    }

    let N = Math.floor(cash/5);
    if (N != 0) {
        money.N = N;
        cash = cash % 5;
    }

    if (cash != 0) {
        money.P = cash;
    }

    return money;
}

function Money() {
    let H;
    let Q;
    let D;
    let N;
    let P;
    return this;
}
