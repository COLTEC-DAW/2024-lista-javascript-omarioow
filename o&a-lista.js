
function toList(array) {
    if (array.length === 0) {
        return null;
    }
    return {
        value: array[0],
        rest: toList(array.slice(1))
    };
}

// Exemplos de uso
const list = toList([10, 20, 30]);
console.log(JSON.stringify(list)); 
