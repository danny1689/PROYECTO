//se tiene una base de datos de 50 productos
// la cual contiene la siguiente informacion
// Codigo, nombre p; valor p, imagen p, categoria p,
// Se requiere poder: actualizar p, agregar p, buscar p y eliminar p,

// la estructura de vectores en j.s es dinamica  lo que quiere decir que puede aumentar o disminuir
// ducumentar la funcion es importante
// lista de Producto
let productos = []; // vector vacio.
/**
 * esta funcion sirve para mostrar la lista de producto existentes en la base de datos
 * @param{string} nombre
 * @param{number} codigo
 * @param{number} valor
 * @param{string} imagen
 * @param{string}categoria A,C,E
 */
function listadeProductos(nombre, codigo, imagen, categoria, valor) {
  let listadeProductos = {
    nombre: nombre,
    codigo: codigo,
    imagen: imagen,
    categoria: categoria,
    valor: valor,
  };
  productos.push(listadeProductos);
}
console.log({ productos });
// procedimiento lista de catalogo
// base de datos
// catalogo

// listadeProductos("shampoocebolla", 105578, "imagen", "categoria A", 38500);
// listadeProductos(
//   "acondicionador-savila",
//   105679,
//   "imagen",
//   "categoria B",
//   27800);

//listadeProductos"shampoo-coco", 105780, "imagen", "categoria A", 50000
listadeProductos(`shampoocebolla`, 105578, `imagen`, `categoria A`, 38500);
listadeProductos("locion-tropical", 655812, "imagen", "categoria C", 70000);
listadeProductos("contorno-ojos", 885212, "imagen", "categoria E", 48500);
listadeProductos("cepillobambooo", 885313, "imagen", "categoria E", 35500);
listadeProductos("bioterapia-capilar", 655714, "imagen", "categoria C", 39000);
listadeProductos("crema-humetante", 274597, "imagen", "categoria A", 65000);
listadeProductos("gel-reductor", 228546, "imagen", "categoria C", 45800);
listadeProductos("crema-facial", 287544, "imagen", "categoria A", 65000);
listadeProductos("aloe-antiedad", 883585, "imagen", "categoria A", 98000);
listadeProductos("shampoo-romero", 105528, "imagen", "categoria A", 50000);
listadeProductos("shampoo-aguacate", 102288, "imagen", "categoria A", 65000);

// funcion que muestre todos los productos del catalogo
/**
 * esta funcion sirve para mostrar productos existentes en la base de datos
 * @param {string} nombre
 * @param {number} codigo
 * @param {number} valor
 * @param {string} imagen
 * @param {string}categoria A,C,E
 */

function mostrarProctos() {
  for (let contador = 0; contador < productos.length; contador = contador + 1) {
    console.log(
      `nombre: ${productos[contador].nombre},
      codigo: ${productos[contador].codigo},
      imagen: ${productos[contador].imagen},
      categoria: ${productos[contador].categoria},
      valor: ${productos[contador].valor},
      `
    );
  }
}
mostrarProctos();
/*
// BUACAR Y MOSTRAR PRODUCTO POR SU CODIGO
// funcion que muestre productos del catalogo por su identificador unico (codigo)
/**
 * esta funcion sirve para mostrar y buscar productos por su codigo en la base de datos
 * @param {number} codigo - codigo del producto
 * @returns {object} devuelve un producto
 */
/*let contador = 0;
function buscarproducto(codigo) {
  while (contador <= 12) {
    if (codigo === mostrarProctos[i].contador) {
      console.log(contador);
    }
    contador = contador + 1;
  }
}
console.log(buscarproducto(105780));

//CREAR, ACTUALIZAR Y ELIMINAR PRODUCTO.

// MONITOREAR PRODUCTOS EN TIEMPO REAL INVENTARIO
/**
 * esta funcion sirve para monitorearproductos en estanterias en la base de datos y verificar su cantidad
 * @returns {object} devuelve productos bajo,medio y lleno
 */
function monitorearproductos(Productos) {
  if (Productos <= 12) {
    return "bajo";
  } else if (Productos <= 25) {
    return "medio";
  } else {
    return "lleno";
  }
}
console.log(monitorearproductos(12));
console.log(monitorearproductos(15));
console.log(monitorearproductos(35));
//git remoto

// Funcion que sirve para gregar produtos
/**
 * esta funcion sirve para agregar producto a la base de datos
 * @param{string} nombre
 * @param{number} codigo
 * @param{number} valor
 * @param{string} imagen
 * @param{string}categoria A,C,E
 */
function agregarProductos(nombre, codigo, imagen, categoria, valor) {
  let agregarProductos = {
    nombre: nombre,
    codigo: codigo,
    imagen: imagen,
    categoria: categoria,
    valor: valor,
  };
  productos.push(agregarProductos);
}
console.log({ productos });

//Funcion que sirve para eliminar producto
/*
function eliminarProductos() {
  let listadeProductos = listadeProductos(codigo);
  if (listadeProductos != null) {
    let indice = productos.indexOf(listadeProductos);
    return productos.splice(indice, 1);
  }
  return null;
}
let eliminarProductos = eliminarProductos(105780);
*/

// Función para eliminar un producto por su codigo
/**
 * esta funcion sirve para eliminar productos existentes en la base de datos por codigo
 * @param {number} codigo
 * @returns {object} devuelve productos eliminado por codigo
 */

function eliminarProducto(codigoProducto) {
  // Usamos el método findIndex para encontrar el índice del producto con el ID dado
  let indice = productos.findIndex(
    (productos) => productos.codigo === codigoProducto
  );

  // Verificamos si encontramos el producto
  if (indice !== -1) {
    // Usamos el método splice para eliminar el elemento en el índice encontrado
    productos.splice(indice, 1);
    console.log(`Producto con ID ${codigoProducto} eliminado.`);
  } else {
    console.log(`Producto con ID ${codigoProducto} no encontrado.`);
  }
}
// Ejemplo de uso:
console.log("Antes de eliminar:");
console.log(productos);
eliminarProducto(105780); // Eliminar producto con ID 1

console.log("Después de eliminar:");
console.log(productos);

// Funcion para actualizar productos

// Función para actualizar los datos de un producto por su codigo
function actualizarProducto(nombreProducto, valorProducto) {
  // Usamos el método find para encontrar el producto con el ID dado
  let producto = productos.find(
    (producto) => producto.codigo === codigoProducto
  );

  // Verificamos si encontramos el producto
  if (productos) {
    // Actualizamos los datos del producto encontrado

    producto.codigo = nombreProducto;
    producto.valor = valorProducto;
    console.log(`Productos con ID ${codigoProducto} actualizado.`);
  } else {
    console.log(`Productos con ID ${codigoProducto} no encontrado.`);
  }
}

// Ejemplo de uso:
console.log("Antes de la actualización:");
console.log(productos);

actualizarProducto(9, "Nuevo nombre", 883585); // Actualizar producto con codigo 883585
console.log("Después de la actualización:");
console.log(productos);
