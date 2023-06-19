function numeroMayor(num1, num2, num3) {
    if(num1 === num2 && num2 === num3) {
        return "los numeros son iguales"
    } else {
        return Math.max (num1, num2, num3)
    }

}
 
console.log(numeroMayor(1, 4, 8));
console.log(numeroMayor(7, 7, 7));
