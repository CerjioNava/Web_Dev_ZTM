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