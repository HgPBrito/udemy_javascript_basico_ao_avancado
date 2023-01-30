function multiplicaTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicaTresNumeros(2, 3, 4));

const multTresNum = multiplicaTresNumeros(5, 4, 8);

console.log(`O valor de multTresNum é: ${multTresNum}`);

function permitidoDirigir(idade, cnh) {
    if(idade >= 18 && cnh){
        console.log('Você pode continuar a viagem!');
    } else {
        console.log('Você não pode dirigir, isso é uma grande infração!');
    }
}

console.log(permitidoDirigir(19, true));
console.log(permitidoDirigir(25, false));
console.log(permitidoDirigir(44, 0));
console.log(permitidoDirigir(16, 1));