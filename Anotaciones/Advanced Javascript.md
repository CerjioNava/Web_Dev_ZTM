# ADVANCED JAVASCRIPT

# SUMMARY

   - SCOPE
   - ADVANCED CONTROL FLOW (TERNARY OPERATOR AND SWITCH)
   - ES5 AND ES6 
   		(ECMAScript, LET, CONST, DESTRUCTURING, OBJECT PROPERTIES, TEMPLATE STRINGS, DEFAULT ARGUMENTS, SYMBOL, ARROW FUNCTIONS)
   - ADVANCED FUNCTIONS 
   		(MODERN JS, CLOSURES, CURRYING, COMPOSE)
   - ADVANCED ARRAYS 
   		(MAP, FILTER, REDUCE)
   - ADVANCED OBJECTS 
   		(REFERENCE TYPE, CONTEXT, INSTANTIATION, THIS, SUPER, CLASS, EXTENDS, NEW)
   - PASS BY VALUE vs PASS BY REFERENCE
   - TYPE COERCION
   - ES7  	
   		(INCLUDES, ** )
   - ES8	
   		(STRING PADDING, TRAILLING COMMAS, OBJECT VALUES AND ENTRIES)
   - ES9	
   - ES10	
   		(FLAT, FLATMAP, TRIMSTART Y TRIMEND, FROMENTRIES, TRY AND CATCH)
   - ADVANCED LOOP 
   		(FOR OF, FOR IN)
   - ES2020 	
   		(BIGINT, ?., ??)
   - DEBUGGING
   - HOW JAVASCRIPT WORKS
   - MODULES

------------------------------------------------------------------------------------------------------------------------------------

## SCOPE

Se refiere al "Variable Access", es decir, a que variables tengo acceso mientras un código se ejecuta.
Por default en JS estás en el "Root Scope" (Window Object).

**Estructura:**
   // Root Scope (Window)
   function funFunction() {
      // Child Scope
   }	

### Ejemplos

   * Ejemplo 1:
   		// Root Scope (window)
   		function aa () {				// Al crear una función así, pasa a formar parte del Window Object. 
	      	console.log("test");
	   	};
	   	window.aa();					// Es decir, se añade al Window Scope.

**NOTA: Una función puede acceder a variables "globales" pertenecientes al Root Scope. Sin embargo, las variables declaradas dentro de
        una función no pueden ser accedidas desde fuera de la función misma.**

   * Ejemplo 2:
   		var b = "I can access this in the function bb";
   		function bb () {
	      	var a = "hello";			// Esta variable solo existe dentro de la función. 
      		console.log(a, b);			// Solo se puede acceder a ella dentro de la función. 
	   	};
	   	console.log(a);					// Error,  no se puede acceder a ella fuera de la función.  

**NOTA: Una variable global puede ser modificada dentro de una función**

   * Ejemplo 3:
   		var b = "Modify me";
   		function bb () {
	      	b = "hello";
	   	};
	   	console.log(b);				// "hello"
   
### Ejemplo

En el siguiente ejemplo se ven distintos scopes.

   * Fun Function Example:
   		var fun = 5;
   		function funFunction () {
   			var fun = "hello";
   			console.log(1, fun);		// Se imprime la variable declarada dentro del nuevo Scope.
   		}
		function funerFunction () {
   			var fun = "bye";
   			console.log(2, fun);		// Se imprime la variable declarada dentro del nuevo Scope.
   		}   		
   		function funestFunction () {
   			fun = "Ahhhhhh";
   			console.log(3, fun);		// Se modifica la variable global y se imprime su nuevo valor
   		}
   		console.log("window", fun); 	// window 5
   		funFunction();					// 1 "hello"
   		funerFunction();				// 2 "bye"
   		funestFunction(); 				// 3 "Ahhhhh"
   		console.log("window", fun); 	// window "Ahhhhh"

------------------------------------------------------------------------------------------------------------------------------------

## Advanced Control Flow

### Ternary Operator

   > condition ? expression1 : expression2;		// Si condition es true, devuelve expression1. Si es false, devuelve expression2.

Ejemplo:
   function isUserValid(bool) {
   	  return bool;
   }
   var answer = isUserValid(true) ? "You may enter" : "Access Denied";
   var automatedAnswer =   "Your account # is" + ( isUserVallid(false) ? "1234" : "Not Available");

### Switch

Ejemplo:
   	function moveCommand(direction) {
      	var whatHappens;
   	  	switch(direction) {
   	     	case "forward":
	   	     	whatHappens = "You encounter a monster";
   	     		break;
   	     	case "back":
	   	     	whatHappens = "You arrived home";
   	     		break;
   	     	case "right":
	   	     	whatHappens = "You found a river";
   	     		break;
   	     	case "left":
	   	     	whatHappens = "You run into a troll";
   	     		break;
   	     	default:
	   	     	whatHappens = "Please enter a valid direction";
      	}
      	return whatHappens;
   	}

------------------------------------------------------------------------------------------------------------------------------------

## ES5 and ES6 (2009, 2015)

El término "ES" refiere a ECMAScript, un estándar de JavaScript. 

### Variables "let" y "const"

   * let: Permite declarar variables limitando su Scope dentro del bloque (Block Scope), declaración o expresión donde se esté 
   		  utilizando. A diferencia de "var" que define una variable (sea global o local) sin importar el ámbito del bloque.

   * const: Similar a "let", pero será una variable inalterable. Muy util para valores que no deberán cambiar nunca.

* Ejemplo:
	const player = "bobby";
	let experience = 100;
	let wizardLevel = false;
	if (experience > 90) {
		let wizardLevel = true;		// Solo se altera dentro de este bloque.
	}
	player = "Sally";				// Error

* Ejemplo:
	const obj = {
 		player: "Bobby",
 		experience: 100,
 		wizardLevel: false
	}
	obj = 5;						// Error
	obj.wizardLevel = true;			// Si cambia

NOTA: No se puede reasignar o alterar una variable "const", sin embargo, en un Object si puede cambiarse una propiedad.

### Destructuring

* Ejemplo: 
   // Es lo mismo escribir esto:
	const player = obj.player;
	const experience = obj.experience;
	let wizardLevel = obj.wizardLevel;
   // Que escribir esto:
	const { player, experience } = obj;
	let { wizardLevel } = obj;

### Object Properties

* Ejemplo:
	const a = "Simon";
	const b = true;
	const c = {};
	const obj = {		// Sin necesidad de asignar llave y valor, si ambos son lo mismo (a:a, b:b, c:c, etc...)
		a, 
		b, 
		c
	}

### Templates Strings

Usando las comillas torcidas ` ` Se pueden colocar "" y '' dentro del string sin problemas de \' o algo parecido.
Ademas agiliza las cadenas de strings permitiendo añadir de manera dinámica valores que queramos.

* Ejemplo:
	// Esto es un greeting tedioso con muchas cadenas de texto 
	const greeting = "Hello " + name + " you seem to be doing" + greeting + "!";

	const name = "Sally";
	const age = 34;
	const pet = "horse"; 
	
	const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

### Default Arguments

Si no se proveen valores para los argumentos, cada argumento puede tener un default.

* Ejemplo:
	function greet(name='', age=30, pet='cat'){
		return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;
	}	
	greet();
	greet("John", 50, "Monkey");

### Symbol Type

Crean tipos totalemente únicos.
Se utiliza mayormente para identificadores de propiedades de objetos.

* Ejemplo:
	let sym1 = Symbol();
	let sym2 = Symbol('Foo');
	let sym3 = Symbol('Foo');
	sym1;						// Devuelve Symbol()
	sym2;						// Devuelve Symbol('Foo')
	sym3;						// Devuelve Symbol('Foo')
	sym2 === sym3;				// Devuelve False

### Arrow Functions

* Ejemplo:
	// Function tradicional:
	function add(a, b) {
		return a > b;
	}
	// Escrito como Arrow Function:
	const add = (a, b) => a > b;

NOTA: Si la función solo toma un argumento, puede escribirse sin paréntesis.
	  Por ejemplo:	"const add = a => a * 2;"

------------------------------------------------------------------------------------------------------------------------------------

## Advanced Functions

### Modern JavaScript

* Ejemplo:
	const first = () => {
		const greet = 'Hi';			// Variable local en la función, se crea cada vez que se llama first() evitando conflictos.
		const second = () => {		// Esto evita que exista interferencia con variables ajenas a la función y su scope.
			alert(greet);
		}
		return second;
	}
	const newFunc = first();		// Closures
	newFunc()

### Closures 

Refiere a cuando una función ya ha sido ejecutada y no se ejecuta de nuevo. 
Pero recuerda que hay referencias a esas variables, de manera que el Child Scope siempre tiene acceso a su Parent Scope.

### Currying

Es el proceso de convertir una función que toma multiples argumentos, en una función que recibe los argumentos uno a la vez.

* Ejemplo:
	const multiply = (a, b) => a * b;
	const curriedMultiply = (a) => (b) => a * b;
	curriedMultiply(3)(4);							// Devuelve 3 * 4 = 12
	const multiplyBy5 = curriedMultiply(5);
	multiplyBy5(10);								// Devuelve 50

### Compose

Se refiere a juntar dos funciones para formar una tercera función, donde la salida de una función es la entrada de la otra.

* Ejemplo:
	const compose = (f, g) => (a) => f(g(a));
	const sum = (num) => num + 1;
	compose(sum, sum)(5);						// Devuelve 7


**IMPORTANTE:** 

   * Avoiding Side Effects: 	Evitar que acciones dentro de una función afecten drasticamente el exterior del código.
   * Functional Purity:			Evitando Side Effects y haciendo return siempre, logramos "Deterministic".
   * Deterministic:				La mismas entradas en una función SIEMPRE deben devolver el mismo valor de salida.

------------------------------------------------------------------------------------------------------------------------------------

## Advanced Arrays

* Ejemplo:
	const array = [1, 2, 10, 18];
	const double = []
	const newArray = array.forEach((num) => {		// Array de manera más avanzada
		double.push(num * 2);
	});
	console.log(double)

### MAP

* Ejemplo:
	const mapArray = array.map((num) => {				// Mejor, igual que python.
		return num * 2;
	});
	console.log("map", mapArray);

	// Recordando que con arrow function y un solo argumento:
	const mapArray = array.map(num => num * 2);			// Mucho más limpio.
	console.log("map", mapArray);						// [2, 4, 20, 36]

### FILTER

* Ejemplo:
	const filterArray = array.filter(num => {
		return num > 5;
	});
	console.log("filter", filterArray);
	// Más limpio
	const filterArray = array.filter(num => num > 5); 	// [10, 18]

### REDUCE

* Ejemplo:
	const reduceArray = array.reduce((accumulator, num) => {
		return accumulator * num;
	}, 5);
	console.log("reduce", reduceArray);					// 36

------------------------------------------------------------------------------------------------------------------------------------

## Advanced Objects

### Reference Type

Objects son llamados Reference Types, son creados por el programador, no son primitivos.
Los types normal son definidos por el lenguaje de programación (en este caso, JS), son primitivos.  

* Ejemplos:
	[] === [];						// false
	[1] === [1];					// false

	var object1 = { value: 10};		// Digamos que: var object = Box1
	var object2 = object1;			// object2 está "referenciando" a la misma dirección de memoria que object1.
	var object3 = { value: 10};		// Digamos que: var object = Box3
	object1 === object2;	 		// true, misma dirección.
	object1 === object3;			// false, object3 no apunta a la misma dirección que object1.

	object1.value = 15;				// Cambiamos el contenido de esa dirección.
	object2.value;					// 15, ya que apunta a la misma dirección.
	object3.value;					// 10, no cambia porque no es la misma dirección.

### Context (this)

This refiere a que objeto pertenece algo.

* Ejemplo:
	console.log(this === window);		// True
	
	function a() {
		console.log(this);				// a()
	}

	const object4 = {
		a: function() {
			console.log(this);			// {a: f}
		}
	}

### Instantiation

Hacer copia de un objeto y reusar el código. 
Por ejemplo: Instanciar varios "wizard", "vidas", "enemigos", etc.

* Ejemplo:
	class Player {
		constructor(name, type) {
			this.name = name;
			this.type = type;
			console.log("player", this);
		}
		introduce() {
			console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
		}
	}
	class Wizard extends Player {
		constructor(name, type) {
			super(name, type);
			console.log("wizard", this);
		}
		play() {
			console.log(`WEEEEE I'm a ${this.type}`)
		}
	}
	const wizard1 = new Wizard("Shelly", "Healer");
	const wizard2 = new Wizard("Shawn", "Dark Magic");
	wizard1.play();
	wizard1.introduce();
	wizard2.play();
	wizard2.introduce();

------------------------------------------------------------------------------------------------------------------------------------

## Pass By Value vs Pass By Reference

   * When a parameter is passed by reference, the caller and the callee use the same variable for the parameter. If the callee modifies the parameter variable, the effect is visible to the caller's variable.

   * When a parameter is passed by value, the caller and callee have two independent variables with the same value. If the callee modifies the parameter variable, the effect is not visible to the caller.

* Ejemplo PASS BY VALUE:
	var a = 5;
	var b = a;			// Pass by value. Copio el valor de la variable primitiva y la almaceno en un nuevo espacio de memoria.
	b++;
	console.log(a);		// 5
	console.log(b);		// 6

* Ejemplo PASS BY REFERENCE:
	let obj1 = {name: 'Yao', password: '123'};
	let obj2 = obj1;							// No se copian los valores, sino la dirección o "referencia" donde se encuentra.
	obj2.password = 'easypeasy';
	console.log(obj1);							// {name: 'Yao', password: 'easeypeasy'}				
	console.log(obj2);							// {name: 'Yao', password: 'easeypeasy'}

* Ejemplo:
	let obj = {a: 'a', b: 'b', c: 'c'};
	let clone = Object.assign({}, obj);			// Clonamos un objeto, a una dirección distinta obvio.
	let clone2 = {...obj};						// Una sintaxis distinta para clonar.
	obj.c = 5;
	console.log(obj);
	console.log(clone);							// El objeto clonado no es afectado ya que tiene una dirección distinta.
	console.log(clone2);							

* Ejemplo:
	let obj3 = {
		a: 'a', 
		b: 'b', 
		c: { deep: 'Try and copy me' }			// Un objeto dentro de otro objeto, es decir, dos direcciones.
	};
	let clone = {...obj};						// Solo clonamos el primer layout.
	obj.c.deep = 'hahaha'; 
	console.log(obj);
	console.log(clone);							// Si fue afectado al cambio

	let superClone = JSON.parse(JSON.stringify(obj))	// Se convierte obj en un string para luego hacerlo un objeto.
	console.log(superClone);							
	
------------------------------------------------------------------------------------------------------------------------------------

## Type Coercion

Sucede cuando utilizas "==" (doble igual), que compara dos valores y si son de tipos distintos, trata de convertir uno en el otro.
Sin embargo, esta manera de escribir código no es muy predecible, los resultados pueden no ser los deseados.

NOTA: Cuando utilizas "===" solo compara, más no convierte ningun tipo. MÁS RECOMENDABLE.

   * 1 == '1'							// true
   * if (1) { console.log(5) };			// undefined
   * if (0) { console.log(5) };			// undefined
   * if (false) { console.log(5) };		// undefined
   * -0 === +0							// true
   * Object.is(-0, +0)					// false
   * etc... 							// Véase Type Coercion Table.

**IMPORTANTE:**
	* Type Coercion Table:				https://dorey.github.io/JavaScript-Equality-Table/
	* MDN - Equality Comparisons:		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
	* ECMA Compasiron Algorithm:		https://262.ecma-international.org/5.1/#sec-11.9.3

------------------------------------------------------------------------------------------------------------------------------------

## ES7 (2016)

Luego de ES6, este solo tuvo dos adiciones:

### includes()

* Ejemplo:
	'Hellooo'.includes('o');				// true	
	const pets = ['dog', 'cat', 'bat'];
	pets.includes('dog');					// true
	pets.includes('bird');					// false

### Exponential Operator ( ** )

* Ejemplo:
	const square = (x) => x ** 2; 		
	square(4);								// 16
	const cube = (x) => x ** 3;
	cube(2);								// 8

------------------------------------------------------------------------------------------------------------------------------------

## ES8 (2017)

Esta si tuvo más adiciones. Veremos las más importantes:

### String Padding - .padStart() y .padEnd()

* Ejemplo:
  	'Turtle'.padStart(10);			// '          Turtle'

* Ejemplo:
   	'Turtle'.padEnd(10);			// 'Turtle          '

### Trailling Commas in Function's parameter lists and calls

* Ejemplo:
	const fun = (a, b, c, d,  ) {			// Se puede dejar una coma al final de los argumentos y funcionar.
		console.log(a);						// Realmente es un cambio de sintaxis, no hay mayor diferencia.
	}
	fun(1, 2, 3, 4, )

### Object.values & Object.entries

 * Ejemplo:
 	let obj = {
 		username0: 'Santa',
 		username1: 'Rudolf',
 		username2: 'Mr. Grinch'
 	}

 	// Antes se debía hacer algo así con KEYS:
 	Object.keys(obj).forEach((key, index) => {
 		console.log(key, obj[key]);					// username0 Santa | username1 Rudolf | ...
 	});  

 	// Ahora se puede hacer algo como: 
 	Object.values(obj).forEach(value => {
 		console.log(value);							// Santa, Rudolf, Mr. Grinch.
 	});
 	// También:
 	Object.entries(obj).forEach(value => {
 		console.log(value);							// ["username0", "Santa"], ["username1", "Rudolf"], ...
 	});

 	// Usando MAP:
 	Object.entries(obj).map(value => {
 		return value[1] + value[0].replace('username', ''); 	// ["Santa0", "Rudolf1", "Mr.Grinch2" ]
 	});

------------------------------------------------------------------------------------------------------------------------------------

## ES10 (2019)

### .flat()

* Ejemplo:
  	// Array sin nested
   	const array() = [1, 2, 3, 4, 5];
   	array.flat();							// [1, 2, 3, 4, 5]

   	// Array con nested en la primera capa
   	const array2() = [1, [2, 3], [4, 5]];	
   	array2.flat();							// [1, 2, 3, 4, 5]			elimina los nested arrays y los une en uno mismo. 
	   
   	// Array con nested hasta la segunda capa
   	const array3() = [1, 2, [3, 4, [5]]];	 
	array3.flat();							// [1, 2, 3, 4, Array(1)]	elimina la primera superficie de arrays.
	   
   	// Array con nested hasta la segunda capa, con mayor flat
   	const array4() = [1, 2, [3, 4, [5]]];	 
   	array4.flat(2);							// [1, 2, 3, 4, 5]			debido a que se hizo flat en dos capas.

* Ejemplo:
  	// También sirve así:
   	const entries = ["Bob", "Sally", , , , , "Cindy"];
   	entries.flat();										// ["Bob", "Sally", "Cindy"]	elimina los espacios vacíos.

### flatMap()	(Flat con Map)

* Ejemplo:
  	const jurassicParkChaos = jurassicPark.flatMap(creature => creature + "T-Rex");

### trimStart() y trimEnd()

* Ejemplo:
  	const userEmail = '        correochevere@gmail.com';
  	const userEmail2 = 'otro_correo@gmail.com      ';
   	console.log(userEmail.trimStart());					// Elimina espacios en blanco al inicio.
   	console.log(userEmail2.trimEnd());					// Elimina espacios en blanco al final.

### fromEntries

Transforma una lista de pares "key y values" en un objeto.
Es lo contrario a Object.entries()

* Ejemplo: 
   	userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]; 	// Queremos convertir los pares en objetos.
   	const obj = Object.fromEntries(userProfiles);									// Devuelve un objeto.

### try {} catch {}

Intenta ejecutar un código en "try" y si este devuelve un error, ejecuta el código en "catch".

* Ejemplo:
	try {
		//true + 'hi';
		bob + 'hi';
	} catch {
		console.log("you messed up");
	}
	
------------------------------------------------------------------------------------------------------------------------------------

## Advanced Loops

### For Of (para iterables)

* Ejemplo:
	const basket = ["apples", "oranges", "grapes"];
	for (item of basket) {
		console.log(item);								// Iterando por cada item iterable de basket, devuelve cada uno.
	 }

### For In (para enumerables)

* Ejemplo:
	const detailBasket = {
		apples: 5,
		oranges: 10,
		grapes: 1000
	}
	for (item in detailedBasket) {
		console.log(item);								// enumerating (para objects)
	}


**NOTA: Las propiedades de un Object se llaman "Enumerable".
**NOTA: Iterating es para arrays y strings. Enumerating es para objetos.**

**IMPORTANTE: Un array puede leerse como un objeto, siendo sus index los key, y el contenido los values.**

* Ejemplo:
	// De la forma:
	const basketArray = ["apples", "oranges", "grapes"]
	const basketObject = {0: "apples",
						  1: "oranges", 
						  2: "grapes"};
	for (item in basketArray) {
		console.log(item);								// 0, 1, 2.	
	 }

------------------------------------------------------------------------------------------------------------------------------------

## ES11 (2020)

   typeof 4			// "number"
   typeof true 		// "boolean"
   typeof 12n		// "bigint"

### BigInt

Es un nuevo tipo en JavaScript, y se denota con "n" luego del número.
Se creo debido a que más alla de MAX SAFE INTEGER los cálculos comienzan a perder precisión (9 quadrillion).
Un "number" solo representa bien los números entre -(2 ** 53 -1) y (2 ** 53 -1).

Para obtener el MAX SAFE INTEGER:

   > Number.MAX_SAFE_INTEGER;		// 9007199254740991

Javascript's Max Safe Integer:
https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

### Optional Chaining Operator ?.

Sirve para verificar si una propiedad o atributo existe.

* Ejemplo: 
	let will_pokemon = {
		pikachu: {
			species: 'Mouse Pokemon',
			height: 0.4,
			weight: 6
		}
	}
	let weight = will_pokemon.pikachu.weight;
	console.log('weight: ', weight);							// 6

	let andrei_pokemon = {
		raichu: {
			species: 'Mouse Pokemon',
			height: 0.8,
			weight: 30
		}
	}
	let weight2 = andrei.pokemon.raichu.weight;

	let weight3 = andrei_pokemon?.pikachu?.weight;				// Existe andrei_pokemon? existe pikachu? entonces devuelve weight.
	console.log(weight3);										// undefined, ya que no existe pikachu.

	let weight4 = andrei_pokemon?.raichu?.weight;				// Existe andrei_pokemon? existe raichu? entonces devuelve weight.
	console.log(weight4);										// 30

### Nullish Coalescing Operator ??

Se puede utilizar como sustituto (a veces) del OR.

* Ejemplo:
	let andrei_pokemon = {
			raichu: {
			species: 'Mouse Pokemon',
			height: 0.8,
			weight: 30,
			power: 0	// '', false, etc...					// Quiero obtener power pero no se si esa propiedad existe.
		}
	}
	//let power = andrei_pokemon?.pikachu?.power || 'no power';	// OR verifica si es false (es decir, false, 0, '', ...)
	let power = andrei_pokemon?.pikachu?.power ?? 'no power';	// Verifica si es NULL o UNDEFINED
	console.log(power)											// 

### Promise.AllSettled

**VEASE LA SECCIÓN DE HTTP-JSON-AJAX+ASYNC**

### globalThis

------------------------------------------------------------------------------------------------------------------------------------

## Debugging (debugger) 	(IMPORTANTE)

* Ejemplo:
	const flattened = [[0, 1], [2, 3], [4, 5]].reduce( (a, b) => a.concat(b), [] )		// a(accumulator), b(array)
	console.log(flattened);																// [0, 1, 2, 3, 4, 5]

	// Podemos reescribirla como:
	const flattened = [[0, 1], [2, 3], [4, 5]].reduce( 			// De esta manera podemos entender que hace en cada loop.
			(accumulator, array) => {
				console.log('Array', array);
				console.log('Accumulator', accumulator);
				accumulator.concat(array)
			}, [] )

	// Ahora, en vez de usar console.log(), podemos utilizar "DEBUGGER":
	const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
			(accumulator, array) => {
				debugger;										// Abre el debugger y detiene la ejecución justo donde está.
				accumulator.concat(array)
			}, [] )

**NOTA: Usamos "debugger" y podemos entonces ir paso a paso (step over) durante la ejecución.
	  El debugger nos muestra también las Variables en el Scope y el contexto (sus valores).**

------------------------------------------------------------------------------------------------------------------------------------

## How Javascript Works

### What is a program?

A program must:
	
   - Allocate memory.
   - Parse and Execute.

Un Javascript Engine consiste en dos partes:

* Memory Heap: Where memory allocation happens.

	- Memory Leak: Sucede cuando tienes memoria inutilizada, la memoria no es ilimitada.
				   Por eso hay que evitar usar muchas variables globales, deben limpiarse seguido.

* Call Stack: Where your code is readed and executed.
			  Va añadiendo y apilando lineas de código para que sean ejecutadas.

	Ejemplo:
		const one = () => {
			const two = () => {
				console.log('4');
			}
			two();
		}	
		one();

	// En este caso, se apila de la manera ascendente:
	// console.log('4')
	// two()
	// one()
	// Hasta que se vacíen las ejecuciones del Call Stack.

### Stack Overflow 

Se refiere a cuando se desborda el Call Stack.

* Ejemplo de RECURSION:
	function foo() {
		foo();
	}
	foo();					// Uncaught RangeError: Maximum Call Stack size exceeded.

### Javascript is a single threaded language that can be non-blocking? YES!

   * Single Threaded: Significa que solo tiene un Call Stack, es decir, hacer una sola cosa a la vez.

NOTA: Otros lenguajes pueden tener multiples Call Stacks, y son llamados Multi Threaded.

### Synchronous and Asynchronous

   * Synchronous: Refiere a la ejecución linea por linea.

   * Asynchronous: Se puede alterar el tiempo de ejecución para lineas o funciones.

   		Ejemplo:
   			setTimeout(() => {			// setTimeout() ejecuta el código o función al transcurrir el tiempo especificado.
   				console.log('2');
   			}, 2000);					// 2000 ms

### Javascript Run-Time Environment

   * CALL STACK

   * WEB API

   * CALLBACK QUEUE

   * EVENT LOOP

Web API'S:

   * DOM (document)
   * AJAX (XMLHttpRequest)
   * Timeout (setTimeout)

**REPASAR ESTO**  

------------------------------------------------------------------------------------------------------------------------------------

## Modules

Mountain of modules:

   * Inline Scripts: Cuando añades las lineas de Javascript en tu archivo HTML. 
   					 NO RECOMENDABLE. No hay Code Reusability.

   * Global Namespace: No utilizar el mismo nombre para dos variables o funciones distinta. Tener cuidado.

   * Script Tags: En vez de usar Inline, utilizamos <script></script> para asociar un archivo Javascript.
   				  Sin embargo, un problema es tener que añadir el mismo Script Tag para distintas páginas.
   				  No hay Dependency Resolution, debes añadir los scripts en el orden específico.

   * IIFE: Significa "Inmediatly Invoke Function Expression". Encierras funciones en paréntesis para validar y ejecutar.
   		   Por ejemplo: (function() {...})()
   		   Reduce los Global Namespace.

   * Browserify: Utiliza CommonJS.
   				 Es un Module Bundler, se ejecuta antes de que la página se encuentre online. Lee todos los JS y los agrupa en uno.
   				 Este JS agrupado se añade automáticamente como Script Tag en el HTML "bundle.js". 

   		Ejemplo:
   			// JS 1:
   			module.exports = function.add(a, b) {
   				return a+b;
   			}
   			// JS 2:
   			var add = require("./add");		// Asumiendo que el archivo js1 se llama "add.js"

   * ES6 Webpack2:

   		Ejemplo:
   			// JS 1:
   			export const add = (a, b) => a + b;
   			// or
   			export default function add() {
   				return a + b;
   			}

   			// JS 2:
   			import { add } from './add';
   			// or
   			import add from './add';

Brief History of Modules in JS:
https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde

Modules Deep Dive:
https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/

Javascript Practice:
   1. https://github.com/getify/You-Dont-Know-JS
   2. http://javascript.info/
   3. http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/

------------------------------------------------------------------------------------------------------------------------------------

