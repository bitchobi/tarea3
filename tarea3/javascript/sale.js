// Array de productos con sus id, nombre y precio
const productos = [
  {
    id: 1,
    name: "Mezcla original 200g",
    price: 500,
  },
  {
    id: 2,
    name: "Mezcla original 500g",
    price: 900,
  },
  {
    id: 3,
    name: "Mezcla especial 200g",
    price: 700,
  },
  {
    id: 4,
    name: "Mezcla especial 500g",
    price: 1200,
  },
];

// Elementos del DOM
const elementoPrecio = document.getElementById("producto");
const elementoCantidad = document.getElementById("cantidad");
let compras = [];

// Función para añadir productos al carrito
function add() {
  const idObjetivo = parseInt(elementoPrecio.value);
  const producto = productos.find((item) => item.id == idObjetivo);
  const cantidad = elementoCantidad.value;

  let compra = {
    producto: producto,
    cantidad: parseInt(cantidad),
  };

  const nuevaCompra = compras.findIndex(
    (item) => item.producto.id === compra.producto.id
  );
  if (compras.length < 1 || nuevaCompra === -1) {
    compras.push(compra);
  } else {
    compras[nuevaCompra].cantidad += compra.cantidad;
  }

  window.alert(`${display()}\n Subtotal ${subtotal()} Guaraníes.`);
  elementoPrecio.value = "";
  elementoCantidad.value = "";
}

// Función para calcular el subtotal
function subtotal() {
  return compras.reduce((prev, compra) => {
    return prev + compra.producto.price * compra.cantidad;
  }, 0);
}

// Función para mostrar los productos en el carrito
function display() {
  return compras
    .map((compra) => {
      return `${compra.producto.name} , ${compra.producto.price} Guaraníes : ${compra.cantidad} item.\n`;
    })
    .join("");
}

// Función para calcular los gastos de envío
function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 1000) {
    return 500;
  } else {
    return 250;
  }
}
// funsion que calcula el total a gastar
function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\n El subtotal: ${sum} Guaranies.\n Los gastos de envío son: ${postage} Guaranies.\n Total: ${
      sum + postage
    } Guaranies.`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}