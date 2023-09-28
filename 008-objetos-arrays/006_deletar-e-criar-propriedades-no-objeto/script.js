let pessoa = {
    nome: 'Hugo',
    idade: 29,
    profissao: "Desenvolvedor"
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true;

console.log(pessoa.casado);