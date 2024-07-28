function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

// Exemplos de uso
console.log(reverseArray([3, 2, 1]));
console.log(reverseArray(['a', 'b', 'c'])); 
