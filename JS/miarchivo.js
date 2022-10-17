//CARDS DE PRODUCTOS CREADA DESDE JS
let lista_productos=[];

let contenedor_productos = document.getElementById("products");

let contenedor_carrito = document.getElementById("tbody");

let boton_terminar = document.getElementById("terminar_compra")

let total_carrito_lateral = document.getElementById('total_carrito_lat')

let carrito = [];

let boton_carrito = document.getElementById('carrito_button');

let boton_vaciar = document.getElementById('vaciar_carrito');

document.addEventListener('DOMContentLoaded', () =>{
  if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizar_carrito()
    boton_carrito.classList.remove('disabled');
  }else{
    boton_carrito.classList.add('disabled');
  }
})
boton_vaciar.addEventListener('click', function(){
  carrito = []
  actualizar_carrito();
})

boton_terminar.addEventListener('click', function(){
  window.location.href = "http://127.0.0.1:5500/pages/carrito.html"
})

function mostrar_prods(){
    lista_productos.map((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `<div class="card style_card" style="width: 18rem;" id="${producto.id}">
                        <img src="${producto.imagen}" class="card-img-top img_card" alt="">
                        <div class="card-body">
                        <h5 class="card-title titulo_card">${producto.nombre}</h5>
                        <span class="precio">$${producto.precio}</span> <br>
                        <a href="#" id="boton_agregar${producto.id}"class="btn btn-dark boton_comprar" >Agregar al carrito</a>
                        </div>
                        </div>`;

      contenedor_productos.append(div)

      let button = document.getElementById(`boton_agregar${producto.id}`)
      button.addEventListener ('click', ()=>{
      agregar_al_carrito(producto.id)
      })
      
  });
}

fetch("../JS/productos.json")
  .then(response => response.json())
  .then(data=> {
    data.forEach (data =>{
      lista_productos.push(data)
    })
    console.log(lista_productos)
    mostrar_prods();
  })

//AGREGAR AL CARRITO
let agregar_al_carrito = (productoId) => {

let existe = carrito.some(producto => producto.id === productoId)

if (existe){
  let prod = carrito.map(producto => {
    if(producto.id === productoId){
      producto.cantidad++
    }
  })
} 
else{
  let item = lista_productos.find((producto) => producto.id === productoId)
  carrito.push(item)
  console.log (carrito)
}
actualizar_carrito()

}

let eliminar_del_carrito = (productoId) =>{
  let item = carrito.find((producto) => producto.id === productoId)
  let indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizar_carrito()
  if(carrito.length === 0){
    carrito = []
    localStorage.removeItem('carrito')
  }
}

let actualizar_carrito = () => {
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
  const precioFinal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  console.log(total_carrito_lateral);
  total_carrito_lateral.innerHTML = `<span>El total de la orden es $${precioFinal} </span>`
  if(!carrito.length || !carrito){
    boton_carrito.classList.add('disabled');
  }else{
    boton_carrito.classList.remove('disabled');
  }
}

//newsletter
class Usuario_newsletter {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}

let form = document.getElementById("formulario");
var user = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let ingreso_usuario = document.getElementById("nombre_usuario");
  let ingreso_apellido_usuario = document.getElementById("apellido_usuario");
  let ingreso_email = document.getElementById("email_usuario");
  if (
    ingreso_usuario.value !== "" &&
    ingreso_apellido_usuario.value !== "" &&
    ingreso_email.value !== ""
  ) {
    Swal.fire({
      icon: "success",
      text: `${ingreso_usuario.value} te has subscrito satisfactoriamente!`,
      width: '50rem',
      background: "#ffffff",
      confirmButtonColor: "#9b9b9b",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    let nuevo_usuario = new Usuario_newsletter(
      ingreso_usuario.value,
      ingreso_apellido_usuario.value,
      ingreso_email.value
    );
    user.push(nuevo_usuario);
    console.log(nuevo_usuario);
    console.log(user);

    let arreglo_json = JSON.stringify(user);
    localStorage.setItem("arr_usuarios", arreglo_json);
    let recupero_arr = localStorage.getItem(user);
    recupero_arr = JSON.parse(recupero_arr);
  } else {
    Swal.fire({
      icon: "error",
      text: "Por favor, completá todos los campos",
      width: '50rem',
      background: "#ffffff",
      confirmButtonColor: "#9b9b9b",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  console.log("el nombre del usuario es:", ingreso_usuario.value);
  console.log("el apellido del usuario es:", ingreso_apellido_usuario.value);
  console.log("el email del usuario es:", ingreso_email.value);
});


/*
function precio_con_descuento(producto){
    let descuento = producto.precio * 0.20
    return {nombre: producto.nombre,
            precio: producto.precio - descuento
    }
}
//precios de los productos sin descuento
console.log (arr_productos)
//precio de los productos con el 20% de descuento
let resultado_map = arr_productos.map (precio_con_descuento)
console.log (resultado_map)

//empleo de find para buscar si el ingreso es igual a uno de los productos
const producto = arr_productos.find(producto => producto.nombre === ingreso_producto);

//descuento
function descuento(nombre , precio){
    let precio_descuento = precio * 0.8;
    return console.log(`el precio de ${nombre} con el 20% de descuento es:` , precio_descuento)
}

//precio en cuotas
function cuotas (precio, cuota, nombre){
    if (cuota == 3){
        precio_3_cuotas = precio / cuota;
        return console.log (`el precio en 3 cuotas de ${nombre} de: ${precio_3_cuotas}  cada una.`)
    }

    else if (cuota == 6){
        precio_6_cuotas = precio / cuota;
        return console.log (`el precio en 6 cuotas de ${nombre} de: ${precio_6_cuotas}  cada una.`)
    }

    else if (cuota == 12){
        precio_12_cuotas = precio/ cuota;
        return console.log (`el precio en 12 cuotas de ${nombre} de: ${precio_12_cuotas}  cada una.`)
    }

    else{
        return console.log ("ingrese un numero de cuotas valido.")
    }
}

console.log("el precio de", producto.nombre, "es:", producto.precio);
descuento(producto.nombre, producto.precio)
cuotas(producto.precio, ingreso_cuota, producto.nombre);*/

