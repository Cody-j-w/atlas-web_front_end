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

const t0 = performance.now();
for (x = 0; x < 100; x++) {
    countPrimeNumbers();
}
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers 100 times was ${t1 - t0} milliseconds!`);