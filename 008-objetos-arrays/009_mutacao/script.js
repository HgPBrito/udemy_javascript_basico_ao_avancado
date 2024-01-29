let pessoa1 = {
    nome: 'Hugo'
}

let pessoa2 = pessoa1;

let pessoa3 = {
    nome: 'Hugo'
};

console.log(pessoa1 == pessoa2);
console.log(pessoa3 == pessoa1);
console.log(pessoa3 == pessoa2);

pessoa2.nome = 'Roberto';

console.log(pessoa1.nome);

pessoa1.nome = 'João';

console.log(pessoa2.nome);