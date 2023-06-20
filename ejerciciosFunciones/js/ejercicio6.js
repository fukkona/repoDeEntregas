function booleanArray(numeros1, numeros2) {
    let newNum = [].concat(numeros1, numeros2);
    return newNum.length >= 10;
}

console.log(booleanArray([1, 2 , 3],[4, 5, 6]));
console.log(booleanArray([1,2,3,4,5],[1,2,3,4,5]))