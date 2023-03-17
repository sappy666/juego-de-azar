// Ingresar un número
let numero;
const btnEnviar = document.getElementById("btn-enviar");  
const inputNumber = document.getElementById("nombre");
btnEnviar.addEventListener('click', () => {
  numero = inputNumber.value;
  suerte(numero);
});

function suerte(number) {
  // Verificar si el número está en el rango de números favorables
  if ((numero > 5 && numero < 15) || numero == 55 || numero == 70) {
    // Imprimir mensaje si el número está en el rango
    alert("El número ingresado tiene opciones de ganar");
  } else {
    // Imprimir mensaje si el número no está en el rango
    alert("El número ingresado no es favorable");
  }
};
