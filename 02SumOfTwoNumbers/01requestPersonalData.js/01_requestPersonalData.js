// Pedimos el nombre por medio de un prompt y lo guardamos en la variable "nombre"
var nombre = "";

nombre = prompt("Por favor, introduce tu nombre:");
console.log(nombre);

// Pedimos el teléfono por medio de un prompt y lo guardamos en la variable "telefono"
var telefono = prompt("Por favor, introduce tu número de teléfono:");

// Pedimos la fecha de nacimiento por medio de un prompt y la guardamos en la variable "fechaNacimiento"
var fechaNacimiento = prompt("Por favor, introduce tu fecha de nacimiento (en formato DD/MM/AAAA):");

// Creamos un mensaje que incluya los datos introducidos
var mensaje = "Los datos introducidos son:\n\n" + 
              "- Nombre: " + nombre + "\n" +
              "- Teléfono: " + telefono + "\n" +
              "- Fecha de nacimiento: " + fechaNacimiento;

// Mostramos una alerta con el mensaje creado anteriormente
alert(mensaje);
