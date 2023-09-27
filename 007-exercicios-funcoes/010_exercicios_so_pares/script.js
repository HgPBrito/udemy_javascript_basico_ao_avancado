function soPar(numero) {

    for(let count = numero; count >= 0; count--) {

        if(count % 2 == 0) {
            console.log(count);
        }
    }
}

soPar(10);
soPar(7);