const numbers = [10, 35, 55, 70, 80, 100, 20, 30];

//Encontrar un number
const foundNumber = numbers.find(x => x === 100)
console.log(foundNumber)

const foundNumber2 = numbers.find(x => {
    console.log("x", x)
    return x === 80;
});
console.log(foundNumber2);

// Con findLast recorre el arreglo a la inversa

const foundNumberLast = numbers.findLast(x => {
    console.log("x...", x);
    return x === 80;
})