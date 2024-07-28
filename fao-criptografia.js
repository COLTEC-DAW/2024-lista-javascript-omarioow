function Cifradecesar(str, shift) {
    return str.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        }
        return char; 
    }).join('');
}

console.log(CifradeCesar('Hello World', 3)); // a saída será: 'Khoor Zruog'
console.log(CifradeCesar('Khoor Zruog', -3)); // a saída será: 'Hello World'
