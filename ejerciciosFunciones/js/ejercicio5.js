function multiplicarArray(array) {
    let maximo = array[0]
    let minimo = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i];
        }
        if (array[i] > maximo) {
            maximo = array[i]
        }
    }
    return minimo * maximo
}

console.log(multiplicarArray([6, 5, 5, 8, 4, 9]))