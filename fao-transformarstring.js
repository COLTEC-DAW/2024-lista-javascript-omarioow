function transformaString(str, transforma) {
    return str.split('').map(transforma).join('');
}

const vogalAlta = char => 'aeiouAEIOU'.includes(char) ? char.toUpperCase() : char;
const consoanteAlta = char => 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.includes(char) ? char.toUpperCase() : char;
const vogalBaixo = char => 'aeiouAEIOU'.includes(char) ? char.toLowerCase() : char;
const consoanteBaixo = char => 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.includes(char) ? char.toLowerCase() : char;

console.log(transformaString('Hello World', vogalAlta));
console.log(transformaString('Hello World', consoanteAlta)); 
console.log(transformaString('Hello World', vogalBaixo)); 
console.log(transformaString('Hello World', consoanteBaixo)); 
