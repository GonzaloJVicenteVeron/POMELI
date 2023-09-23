// Navbar
const navbar = document.querySelector ("#navbar")
const abrir = document.querySelector ("#abrir")
const cerrar = document.querySelector ("#cerrar")

abrir.addEventListener ("click", () => {

    navbar.classList.add("visible");

});

cerrar.addEventListener ("click", () => {
    navbar.classList.remove ("visible");
});

let botonesAgregar = document.querySelectorAll (".producto-agregar");

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll (".producto-agregar");
    
    botonesAgregar.forEach (boton => {
        boton.addEventListener ("click", agregarAlCarrito);
    });
};

const productosEnCarrito = [];

function agregarAlCarrito (e) {

    const idBoton = e.currentTarget.id;

    const productoAgregado = productos.find (producto => producto.id === idBoton);

    if (productosEnCarrito.some (producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex (producto => producto.id === idBoton);
        productosEnCarrito [index].cantidad++
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push (productoAgregado);
    }
}




