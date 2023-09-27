function passandoVariavel(variavel) {
    console.log(`o dado que você passou ${variavel} é um dado do tipo ` + typeof(variavel) + `.`);
}

function verificaTipoDeDado(dado) {
    if(typeof(dado) === 'string') {
        console.log(`o dado que você passou ${variavel} é um dado do tipo string.`);
    } else if(typeof(dado) === 'number') {
        console.log(`o dado que você passou ${variavel} é um dado do tipo number.`);
    } else if(typeof(dado) === 'boolean') {
        console.log(`o dado que você passou ${variavel} é um dado do tipo boolean.`);
    } else {
        console.log(`o dado que você passou ${variavel} é um dado de um tipo diferente do esperado.`);
    }
}

passandoVariavel(30);
passandoVariavel('texto');
passandoVariavel(true);
passandoVariavel(56);

verificaTipoDeDado(30);
verificaTipoDeDado('texto');
verificaTipoDeDado(true);
verificaTipoDeDado(56);