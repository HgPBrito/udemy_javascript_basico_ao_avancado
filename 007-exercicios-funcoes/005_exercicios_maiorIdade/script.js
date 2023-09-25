function podeEntrar(idade) {
    if(idade >= 18) {
        console.log(`Sua idade é ${idade} anos, você pode entrar na Auto Escola!`);
    } else {
        console.log(`Sua idade é ${idade} anos, você não pode entrar na Auto Escola!`);
    }
}

podeEntrar(30);
podeEntrar(15);
podeEntrar(8);
podeEntrar(56);