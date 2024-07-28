function verifyNumber(num, test) {
    return test(num);
}

const ehImpar = num => num % 2 !== 0;
const ehPrimo = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.log(verifyNumber(7, ehImpar)); 
console.log(verifyNumber(8, ehImpar)); 
console.log(verifyNumber(7, ehPrimo)); 
console.log(verifyNumber(8, ehPrimo)); 