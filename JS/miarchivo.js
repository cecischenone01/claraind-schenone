//CARDS DE PRODUCTOS CREADA DESDE JS
let lista_productos=[];

  fetch("../JS/productos.json")
  .then(response => response.json())
  .then(data=> card_producto(data))

function card_producto(producto) {
  lista_productos.push(producto)
  let grid = document.getElementById("products");
  let div = document.createElement("div");
  div.classList.add("grid_productos")
  producto.forEach(element => {
    div.innerHTML += `<div class="card style_card" style="width: 18rem;" id="${element.nombre}">
                      <img src="${element.imagen}" class="card-img-top img_card" alt="">
                      <div class="card-body">
                      <h5 class="card-title titulo_card">${element.nombre}</h5>
                      <span class="precio">$${element.precio}</span> <br>
                      <a href="#" class="btn btn-dark boton_agregar boton_comprar" onclick="agregar_al_carrito('${element.nombre}', ${element.precio}, ${element.cantidad},'${element.imagen}')">Agregar al carrito</a>
                      </div>
                      </div>`;
  });
  grid.append(div);
}
document.addEventListener("DOMContentLoaded", function () {
  lista_productos.map((producto) => card_producto(producto));
});

//CARRITO
let carrito = [];

function agregar_al_carrito(nombre, precio, cantidad, imagen) {
  estaEnElCarrito = carrito.find(producto => producto.nombre === nombre)
  let producto = {nombre: nombre, precio: precio, cantidad: cantidad, imagen: imagen}
  if(estaEnElCarrito){
    let productoRepetido = carrito.find(producto => producto.nombre === nombre);
    let index = carrito.indexOf(productoRepetido);
    let suma_cantidad = document.querySelectorAll(".boton_agregar");
    for (let click of suma_cantidad ){
      click.addEventListener("click", sumar_cantidad);
    }
    function sumar_cantidad(){
      console.log("hola")
    }
    carrito.splice(index);
    carrito.push(producto);
  }
  else{
    carrito.push(producto);
  }

  console.log(carrito);

  let arreglo_json = JSON.stringify(carrito);
  localStorage.setItem("carrito", arreglo_json);
  mostrarCarritoLateral()
}

//CARRITO LATERAL DESDE JS
function borrar_del_carrito(e) {
  let abuelo = e.target.parentNode.parentNode;
  abuelo.remove();
}

function mostrarCarritoLateral() {
  let tabla = document.getElementById("tbody");
  let fila = document.createElement("tr");

  carrito.map(producto => {
    fila.innerHTML = `<td><img class="img_carrito" src="${producto.imagen}" ></td>
    <td>${producto.nombre}</td>
    <td>${producto.cantidad}</td>
    <td>${producto.precio}</td>
    <td><button class="btn-danger borrar_elemento">Borrar</button></td>`
  })
  tabla.append(fila);

//BOTON BORRAR
  let botones_borrar = document.querySelectorAll(".borrar_elemento");
  
  for (let boton of botones_borrar) {
    boton.addEventListener("click", borrar_del_carrito);
  }
}
//FIN COMPRA
let seccion_btn_compra = document.getElementById ("cuerpo_carrito")
let btn_fin_compra = document.createElement ("div")
btn_fin_compra.innerHTML = `<button onclick= "finalizar_compra()" class="btn-danger boton_comprar">Comprar</button>`

seccion_btn_compra.append(btn_fin_compra)

function finalizar_compra(){
  //BOTON COMPRAR
    let div_boton = document.querySelectorAll(".boton_comprar")
  
    for (let boton of div_boton) {
      boton.addEventListener("click", fin_compra);
    }
}

function fin_compra(e){
  let tataraabuelo = e.target.parentNode.parentNode;
  tataraabuelo.remove();
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
      text: "Bienvenido/a a nuestra comunidad, ya estas registrado.",
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
      text: "Error al loguearse, por favor completa todos los campos.",
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
