// File System Example

//const fs = require('fs');				// Importamos "File System"
import fs, { fstatSync } from 'fs';

// READFILE (ASYNC)
fs.readFile('./hello.txt', (err, data) => {		// Lee un archivo.
	if (err) {
		//throw err;
		console.log('errooor');
	}
	//console.log(data)					// Si no se codifica, devuelve un 'raw buffer'.
	console.log('ASYNC -', data.toString());		// Si no se especifica la codificación, usa 'utf8'.
});

// READFILESYNC (SYNC)
const file = fs.readFileSync('./hello.txt');
console.log('SYNC -', file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' - Append is pretty cool!', err => {
// 	if (err) {
// 		console.log(err);
// 	}
// });


// WRITEFILE
fs.writeFile('bye.txt', 'Sad to see you go', err => {
	if (err) {
		console.log(err);
	}
	console.log('bye.txt was created')
});

// DELETE
fs.unlink('./bye.txt', err => {
	if (err) { 
		console.log(err) 
	}
	console.log('Inception');
})