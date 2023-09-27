function verificaTamaho(texto) {

    if(texto.length <= 10) {
        console.log('Ta no tamanho esperado o seu texto enviado!');
    } else {
        console.log('Vai ter que diminuir o tamanho do seu texto para enviar!');
    }
}


verificaTamaho('0123456789');
verificaTamaho('teste texto');
verificaTamaho('012345678910');

function checarTamanhoTexto(texto) {

    if(texto.length > 10) {
        console.log('Texto muito longo.');
    } else {
        console.log('Texto dentro do limite.');
    }
}
verificaTamaho('teste');
verificaTamaho('vamos testar se funciona');
verificaTamaho('10-');