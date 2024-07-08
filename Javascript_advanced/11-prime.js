function countPrimeNumbers() {
    let prime = true;
    let primes = 0;
    for (i = 2; i <= 100; i++) {
        for (j = 2; j <= i; j++) {
            if (i%j == 0) {
                prime = false;
            }
        }
        if (prime === true) {
            primes +=1;
        }
    }
    return primes;
}

setTimeout(() => {
    const t110 = performance.now();
    countPrimeNumbers();
    const t111 = performance.now();
    console.log(`Execution time of printing countPrimeNumbers was ${t111 - t110} milliseconds!`);
}, 0);