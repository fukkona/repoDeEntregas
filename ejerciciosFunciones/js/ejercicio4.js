function sumaArreglo(arreglo) {
    let longitud = arreglo.length;
    let suma = 0;
  
    for (let i = 0; i < longitud; i++) {
      suma += arreglo[i];
    }
  
    return longitud + suma;
  }
  console.log(sumaArreglo([3, 5, 1, 6, 2]));