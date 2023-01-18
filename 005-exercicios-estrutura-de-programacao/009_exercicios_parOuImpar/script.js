let cont = 0

console.log(`COM WHILE!`);
while(cont <= 50){

    if(cont % 2 == 0){
        console.log(`O numero ${cont} ... é par.`);
    } else {
        console.log(`O numero ${cont} ... é ímpar.`);
    }
    cont++;
}



console.log(`COM FOR!`);
for(let i = 0; i <= 50; i++){

    if(i % 2 == 0){
        console.log(`O numero ${i} ... é par.`);
    } else {
        console.log(`O numero ${i} ... é ímpar.`);
    }
}