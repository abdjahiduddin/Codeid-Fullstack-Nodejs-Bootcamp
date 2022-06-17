function showPrimeNumber(n) {
  const primeNumber = [];
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      primeNumber.push(i);
    }
  }
  return primeNumber;
}

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */
