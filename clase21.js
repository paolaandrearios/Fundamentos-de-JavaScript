function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Sacha', 'Lifszyc')
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')

// -------------------------------------------------------

function Persona(nombre, apellido,altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  
  if (this.altura > 1.8){
    this.altura = "Soy alto"
  } else {
    this.altura = "Soy bajo"
  }
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y ${this.altura}`)
}

var sacha = new Persona('Sacha', 'Lifszyc',1.72)
var erika = new Persona('Erika', 'Luna', 1.81)
var arturo = new Persona('Arturo', 'Martinez', 1.85)
