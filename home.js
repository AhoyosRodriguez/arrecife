const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoswimsuits = document.createElement("div");
    nuevoswimsuits.classList = "tarjeta-producto"
    nuevoswimsuits.innerHTML = `
    <img src="./img/imagenes/${producto.id}.jpg" alt="swimsuits 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoswimsuits);
    nuevoswimsuits.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(swimsuits);