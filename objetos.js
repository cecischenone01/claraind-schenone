class Producto {
    constructor (nombre, color, precio){
        this.nombre = nombre
        this.color = color
        this.precio = precio
    } g
}

let ingreso_producto = prompt("ingrese uno de nuestros productos");
let ingreso_cuota = prompt("ingrese la cantidad de cuotas:");

let heladera = new Producto ("heladera", "blanco", 90000);
let cocina = new Producto ( "cocina", "blanco", 110000);
let lavarropas = new Producto ("lavarropas", "gris", 100000);
let microondas = new Producto ("microondas", "blanco", 50000);

const productos = [heladera, cocina, lavarropas, microondas]

const producto = productos.find(producto => producto.nombre === ingreso_producto);

console.log(producto.precio)

function descuento(nombre_producto , precio_producto){
    let precio_con_descuento = precio_producto * 0.8;
    return console.log (`el precio con descuento de: ${nombre_producto} es: ${precio_con_descuento} `)
}

function cuotas (precio_producto, cuota, nombre_producto){
    if (cuota = 3){
        precio_3_cuotas = precio_producto / cuota;
        return console.log (`el precio en 3 cuotas de ${nombre_producto} de: ${precio_3_cuotas}  cada una.`)
    }

    else if (cuotas == 6){
        precio_6_cuotas = precio_producto / cuota;
        return console.log (`el precio en 6 cuotas de ${nombre_producto} de: ${precio_6_cuotas}  cada una.`)
    }

    else if (cuota == 12){
        precio_12_cuotas = precio_producto / cuota;
        return console.log (`el precio en 12 cuotas de ${nombre_producto} de: ${precio_12_cuotas}  cada una.`)
    }

    else{
        return console.log ("ingrese un numero de cuotas valido.")
    }
}

descuento(producto.nombre, producto.precio);
cuotas(producto.precio, ingreso_cuota, producto.nombre);