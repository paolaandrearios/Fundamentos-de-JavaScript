var nombre = 'Sacha'

function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)

// ---------------------------------------------------


El alcance de las funciones
//El alcance de las funciones

//Variable global: accesible por todos
var nombre = 'Alison';

//funcion que devuelve una variable String en Mayusculas
functionimprimirNombreEnMayusculas1(){
  //Se obtiene el valor desde la variable global"nombre", esto provocará un cambio enel valor de la variable global. Cosa que no es recomendada
  nombre = nombre.toUpperCase();
  console.log(nombre)
}

 //llamamos ala funcion
imprimirNombreEnMayusculas();

//para poder evitar una modificacion indeseada de la variable globalse define enla funcion su alcance, es decir, se utiliza una variable local que llega por parametro

//declaramos una funcion que solicita un parametro "n"
functionimprimirNombreEnMayusculas2(n){
  //Se obtiene n a traves del parametro de la funcion, solo se modificará el valor de n dentro de la función
  n = n.toUpperCase();
  console.log(n);
}

//llamamos ala funcion yle entregamos la variable "nombre" para que sea modificada SOLO dentro de la funcion, asi la variable global queda intacta
imprimirNombreEnMayusculas2(nombre);