function range(min, max, i = 1) {
    const result = [];
    for (let num = min; num <= max; num += i) {
        result.push(num);
    }
    return result;
}
console.log(range(1, 10));         
console.log(range(4, 40, 4));    
