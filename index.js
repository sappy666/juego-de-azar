// Ingresar un número
let numero = prompt("Ingresa un número:");

// Verificar si el número está en el rango de números favorables
if ((numero > 5 && numero < 15) || numero == 55 || numero == 70) {
  // Imprimir mensaje si el número está en el rango
  console.log("El número ingresado tiene opciones de ganar");
  alert("El número ingresado tiene opciones de ganar");
} else {
  // Imprimir mensaje si el número no está en el rango
  console.log("El número ingresado no es favorable");
  alert("El número ingresado no es favorable");
}
