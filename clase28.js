const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)


___________________________________________________

// Resumen de la Clase
// Callbacks

// Qué son?
// Cómo son?
// Cómo los utilizo?

// Utilizaremos una librería externa, jQuery, con un fin específico que es el de realizar un request y obtener datos de una API externa. Utilizamos la versión CDN de JQuery.
// Nota: un CDN es un Content Delivery Nerwork. Un servidor en el planeta que nos va a conectar con la versión de jQuery más cercana a nuestra locación.

// La API que usaremos es la de Star Wars.
// Implementamos la llamada a la librería jquery.minified en el html antes de llamar nuestro archivo de funciones. Este lo usaremos para hacer requests a la api de ‘swapi.co’.

// Realizamos el request. En este caso:


// 	const API_URL = 'https://swapi.co/api/'
// 	const PEOPLE_URL = 'people/:id'

// 	const URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

// 	$.get(URL, {crossDomain: true}, function(){ }) 

// Donde:

// API_URL es la URL de la api
// PEOPLE_URL es un folder interno de la API, people/ en este caso y ‘:id’ se escribe para después hacer un .replace() por cada id
// $.get es el método de jQuery para realizar el callback. (Referencia http://api.jquery.com/jQuery.get/)
// Los parámetros del $.get son 3 separados por ‘,’:

// URL: es el URL completo, en este caso tenemos que encadenar API_URL con PEOPLE_URL y a esta segunda remmplazarle el :id por el id de cada personaje.

//   const URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` // 1 es id de Luke
// Este segundo parámetro es un objeto que le indica al método si el callback es local o remoto.

//   const opts = {crossDomain: true}
// Y por último el callback. Es una función que será invocada en algún futuro por el método $.get cuando termine de establecer la conexión remota, el request a la URL. Es una función anónima nativa de jQuery. Referencia: http://api.jquery.com/jQuery.get/

//   jQuery.get( url [, data ] [, success ] [, dataType ] )
// Los parámetros, a parte de la referencia de jQuery podemos verlos haciendo un console.log de arguments:

// $.get( URL, opts, function(){
// 	console.log(arguments)
// })
// arguments es una variable que nos va a dar un array con los parámetros que recibe la función.
// En este caso:

// 	Arguments(3) [{…}, "success", {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 	0: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
// 	1: "success"
// 	2: {readyState: 4, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}
// 	callee: ƒ (persona)
// 	length: 3
// 	Symbol(Symbol.iterator): ƒ values()
// 	__proto__: Object
// Vemos que el parámetro que nos devuelve los resultados de la API es el primero [,data].
// Entonces el callback quedaría así:

// 	$.get( URL, opts, function(data){
// 		console.log(data.name)
// 	})
// 	// Luke Skywalker
// Donde ‘data’ puede ser reemplazado por el argumento que querramos

// 	$.get( URL, opts, function(personaje){
// 		console.log(personaje.name)
// 	})
// 	// Luke Skywalker
// Por último generamos una constante a partir de la función:


// 	const API_URL = 'https://swapi.co/api/'
// 	const PEOPLE_URL = 'people/:id'

// 	const URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
// 	const opts = { crossDomain: true }
// 	const onPeopleResponse = function (personaje) {
// 		console.log(personaje.name)
// 	}

// 	$.get(URL, opts, onPeopleResponse)

// Los que desean, les dejo algunos links para que usen otras APIS.

// Rick and Morty: https://rickandmortyapi.com/
// Pokemon: https://pokeapi.co/
// StarWars: https://swapi.dev/
// Harry Potter: https://www.potterapi.com/
