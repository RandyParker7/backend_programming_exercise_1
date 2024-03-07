function bilanganPrima(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if(n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0|| n % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

console.log("Bilangan prima dari 1-1000:");
for (let i = 1; i <= 1000; i++) {
    if (bilanganPrima(i)) {
        console.log(i);
}
}