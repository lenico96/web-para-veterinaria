// menu bars
document.getElementById("icon_menu").addEventListener("click", mostrar_menu)

function mostrar_menu() {
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}


//cards productos destacados

const contenedorProducto = document.getElementById('contenedor-producto')
const buttons = document.getElementsByClassName("boton-agregar");

const mostrarProductos = () => 
{
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img class="imgprod" src=${producto.img} alt= "">
    <h2>${producto.nombre}</h2>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProducto.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)     

        
        
    })

    
})
}







