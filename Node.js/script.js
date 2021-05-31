// Ejemplo Node.js

// import script2 from 'script2.js'; 		// No funciona en Node

//const script2 = require('./script2.js'); 	// Esta era la manera que usaba Node

// La nueva forma de Node.
import { largeNumber } from './script2.js';

const a = 10;
const b = 5;
//const c = script2.largeNumber;
const c = largeNumber;

console.log(a + c);

// global.setTimeout()
setTimeout( () => {
	console.log(a + b + 1, " setTimeout de 1 segundos");	
}, 1000);

// Devolvemos el directorio
//console.log(__dirname);
