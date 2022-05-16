let nome = 'Hugo';
for(let i = 0; i < 10; i + 1) {   

    if(i == 3) {
        nome = 'João';
    }
    if(i == 5 && nome == 'João') {
        console.log('O nome é João no 5');
        break;
    }

    console.log(i);
}