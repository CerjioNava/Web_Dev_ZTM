# HTTP / JSON / AJAX + ASYNCHRONOUS JS

# SUMMARY

   - HTTP/HTTPS (REQUEST AND RESPONSE)
   - JSON (PARSE, STRINGIFY)
   - AJAX (XHR, JQUERY, FETCH)
   - PROMISES (THEN, CATCH, PROMISE.ALL, PROMISE.RACE)
   - ES8 (ASYNC AWAIT)
   - ES9 (OBJECT SPREAD OPERATOR, FINALLY, FOR AWAIT OF)
   - ES11 (ALLSETTLED)

-----------------------------------------------------------------------------------------------------------------------------------------------

## HTTP/HTTPS

	* HTTP: Hyper Text Transfer Protocol
	* HTTPS: Hyper Text Transfer Protocol Secure

Es el protocolo/lenguaje que permite el "fetching" (comunicación) de recursos como HTML entre un cliente y un servidor.

NOTA: "Client Server Protocol" donde las request inician en el recipiente (Browser) hacia el servidor, y el servidor devuelve los recursos. 

	* Request: Es el mensaje enviado del cliente al servidor, pidiendo recursos.
	* Response: Es el mensaje que responde el servidor al cliente, con los recursos indicados.

### Request

HTTP como lenguaje, solo importan los siguientes comandos con los cuales realizas un request al servidor (Backend):

	* GET:		Request para obtener un archivo HTML y el servidor entonces responde.
	* POST:		Request para enviar data a un servidor y que se añada a su base de datos.
	* PUT:		Request para enviar data a un servidor y actualizar la data del servidor con la nueva información.
	* DELETE:	Request para eliminar data de un servidor.

Ejemplo (TWITTER):

	GET devuelve el Feed con twitts del día.
	POST si creaste un nuevo usuario y quieres añadirlo al servidor de twitter.
	PUT si hiciste un twitt y quieres editarlo despues.
	DELETE si quieres eliminar tu usuario o un twitt.

### Response

El servidor responde con dos cosas:

    1. HTTP Message:		https://www.w3schools.com/tags/ref_httpmessages.asp 		(IMPORTANTE)

		1xx: Information
		2xx: Successful
		3xx: Redirection
		4xx: Client Error
		5xx: Server Error

	2. Data (No solo HTML) 

NOTA: En el browser podemos observar el status code en la herramienta de desarrollador, en Network.

Hay dos maneras de enviar data al servidor:

1. Query String: Recordando HTML Forms. Añade el request al URL para comunicarse con el backend, usando GET.

	**VÉASE LA SECCIÓN HTML FORM DE LAS ANOTACIONES HTML**

2. Form Data (Through the Body of the Request): Enviando información al Body, usando POST. No hay Query String.

### HTTPS

Aquí, la comunicación entre el browser y el website se encuentra encriptada. Mucho más segura.

-----------------------------------------------------------------------------------------------------------------------------------------------

## JSON (JavaScript Object Notation)

Es una sintaxis para almacenar e intercambiar data.
También existe XML, y tanto XML como JSON pueden ser utilizados para recibir data de un servidor web.
La diferencia es que JSON es texto escrito con Javascript Object Notation, mientras que XML está escrito con HTML.
Actualmente, JSON es mucho más cómodo y eficiente que XML, además de que JSON puede ser leído por cualquier lenguaje.

* Ejempo JSON:
	{
	 "employees"
	  [
	    { "firstName":"John", "lastName":"Doe" },
		{ "firstName":"Anna", "lastName":"Smith" },
		{ "firstName":"Peter", "lastName":"Jones"}
	  ]
	}

Entonces es posible convertir data a JSON y enviarla a traves de HTTP al servidor, el servidor lo adapta a su propio lenguaje, entenderlo y devolver una respuesta al browser nuevamente para que pase de JSON a JS.

### JSON.parse()

Convierte JSON a un objeto JavaScript. Ejemplo:

	> var obj =  JSON.parse('{ "name":"John", "age":30, "city":"New York" }');

### JSON.stringify()

Convierte un objeto JavaScript a JSON.

	> var myJSON = JSON.stringify(obj);

Entonces, con mi variable JSON podría hacer PUT en el Request HTTP para enviarlo al servidor. 
Al igual que el servidor puede responder con JSON y nosotros convertirlo a JS.

### JSON vs Form Data

Originally, the only way to submit some form data to a server was through the <form> tag in HTML doing a POST or a GET request. 

With JSON you can now grab the contents of the <input> in a form and submit those with JSON instead of as a form data. You can now submit to the server whenever you want without it necessarily being a <form>, through AJAX... What is AJAX you might say?

-----------------------------------------------------------------------------------------------------------------------------------------------

## AJAX

Permite leer del servidor web luego de que la página ya ha sido cargada, y actualizar la página web sin tener que recargarla.
Finalmente enviar data en el background mientras el usuario interactua con la página web.

AJAX permitió a las páginas web y por ende, a las aplicaciones web, intercambiar contenido y data dinámicamente.

Nació como combinación de distintas tecnologías, y se logró utilizando una herramienta llamada "XMLHttpRequest()".

### The Old Way: XHR

	var request = new XMLHttpRequest();
	request.open('GET', '/my/url', true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var data = JSON.parse(request.responseText);
		} else {
			// We reached our target server, but it returned an error
		}	
	};

	request.onerror = function() {
		// There is a connection error of some sort
	};

	request.send();

### The New Old Way: jQuery

	$.getJSON('/my/url', function(data) {

	});

### The New Way: Fetch

	fetch('/my/url').then(response => {
		console.log(response);
	});

Cuando se hace un ".then", se devuelve un "Promise". Cuando obtenga la data que buscas, te la devuelvo.

	>  fetch('/my/url') devuelve un Promise.

Recordando de "App.js":

	componentDidMount() {
		console.log("Check");
		fetch('https://jsonplaceholder.typicode.com/users')			// fetch tiene un método para convertir 
		.then(response => response.json())							// JSON a JS.
		.then(users => this.setState({ robots: users }));
		
		//this.setState({ robots: robots })
	}

-----------------------------------------------------------------------------------------------------------------------------------------------

## Promises

Es un objeto que puede producir un solo valor en algún momento del futuro. Sea un valor resuelto o la razon por la que no se resolvió (rejected).
Promises son muy importantes en Asynchronous JS, ya que pueden ejecutarse en el background (Sin interrumpir el resto del código).
Se ejecuta a parte del código principal.

Puede tener uno de tres estados:

	* fullfill
	* rejected
	* pending

Lo que existía antes de Promises eran los Callback. Hace lo mismo pero es más eficiente.

### Callback

Cuando algo se hace, se ejecuta ese pedazo de código. Por ejemplo, una función en un event listener.
	
	Ejemplo:
	> el.addEventListener("click", submitForm);		// Callback a submitForm()

También se puede hacer algo llamado Pyramid of Doom con Callbacks, una función dentro de otra y de otra, puede ser complicado.

### Promises

Una promesa se ve como:

	const promise = new Promise((resolve, reject) => {
		if (true) 
			resolve('Resolve ');
		else 
			reject('Error, is broke');		
	});

Ejemplo:
	
	const promise1 = new Promise((resolve, reject) => {
		if (true) {
			resolve('Stuff Worked');							// Devuelve 'Stuff Worked' si hay exito.
		} else {
			reject('Error, is broke');							// Devuelve 'Error, is broke' si falla.
		}	
	});
	
	const promise2 = new Promise((resolve, reject) => {
		setTimeout(resolve, 100, 'Hiiiii');
	});

	const promise3 = new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, 'Pooookie');
	});

	const promise4 = new Promise((resolve, reject) => {
		setTimeout(resolve, 3000, 'Is it me you are looking for?');
	});

	Promise.all([promise1, promise2, promise3, promise4])
		.then(values => {
			console.log(values);
		});													//  ["Stuff Worked", "Hiiiii", "Pooookie", "Is it me you are looking for?"]

	//promise1.then(result => console.log(result));			// Stuff Worked | Promise {<resolved>: undefined}

	promise1
		.then(result => + '!')							// Stuff Worked!
		.then(result2 => {								// Promise {<resolved>: undefined} (sin el error)
			throw Error 								// Error ... | Promise {<resolved>: undefined} (con el error)
			console.log(result2);
		})
		.catch(() => console.log('Erroooor!')); 		// Erroooor!

	promise1
		.then(result => + '!')							
		.then(result2 => result2 + '?')
		.catch(() => console.log('Erroooor!')) 			
		.then(result3 => console.log(result3 + '!'));	// Stuff Worked!?!

NOTA: Cuando el "resolve" es satisfactorio, se llama "then". Si falla, se llama "reject" y se atrapa en "catch".

#### .then()

- Retorna un Promise y puede tomar dos argumentos (Funciones de Exito y Error) que se llaman una vez luego de que la tarea Asíncrona termina.

- Cada función puede retornar un valor para ser utilizado por la siguiente función como un argumento, en la cadena de promises.

#### .catch()

- Atrapa cualquier error que suceda dentro de las Promises (Antes de llamarse).

### Promise.all([array_of_promises])

Toma una Array de Promises y devuelve un array de valores en el orden de las promesas que se especificaron.
Espera que todas las Promises se resuelvan para entonces devolver el array completo.
Ejecuta todas las promesas y luego que estén listas, comienza a llamar los ".then" y ".catch" dependiendo si tienen exito o no.
Todas las promises deben resolverse, sino solo devuelve el catch.

### Promise.race

Es igual que "Promise.all" con la excepción de que comienza a ejecutarse tan pronto como la primera promesa este completa.
Por ende, devolverá solo un valor en vez de un array de valores.

### EJEMPLO FINAL

	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/posts',
		'https://jsonplaceholder.typicode.com/albums'
	];

	Promise.all(urls.map(url => {
		return fetch(url).then(resp => resp.json())			// JSON a JS PROMISE
	})).then(results => {											// Respuesta al Promise para manipularla
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	}).catch(() => console.log('error'));

### ...

* JavaScript Promises in 10 minutes:	https://www.youtube.com/watch?v=DHvZLI7Db8E

* CORS Error: 	
https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9#:~:text=Why%20was%20the%20CORS%20error,%3A%20cross%2Dsite%20request%20forgery.

* https://jsonplaceholder.typicode.com/
* https://jsonplaceholder.cypress.io/

-----------------------------------------------------------------------------------------------------------------------------------------------

## ES8 - Async Await

Sabemos que una función asíncrona devuelve una promesa, y Async Await lo hace más facil de leer.

Ejemplo con Promises:

	movePlayer(100, 'Left')
		.then(() => movePlayer(400, 'Left'))
		.then(() => movePlayer(10, 'Right'))
		.then(() => movePlayer(330, 'Left'))

Ejemplo con Async Await:

	async function playerStart() {
		const firstMove = await movePlayer(100, 'left');	// pause, una vez que la promesa se cumple, se mueve a la siguiente linea.
		await movePlayer(400, 'Left');						// pause
		await movePlayer(10, 'Right');						// pause
		await movePlayer(330, 'Left');						// pause
	}

Await hace lo mismo que una Promise, pero con nueva sintaxis y es más legible.
Permite asignar variables a los await, en vez de encadenarlos uno tras otro.

Ejemplo Promise:

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(resp => resp.json())
		.then(console.log)

Ejemplo Async:

	async function fetchUser() {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await resp.json();
		console.log(data);
	}

### Ejemplo Final (Similar al de Promise, pero ahora con Async)

	cont urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/posts',
		'https://jsonplaceholder.typicode.com/albums'
	];

	const getData = async function() {
		try {
			const { user, posts, albums } = await Promise.all(urls.map(url => 
				fetch(url).then(resp => resp.json())
			))
			console.log('users', users);
			console.log('posts', posts);
			console.log('albums', albums);
		} catch (err){
			console.log('oops', err);
		}
	}

NOTA: Dependiendo de la situación, Promises puede ser más cómodo que Async o viceversa.

-----------------------------------------------------------------------------------------------------------------------------------------------

## ES9 (ES2018)

### Object Spread Operator

	const animals = {
		tiger: 25,
		lion: 3,
		monkey: 2,
		bird: 40
	}
	const { tiger, lion, ...rest } = animals;
	tiger			// 23
	lion 			// 3
	rest 			// {monkey:2, bird:40}

	function objectSpread(p1, p2, p3) {
		console.log(p1);
		console.log(p2);
		console.log(p3);
	}
	objectSpread(tiger, lion, rest);	// 23 | 3 | {monkey:2, bird:40}


### finally

Permite hacer algo luego de que una promesa ha terminado. Se añade al final.
Funciona sin importar si funcionó el "then" o surge un error en "catch".

Ejemplo: Del Promises Exercise:

	const urls = [
	  'http://swapi.dev/api/people/1',
	  'http://swapi.dev/api/people/2',
	  'http://swapi.dev/api/people/3',
	  'http://swapi.dev/api/people/4'
	]

	Promise.all(urls.map(url =>
	    fetch(url).then(people => people.json())
	))
	  .then(array => {
	    console.log('1', array[0])
	    console.log('2', array[1])
	    console.log('3', array[2])
	    console.log('4', array[3])
	  })
	  .catch(err => console.log('ughhhh fix it!', err))	
	  .finally(() => console.log('extra'));

### for await of 

Permite hacer loop a través de las llamadas Async Await (si tenemos varias).
Recordamos que "for of" permitía iterar sobre iterables, ahora podemos iterar sobre los "awaits promises" que tengamos.

Ejemplo: Del Async Await section:

	cont urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/posts',
		'https://jsonplaceholder.typicode.com/albums'
	];

	const getData = async function() {
		try {
			const { user, posts, albums } = await Promise.all(urls.map(url => 
				fetch(url).then(resp => resp.json())
			))
			console.log('users', users);
			console.log('posts', posts);
			console.log('albums', albums);
		} catch (err){
			console.log('oops', err);
		}
	}

	// Creamos una nueva función que haga lo mismo, pero con "for await of".
	const getData2 = async function() {
		const arrayOfPromises = urls.map(url => fetch(url));
		for await (let request of arrayOfPromises) {
			const data = await request.json();
			console.log(data);
		}
	}

-----------------------------------------------------------------------------------------------------------------------------------------------

## ES2020 

### Promise.allSettled()

A diferencia de "Promise.all", esta puede ejecutar todas las promesas sin importar si todas se resolvieron o no.
Devuelve las promesas tanto resueltas como rechazadas.

-----------------------------------------------------------------------------------------------------------------------------------------------

ES6-ES11 Features: 		https://github.com/daumann/ECMAScript-new-features-list