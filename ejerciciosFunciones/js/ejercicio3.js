function repetirCaracteres (n, caracteres){
    if (Number.isFinite(n) && n > 0) {
        return caracteres.repeat(n);
    }
    else{
        return "el número tiene que ser un entero positivo."
    }

}
    console.log(repetirCaracteres(3, "t"));
    console.log(repetirCaracteres(9, "f"));
    console.log(repetirCaracteres(3, "x"));