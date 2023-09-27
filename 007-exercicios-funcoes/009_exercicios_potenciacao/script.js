function potenciacao(expoente, potencia) {

    let total = expoente ;
    for (let count = 1; count < potencia; count++) {
        total = total * expoente;
    }

    return total;
}

console.log(potenciacao(3, 5));

function potencia(expoente, potencia) {

    return Math.pow(expoente, potencia);
    //return expoente ** potencia;
}

console.log(potencia(2, 2));
console.log(potencia(3, 2));
console.log(potencia(4, 4));