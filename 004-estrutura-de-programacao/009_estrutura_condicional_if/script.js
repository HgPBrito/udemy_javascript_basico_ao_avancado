let idade = 28;

if(idade < 18) {
    console.log('Idade menor que 18 anos!');
}

if(idade == 18) {
    console.log('Idade igual a 18 anos!');
}

if(idade > 18) {
    console.log('Idade maior que 18 anos!');
}

let nome = 'Hugo';

if(nome == 'Hugo' && idade > 18) {
    console.log('Liberado!');
}

let passaporte = false
if((nome == 'Hugo' && idade > 18) || passaporte == true) {
    console.log('Liberado!');
}