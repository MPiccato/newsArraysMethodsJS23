const numbers = [11, 5, 7, 23, 44, 12, 10];
console.log('Desordenado: ', numbers)
//const sortedNumbers = numbers.sort((a, b) => a - b)
//console.log('Ordenado: ', numbers)

// No quiero modificar el arreglo original

const numbersOrdenaados = numbers.toSorted((a, b) => a - b);
console.log(numbersOrdenaados)
console.log(numbers)