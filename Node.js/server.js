// TODO LO COMENTADO AL INICIO FUE HECHO SIN EXPRESS.JS
/*
//const http = require('http'); 								// Usamos el modulo "http" de Node.
import http from 'http';

const server = http.createServer( (request, response) => {		// Creamos un servidor con http. Podemos escuchar a 'request' y 'response".
	//console.log('I hear you! Thanks for the request!')	
	console.log('headers', request.headers);					// request nos brinda información de la request que hacemos en el front end..
	console.log('method', request.method);
	console.log('url', request.url);

	const user = {
		name: 'John',
		hobby: 'Skating'
	};
 
	//response.setHeader('Content-Type', 'text/html');			// Describimos el tipo de contenido vamos a enviar. HTML en este caso.
	//response.end('<h1>Hellooooo</h1>')						// Contenido (?)

	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(user));

});

server.listen(3000);										// Le otorgamos el puerto donde escuchará. 'http://localhost:3000/'
*/

//--------------------------------------------------------------------------------------------------------

// AHORA USANDO EXPRESS.JS para crear un servidor.

import express, { response } from 'express';

const __dirname = process.cwd()		// Cree esto porque Node ya no tiene esta propiedad.
const app = express();

//app.use(express.urlencoded({extended: false}));	// Middleware (body-parser ya no)
//app.use(express.json());

app.use(express.static(__dirname + '/public'));

/*
app.get('/', (req, res) => {
	res.send("Getting root");	
	//console.log(req.query);				// http://localhost:3000/?name=andrei&age=31
	//console.log(req.body);		
	//console.log(req.headers);				// Vease si envío un header desde postman
	//console.log(req.params);
});
*/ 

/*
app.get('/', (req, res) => {
	res.send("Getting root");					// Enviando JSON
});

app.get('/profile', (req, res) => {
	res.send("Getting profile");				// Enviando JSON
});

app.post('/profile', (req, res) => {		// Esto funciona si realmente se envía data.
	
	// Para que esto funcione, usamos un middleware.
	console.log(req.body);					// Si queremos acceder a la información enviada en postman.
	res.send("Success");							// Enviando JSON

	//res.send("Hellooo");					// Se convierte automáticamente a HTML
	//res.send("<h1>Hellooo</h1>");			// Envío de HTML
	
	//const user = {
	//	name: 'Sally',
	//	hobby: 'Soccer'
	//}
	res.send(user);
	
})
*/

app.listen(3000);

