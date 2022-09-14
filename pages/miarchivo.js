
class Usuario_newsletter {
    constructor (nombre, apellido, email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}
//newsletter
let form = document.getElementById ("formulario");
var user = []
    form.addEventListener ("submit", function(e){
        e.preventDefault ();
        let ingreso_usuario = document.getElementById ("nombre_usuario");
        let ingreso_apellido_usuario = document.getElementById ("apellido_usuario")
        let ingreso_email = document.getElementById ("email_usuario")
        let mensaje= document.getElementById ("mensaje")
        if ((ingreso_usuario.value !== "") && (ingreso_apellido_usuario.value !== "") && (ingreso_email.value !== "")){
            mensaje.innerHTML = "BIENVENIDO A NUESTRA COMUNIDAD, YA ESTAS REGISTRADO!"
            mensaje.style.color = "blue"
            let nuevo_usuario = new Usuario_newsletter (ingreso_usuario.value, ingreso_apellido_usuario.value, ingreso_email.value)
            user.push(nuevo_usuario)
            console.log (nuevo_usuario)
            console.log(user);

            let arreglo_json = JSON.stringify (user)
            localStorage.setItem ("arr_usuarios", arreglo_json)
            let recupero_arr = localStorage.getItem(user)
            recupero_arr = JSON.parse (recupero_arr)
        }
        else{
            mensaje.innerHTML = "ERROR, POR FAVOR COMPLETÁ TODOS LOS CAMPOS"
            mensaje.style.color ="red"
        }
            console.log ("el nombre del usuario es:", ingreso_usuario.value)
            console.log ("el apellido del usuario es:", ingreso_apellido_usuario.value)
            console.log ("el email del usuario es:", ingreso_email.value)

    })

//carrito
let carrito = [];

let btn_compra = document.querySelectorAll(".boton_compra")

for (let boton of btn_compra){
    boton.addEventListener ("click", agregar_al_carrito)
}

function agregar_al_carrito (e){
    
    let hijo = e.target
    let padre = hijo.parentNode
    let abuelo = padre.parentNode

    let nombre_producto = padre.querySelector("h5").textContent
    console.log(nombre_producto)

    let precio_producto = padre.querySelector("span").textContent
    console.log(precio_producto)

    let img_producto = abuelo.querySelector("img").src
    console.log (img_producto)

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    }

    carrito.push(producto)
    console.log(carrito)

    let arreglo_json = JSON.stringify (carrito)
    localStorage.setItem ("carrito", arreglo_json)

    producto_carrito(producto);
}

function producto_carrito (producto){
    let fila = document.createElement ("tr")
    fila.innerHTML =`<td><img class= "img_carrito"src="${producto.img}"></td>
                    <td>${producto.nombre}</td>
                    <td><select><option>1</option><option>2</option><option>3</option></select></td>
                    <td>${producto.precio}</td>
                    <td><button class="btn-danger borrar_elemento">Borrar</button></td>`
    
    let tabla = document.getElementById("tbody")
    tabla.append(fila)

    let botones_borrar = document.querySelectorAll(".borrar_elemento")

    for (let boton of botones_borrar){
    boton.addEventListener ("click", borrar_del_carrito)
    }
}

function borrar_del_carrito(e){

    let abuelo = e.target.parentNode.parentNode
    abuelo.remove()
}

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

