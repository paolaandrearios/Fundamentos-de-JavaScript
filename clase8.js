var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
// _____________________________________________________

Resumen ¿queremos modificar el mismo objecto? ¿O preferimos crear uno nuevo?
-creamos una funcion y le pasamos el objecto por parametro de esta forma si que podriamos modificar la propiedad de el objecto.

Pero si le pasmos una propiedad a la funcion del objecto este no se modifica
forma 1 Ok
const sacha = {
nombre: ‘Sacha’,
edad: 28
}
const dario = {
nombre: ‘Dario’,
edad: 27
}

function cumpleanos(persona) {
persona.edad = persona.edad + 1
}

cumpleanos(sacha)

// no se modifica
function sumar1(edad) {
edad = edad + 1
}

sumar1(sacha.edad)

// Pero con esta función cuando le vuelves a recargar Sacha tiene la misma edad, es decir el la propiedad edad del objeto no ha sido modificado

Solucion 2
Podemos devolver un nuevo Objeto diferente

function sumar1(persona) {
   return { // return siginifca que la funcion "devuelve"  
     ...persona, // desglosamos al objecto y podemos modificar o añadir nuevos atributos o propiedades, hay que poner la , para poner lo siguiente 
     edad : persona.edad + 1//aqui estamos moficando solo la propiedad 
   }
   // con return hemos creado un nuevo objeto  nombre: el mismo que hemos invocado pq no lo hemos modificado pero la edad cambiada
}

sumar1(sacha)

//si llamamos a sacha el objecto antiguo sigue siendo el mismo.....por lo tanto para tener ese nuevo objeto definimos una nueva variable  y llamamos a la función 

const personaMasVieja = sumar1(sacha)
Carlos
eltenis
3
