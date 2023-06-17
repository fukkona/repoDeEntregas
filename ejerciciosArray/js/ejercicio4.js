function sumaLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros = [3, 4, 3, 5, 1];
  let resultado = sumaLista(numeros);
  console.log(resultado);
  