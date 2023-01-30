function soma (a, b){
    if(a === undefined || b === undefined){
        console.log("Esta função precisa ter os dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(3));
console.log(soma(2, 2));

function saudacao(nome, idade){
    if(idade === undefined){
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + " você tem " + idade + " anos.");
    }
}

saudacao("Hugo", 30);

saudacao("Hugo Brito");