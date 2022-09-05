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
        }
        else{
            mensaje.innerHTML = "ERROR, POR FAVOR COMPLETÁ TODOS LOS CAMPOS"
            mensaje.style.color ="red"
        }
            console.log ("el nombre del usuario es:", ingreso_usuario.value)
            console.log ("el apellido del usuario es:", ingreso_apellido_usuario.value)
            console.log ("el email del usuario es:", ingreso_email.value)
    })
//funcion para agregar al carrito
    arr_carrito=[];
    arr_productos =[{nombre: 'jean', precio: 8000},{nombre: 'conjunto', precio: 10000},{nombre: 'remera', precio:3000},{nombre: 'sweter', precio: 6000}];

    function agregar_al_carrito(param){
        let estaEnElCarro = arr_carrito.find(producto => producto.nombre == param);
        let producto = arr_productos.find(producto => producto.nombre == param);
        if(!estaEnElCarro){
            arr_carrito.push(producto);
            console.log(arr_carrito)
        }else{
            alert('este producto ya fue agregado al carrito')
            console.log(arr_carrito)
        }
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

