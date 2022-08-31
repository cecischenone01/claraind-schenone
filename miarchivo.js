class Producto {
    constructor (nombre, color, precio){
        this.nombre = nombre
        this.color = color
        this.precio = precio
    } 
}

class Usuario_newsletter {
    constructor (nombre, apellido, email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}
// newsletter
let ingreso_usuario = document.getElementById ("nombre_usuario");
let ingreso_apellido_usuario = document.getElementById ("apellido_usuario")
let ingreso_email = document.getElementById ("email_usuario") 

function saludar (){
    let mensaje= document.getElementById("mensaje");
    if ((ingreso_usuario.value != "") && (ingreso_apellido_usuario.value != "") && (ingreso_email.value != "")){
        mensaje.innerHTML = `Muchas gracias ${ingreso_usuario.value} ya estas registrado.`
        mensaje.style.color = "blue"
        mensaje.style.fontSize ="20px"
    }
    else {
        let mensaje= document.getElementById("mensaje");
        mensaje.innerHTML = `Error al loguearse, por favor complete todos los campos`
        mensaje.style.color = "red"
        mensaje.style.fontSize ="20px"
    }
    console.log("nuevo usuario")
    console.log("nombre: ",ingreso_usuario.value,"apellido:", ingreso_apellido_usuario.value, "email:", ingreso_email.value);
}

let nuevo_usuario = new Usuario_newsletter (ingreso_usuario.value, ingreso_apellido_usuario.value, ingreso_email.value);
console.log(nuevo_usuario);

const arr_usuarios = [];
arr_usuarios.push(nuevo_usuario)
console.log(arr_usuarios)
//ingreso producto y cuotas

let ingreso_producto = prompt("ingrese uno de nuestros productos");
let ingreso_cuota = prompt("ingrese la cantidad de cuotas:");

let campera = new Producto ("campera", "blanca", 20000);
let jean = new Producto ( "jean", "azul", 8000);
let mochila = new Producto ("mochila", "gris", 5000);
let sweter = new Producto ("sweter", "blanco", 3000);

const arr_productos = [];
arr_productos.push (campera);
arr_productos.push (jean);
arr_productos.push (mochila);
arr_productos.push (sweter);


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
cuotas(producto.precio, ingreso_cuota, producto.nombre);
