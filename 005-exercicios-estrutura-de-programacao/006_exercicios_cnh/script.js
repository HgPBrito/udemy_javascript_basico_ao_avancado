let idade = 19;
let temCNH = false;


if(idade >= 18 && temCNH) {
    console.log('Você pode continuar a viagem!');
} else if(idade >= 18 && !temCNH) {
    console.log('Você precisa ter CNH, isso é uma grande infração!');
} else {
    console.log('Você não pode dirigir!');
}