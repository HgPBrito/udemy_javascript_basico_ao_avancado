function recursao(n) {

    if(n - 1 < 2) {
        console.log("Recursão parou: " + n);
    } else if(n % 2 != 0) {
        console.log("Número impar: " + n);
        recursao(n-1);
    } else {
        console.log("Número par: " + n);
        recursao(n-2);
    }
}

recursao(39);
recursao(10);
recursao(55);


function retornarNumeroPar(n) {
    if(n % 2 == 0) {
        console.log("n agora é par: " + n);
    } else {
        console.log(n);
        retornarNumeroPar(n -1);
    }
}

retornarNumeroPar(33);