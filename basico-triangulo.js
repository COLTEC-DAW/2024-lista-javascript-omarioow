function desenharTriangulo(linhas) {
    for (let i = 2; i <= linhas + 1; i++) {
        console.log('#'.repeat(i));
    }
}

const quantidadeDeLinhas = parseInt(prompt('Informe a quantidade de linhas:'));
desenharTriangulo(quantidadeDeLinhas);
