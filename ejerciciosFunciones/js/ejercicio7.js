function multiplicacionArray (array1, array2) {
   let newArray = [].concat(array1, array2);
   let resultado = [];

    for (let i = 0; i < newArray.length; i++) {
        resultado.push(newArray[i] * 2);
        
    }
    return resultado;
}
console.log(multiplicacionArray([3, 4, 1],[4, 1, 5]));