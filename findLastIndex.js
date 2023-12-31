const numbers = [10, 35, 55, 70, 80, 100, 20, 30];

const foundIndex = numbers.findIndex(x => x === 70);
console.log(foundIndex)

// nuevo método para buscar de derecha a izquierda
const foundLastIndex = numbers.findLastIndex(x => {
    console.log("x...", x)
    return x === 30
})
console.log(foundLastIndex)