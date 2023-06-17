const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"];

    let numMes = prompt("ingresa un numero de el 0 al 11");
    let numeroMes = parseInt(numMes);
    let nombreMes = meses[numeroMes];

    console.log("el mes es " + nombreMes);