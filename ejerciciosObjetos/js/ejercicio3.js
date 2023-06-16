const producto = {
    objeto: "vestido",
    precio: 400,
    descuento: 1.10,
    // la funcion retorna el precio con el descuento aplicado
    neto: function() {
        return this.precio - (this.descuento * this.precio / 100)
    }
}
const precioNeto = producto.neto()
console.log("el valor final del " + producto.objeto + " es " + precioNeto