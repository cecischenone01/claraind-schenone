var carrito = []
var select_pago = document.getElementById('pago');
var tarjeta_select = document.getElementById('tarjeta');
var formulario_pago = document.getElementById('checkout');
var carritoDiv = document.getElementById('carrito')
var contenedor_carrito = document.getElementById("tbody");
var totalOrden = document.getElementById('total');
var contenedor_carrito = document.getElementById("tbody");
var precioTotal = document.getElementById('total');
var total_carrito_lateral = document.getElementById ('total_carrito_lat')
var boton_vaciar = document.getElementById('vaciar_carrito');
let boton_carrito = document.getElementById('abrirCarrito');

document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
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
        total_carrito_lateral.innerHTML = `<span>El total de la orden es $${precioFinal} </span>`
        })
        boton_carrito.classList.remove('disabled');
    
    }
    
    if(!localStorage.getItem('carrito')) {
        boton_carrito.classList.add('disabled');
    }
})

select_pago.addEventListener('change', function(){
    if(select_pago.value === 'efectivo'){
        tarjeta_select.style.display = 'none'
    }
    if(select_pago.value === 'debito' || select_pago.value === 'credito'){
        tarjeta_select.style.display = 'block'
    }
})

function volver_home(){
    window.location.href = 'http://127.0.0.1:5500/index.html'
    localStorage.removeItem('carrito')

}

formulario_pago.addEventListener('submit', function(e){
    e.preventDefault()
    Swal.fire({
        icon: "success",
        text: `Compra exitosa!`,
        width: '50rem',
        background: "#ffffff",
        confirmButtonColor: "#9b9b9b",
        confirmButtonText:
        '<span onclick="volver_home()">OK!</span>',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
})
