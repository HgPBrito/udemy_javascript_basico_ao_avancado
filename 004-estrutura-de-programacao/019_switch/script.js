let nome = 'Hugo';

switch(nome) {
    case 'Hugo':
        console.log('O Nome passado foi Hugo!');
        break;
    case 'Kathleen':
        console.log('O Nome passado foi Kathleen!');
        break;
    case 'Caio':
        console.log('O Nome passado foi Caio!');
        break;
    case 'Gabriel':
        console.log('O Nome passado foi Gabriel!');
        break;
    default:
        console.log('Esse Nome não faz parte do circulo social!');
        break;
}

if(nome == 'Hugo') {
    console.log('O Nome passado foi Hugo!');
} else if(nome == 'Kathleen') {
    console.log('O Nome passado foi Kathleen!');
} else if(nome == 'Caio') {
    console.log('O Nome passado foi Caio!');
} else if(nome == 'Gabriel') {
    console.log('O Nome passado foi Gabriel!');
} else {
    console.log('Esse Nome não faz parte do circulo social!');
}