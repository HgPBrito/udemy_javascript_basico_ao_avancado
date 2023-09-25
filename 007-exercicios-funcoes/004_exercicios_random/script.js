function randomNumberLimit(numberLimit) {

    return Math.floor(Math.random() * (numberLimit + 1));
}

console.log(randomNumberLimit(20));