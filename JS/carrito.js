var carrito = []
var carritoDiv = document.getElementById('carrito')
var contenedor_carrito = document.getElementById("tbody");
var boton_terminar = document.getElementById('finalizar_compra');
var totalOrden = document.getElementById('total');
var contenedor_carrito = document.getElementById("tbody");
var precioTotal = document.getElementById('total');
var total_carrito_lateral = document.getElementById ('total_carrito_lat')
var boton_vaciar = document.getElementById('vaciar_carrito');
let boton_carrito = document.getElementById('carrito_button');

const actualizar_carrito = () => {
    contenedor_carrito.innerHTML = ""
    carrito.forEach((producto) => {
      let div = document.createElement("tr")
      div.innerHTML = `<td><img class="img_carrito" src="${producto.imagen}" ></td>
      <td>${producto.nombre}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.precio}</td>
      <td><button onclick="eliminar_del_carrito(${producto.id})" class="btn-danger">Eliminar</button></td>`
  
      contenedor_carrito.appendChild(div)
  
      localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    if(!carrito.length || !carrito){
        boton_carrito.classList.add('disabled');
      }else{
        boton_carrito.classList.remove('disabled');
      }
    const precioFinal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    totalOrden.innerHTML = `<span>El total de la orden es $${precioFinal} </span>`
    total_carrito_lateral.innerHTML = `<span>El total de la orden es $${precioFinal} </span>`
}

const eliminar_del_carrito = (productoId) =>{
    let item = carrito.find((producto) => producto.id === productoId)
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizar_carrito();
    console.log(carrito.length)
    if(carrito.length === 0){
        carrito = []
        localStorage.removeItem('carrito')
    }
    window.location.reload()
}

document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      boton_terminar.style.display = 'block'
      carrito.map((producto) => {
        let div = document.createElement("div");
        div.classList.add('cardContainer');

        div.innerHTML = `<div class="cartCard" id="${producto.id}">
                          <img src="${producto.imagen}" class="cartCardImagen">
                                <h5 class="card-title titulo_card">${producto.nombre}</h5>
                                <span class="precio">$${producto.precio}</span> <br>
                                <span>Cantidad: ${producto.cantidad}</span>
                                <a href="#" id="boton_agregar${producto.id}"class="btn btn-dark boton_comprar" >Eliminar</a>
                          </div>`;
  
        carritoDiv.append(div)
  
        let button = document.getElementById(`boton_agregar${producto.id}`)
        button.addEventListener ('click', ()=>{
        eliminar_del_carrito(producto.id)
        })
        contenedor_carrito.innerHTML = ""
        carrito.forEach((producto) => {
        let div = document.createElement("tr")
        div.innerHTML = `<td><img class="img_carrito" src="${producto.imagen}" ></td>
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td><button onclick="eliminar_del_carrito(${producto.id})" class="btn-danger">Eliminar</button></td>`
    
        contenedor_carrito.appendChild(div)
        const precioFinal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
        precioTotal.innerHTML = `<span>El total de la orden es ${precioFinal} </span>`
        total_carrito_lateral.innerHTML = `<span>El total de la orden es $${precioFinal} </span>`
        })
        boton_carrito.classList.remove('disabled');
    });
    }
    
    if(!localStorage.getItem('carrito')) {
        carritoDiv.innerHTML = `<p>No hay productos para mostrar, anda al inicio y agrega algunos :)</p>`
        boton_terminar.style.display = 'none'
        totalOrden.style.display = 'none'
        boton_carrito.classList.add('disabled');
    }
})
boton_vaciar.addEventListener('click', function(){
    carrito = []
    actualizar_carrito();
  })
boton_terminar.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5500/pages/checkout.html";
})
