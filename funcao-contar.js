function countChars(frase, c) {
    let count = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === c) {
            count++;
        }
    }
    return count;
}

// Exemplo de uso
console.log(countChars("toronto", "o"));
console.log(countChars("amanda almeida", "a")); 