function verificarPalindromo(palavra) {
    const palavraLimpa = palavra.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    return palavraLimpa === palavraInvertida;
}

const palavra = prompt('Informe uma palavra para verificar se é um palíndromo:');
const resultado = verificarPalindromo(palavra);

console.log(`A palavra "${palavra}" ${resultado ? 'é' : 'não é'} um palíndromo.`);
