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

const t100 = performance.now();
countPrimeNumbers();
const t101 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t101 - t100} milliseconds!`);