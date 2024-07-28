function bubbleSort(array, compare) {
    const arr = [...array]; 
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (compare(arr[i], arr[i + 1]) > 0) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}


const crescente = (a, b) => a - b; 
const decrescente = (a, b) => b - a; 

function FiltrarNum(array, condition) {
    return array.filter(condition);
}

const impar = num => num % 2 !== 0;
const par = num => num % 2 === 0; 

const num = [5, 3, 8, 1, 2, 7, 6];

console.log('Crescente:', bubbleSort(num, crescente)); 

console.log('Decrescente:', bubbleSort(num, decrescente)); 

const numImpar = FiltrarNum(num, impar);
console.log('Ímpares Crescente:', bubbleSort(numImpar, crescente)); 

const numPar = FiltrarNum(num, par);
console.log('Pares Decrescente:', bubbleSort(numPar, decrescente)); 