# NODE.JS

# SUMMARY

   - INTRODUCTION (global, process)
   - RUNNING SCRIPTS IN NODE
   - ES2020 (globalThis)
   - MODULES IN NODE (require(), module.exports)
   - ES6 MODULES IN NODE (import, export)
   - TYPES OF MODULES
   - BUILDING A SERVER (Response, Request)
   
   **EXPRESS.JS**
   - INTRODUCTION TO EXPRESS.JS
   - EXPRESS MIDDLEWARE
   - POSTMAN (IMPORTANTE PARA BACKEND Y SERVIDORES)
   - RESTFUL APIS (STATELESS, REQUEST, RESPONSE, STATIC ASSETS)
   - EXTRA: REST’s Architectural Constraints
   - NODE FILE SYSTEM MODULE
   - EXERCISE: SANTA'S NODE HELPER

--------------------------------------------------------------------------------------------------------------------------------------------

## Introduction

De la sección NPM (**Véase NPM.md**) sabemos que:

- Node permite ejecutar Javascript fuera del browser, en vez de solo ejecutarlo en la consola o desde un archivo JS adjunto al HTML.
- Permite ejecutar JS en la máquina o cualquier lugar fuera del browser, y no desde el Javascript Engine del browser.
- Se utiliza mucho para crear servidores por su eficiencia, sea para aplicaciones Web o Moviles, etc.
- Hasta ahora estuvimos utilizando Node indirectamente desde NPM. 

Para verificar la versión de NODE en nuestra pc:

   > node -v

Podemos ejecutar código JS en nuestra terminal si hacemos:

   > node
   > console.log('hola')         // Ejemplo

Para ver la ayuda de Node:

   > .help

### global

Node no posee "window" como en el browser, sino "global" y sus propias propiedades/métodos.

   > global

Dado caso, no tenemos "fetch" que era provisto por el browser, o document.

### process

Es uno de los objetos globales que posee Node. Se refiere al proceso que se está ejecutando en ese momento en la terminal.

   > process
   > process.exit()
   > ...

**IMPORTANTE**
No solo se utiliza para la creación de servidores. Puede utilizarse en robótica y microprocesadores:     http://johnny-five.io/

--------------------------------------------------------------------------------------------------------------------------------------------

## Running script.js en Node

Creamos un script en el directorio de la forma:

   > touch script.js

Ejecutamos el script en Node:

   > node script.js

--------------------------------------------------------------------------------------------------------------------------------------------

## ES2020 (globalThis)

globalThis es una variable global. Devuelve window.

   > globalThis === window       // true  

La diferencia es que globalThis funciona fuera del browser, window solo era dentro del browser y el JS Engine.
Si intentaramos acceder a Window desde Node, obtenemos un error ya que no está definido en Node.

Node utiliza "global", y "globalThis" existe en Node para trabajar de manera universal entre los browsers.

--------------------------------------------------------------------------------------------------------------------------------------------

## Modules in Node

En Node aún no se puede importar de la manera tradicional "import". Se hace con "require()":

   > const script2 = require('./script2.js');            // Ejemplo. Se importa el script.

Para exportar tampoco se puede usar "export default". Se hace con "module.export {}":

   > module.exports = { largeNumber: largeNumber };      // Ejemplo. Se exporta un global object.

Ya que exportamos un objeto global, podemos utilizar el objeto obtenido de la manera:

   > const c = script2.largeNumber;                      // Ejemplo

--------------------------------------------------------------------------------------------------------------------------------------------

## ES6 Modules in Node

A partir del ES6, es posible utilizar imports y exports.

   > export const largeNumber = 356;
   > import { largeNumber } from './script2.js';

Sin embargo, como Node fue creado inicialmente con el Common JS, debemos especificar como queremos que Node lea los archivos y así saber que utilizamos la sintaxis de la versión ES6.

Tenemos dos maneras de solucionar esto:

   * .js to .mjs
   * "type": "module" en package.json

### .js to .mjs

Para solucionar esto, podemos cambiar la extensión de los archivos ".js" a ".mjs". Talq ue:

   > import { largeNumber } from './script2.mjs';

Sin embargo, esto no es muy recomendado.

### Desde package.json

Creamos el package.json:

   > npm init -y

Ahora simplemente añadimos "type": "module" dentro del package.json.

--------------------------------------------------------------------------------------------------------------------------------------------

## Types of Modules

1. Módulos creados por nosotros mismos, como el "script2.js" del ejemplo anterior.

2. Built-in Modules: Vienen predeterminados con Node. Algunos serían:

   * fs (file system)

      > const mod = require('fs');

   * http (para crear servidores)

      > const mod = require('http');

   * ...

3. NPM Modules. 

   > npm init -y
   > npm install nodemon --save-dev         // Por ejemplo, nodemon

   NOTA: --save-dev instala el módulo en "devDependencies", donde solo se utilizara cuando estemos desarrollando la aplicación. No se incluira cuando se hace el deployment.

   * Nodemon: Sirve para ejecutar el script en la consola mientras se realicen cambios.

--------------------------------------------------------------------------------------------------------------------------------------------

## Building a Server

Creamos un archivo "server.js" y lo añadimos al "Package.json" en los scripts que Node escuchará.

   > "scripts": {
      "start": "nodemon server.js"
     }, 

Usaremos el módulo "http" para la creación del servidor.

   > //const http = require('http');                        // Usamos el modulo "http" de Node. ESTA FORMA NO.
   > import http from 'http';                               // ESTA FORMA SI!

   > const server = http.createServer( () => {              // Creamos un servidor con http.
      console.log('I hear you! Thanks for the request!') 
   });

   > server.listen(3000);                                   // Le otorgamos el puerto donde escuchará. 'http://localhost:3000/'

### Request y Response (VER 'HTTP-JSON-AJAX+ASYNCJS.md')

Request nos brinda información de la request que hacemos en el front end.

   > const server = http.createServer( (request, response) => {     // Creamos un servidor con http. Podemos escuchar a 'request' y 'response".
      console.log('headers', request.headers);              
      
      const user = { name: 'John', hobby: 'Skating' };
      
      response.setHeader('Content-Type', 'application/json');  // Describimos el tipo de contenido vamos a enviar. Asi describimos JSON.
      response.end(JSON.stringify(user));                      // Contenido JSON.
     });

Sin embargo, este ultimo ejemplo lo hicimos utilizando módulo "http". Actualmente es mucho más eficiente trabajar con Express.js.   

IMPORTANTE: **VER server.js**

--------------------------------------------------------------------------------------------------------------------------------------------

## Express.js

Actualmente es la librería o framework por excelencia. Instalaremos Express.

   > npm install express

Ahora, creando un servidor express:

   > //const express = require('express');   // Esta era la forma ES6-
     import express from 'express';          // Forma ES6+
     const app = express();
     app.listen(3000);

Para hacer un Get Request:

   > app.get('/', (req, res) => {            // El primer parámetro es la URL.
      //res.send("Hellooo");                 // Se convierte automáticamente a HTML
      //res.send("<h1>Hellooo</h1>");        // Envío de HTML
      
      const user = {                   // Información JSON
         name: 'Sally',
         hobby: 'Soccer'
      }
      res.send(user);                  // Enviando JSON
     });

NOTA: Si tengo problemas por PID, debo encontrar el PID del proceso que debo cerrar. Typeo en el Command Prompt:

   > netstat -a -n -o | find "3000"

State of Javascript Survey:      https://stateofjs.com/

--------------------------------------------------------------------------------------------------------------------------------------------

## Express Middleware

Middleware se refiere a un "Intermediario".
En este caso, mientras el request entre, va a pasar a través del "use()" y manejar como trabajar con las acciones PUT, GET, POST, DELETE.

   > app.use((req, res, next) => {
      console.log('<h1>Hellooo</h1>');
      next();                          // Se usa Next para seguir ejecutando el resto del código.
     });

El concepto de Middleware refiere a algo que se recibe por adelantado antes de que llegue a las rutas, el request lo modifica y entonces llama "next()" para seguir ejecutando el código.

--------------------------------------------------------------------------------------------------------------------------------------------

## Postman (IMPORTANTE PARA BACKEND Y SERVIDORES)

- Permite el envío de peticiones (request) HTTP REST sobre APIs sin necesidad de desarrollar un cliente.
- Es una herramienta que nos permite hacer request a un servidor y ver que recibimos. 
- Podemos hacer GET, POST, PUT, DELETE, etc.

   * Haciendo GET en "localhost:3000/profile", recibimos los Headers, el Body, etc.

   * Haciendo POST enviando un response, añadiendo cosas al Body usando 'x-www-form-urlencoded'.
     Además debemos usar un Middleware (usamos express, body-parser ya no se usa).

   * Haciendo POST enviando JSON, usamos 'raw' y 'JSON' en Postman.

NOTA: En el curso utilizaban "body-parser", pero en las nuevas versiones de Express no es necesario. Sustituimos "body-parser" por "express".

**IMPORTANTE: SI HAY CONFUSIÓN, VEMOS EL VIDEO DE NUEVO!**

--------------------------------------------------------------------------------------------------------------------------------------------

## RESTful APIs (Representational State Transfer)

- REST es un patrón de arquitectura para la creación de Web Services. RESTful es el servicio que aplica ese patrón.
- Define un conjunto de funciones tal que los desarrolladores puedan realizar Requests y Responses, via HTTP (GET, POST, ...).
- Una API que es RESTful sigue las reglas que todos pueden aceptar y así tener compatibilidad entre distintos sistemas.

Una RESTful API usa:

   * GET para recibir un recurso.
   * PUT para cambiar un estado.
   * POST para crear un recurso.
   * DELETE para eliminar.

Es una manera de definir nuestro servidor de manera que espicifique que puede proveer y como utilizarlo.

- Por ejemplo:   En una url '/profile', esperamos recibir (GET), añadir (POST), actualizar (PUT) o eliminar (DELETE) un perfil.

### Stateless (No estático)

- REST APIs son llamadas 'Stateless' o 'No estáticas'.
- Los llamados se realizan independiente uno del otro, y cada uno contiene toda la data necesaria para completarse exitosamente. 
- De manera que cada Request que se reciba posea la información necesaria con la que el servidor puede Responder.

NOTA: Recordamos como un browser envía una Request y el servidor devuelve un Response.

### Request

Un objeto Request tiene algunas propiedades, las más utilizadas son:

   > app.get('/', (req, res) => {
      //console.log(req.query);           // http://localhost:3000/?name=andrei&age=31
      //console.log(req.body);
      //console.log(req.headers);            // Vease si envío un header desde postman
      //console.log(req.params);
     });

   * .query: Es lo que obtenemos cuando hacemos un GET query (a través de la URL por ejemplo). 

   * .body: Utilizando un middleware como '.urlencoded()' o '.JSON()', podemos recibir lo que la Request envío al body. 

   * .headers: Devuelve todos los headers. 

   * .params: Accede a los parámetros en el URL y los utiliza. Por ejemplo:

      > app.get('/:id', (req, res) => {
         console.log(req.params);               // Si inserto "http://localhost:3000/12345", recibo {id: '12345'} en consola.
        });

### Response

Podemos responder con un estado, por ejemplo:
   
   > app.get('/', (req, res) => {
      res.status(404).send("Not found :(");
     });

### Static Assets

Ahora, que pasa si quisieramos servir "Static Assets" como 'index.html', 'style.css', 'script.js', etc?
Usamos el Middleware con "express.static(/root)":

   > const __dirname = process.cwd()      // Cree esto porque Node ya no tiene esta propiedad.
     app.use(express.static(__dirname + '/public'));

--------------------------------------------------------------------------------------------------------------------------------------------

## EXTRA: REST’s Architectural Constraints

Here is a summary of the constraints.

### Client-server 

   REST applications have a server that manages application data and state. The server communicates with a client that handles the user interactions. A clear separation of concerns divides the two components. This means you can update and improve them in independent tracks.
   
### Stateless 

   Servers don’t maintain any client state. Clients manage their application state. Their requests to servers contain all the information required to process them (Using a token the server gave to the user before).
   
### Cacheable 
   
   Servers must mark their responses as cacheable or not. So, infrastructures and clients can cache them when possible to improve performance. They can dispose of non-cacheable Information, so no client uses stale data.
   
### Uniform interface 
   
   This constraint is REST’s most well known feature or rule, depending on who you ask. Fielding says “The central feature that distinguishes the REST architectural style from other network-based styles is its emphasis on a uniform interface between components.” REST services provide data as resources, with a consistent namespace. We’ll cover this in detail below.
   
### Layered system 

   Components in the system cannot “see” beyond their layer. So, you can easily add load-balancers and proxies to improve security or performance.

A RESTful service is more than a web server that exchanges JSON, or any other, documents. These constraints work together to create a very specific type of application.

** MORE INFORMATION:    https://blog.ndepend.com/rest-vs-restful/ **

--------------------------------------------------------------------------------------------------------------------------------------------

## Node File System Module

File System permite acceder a nuestro File System y realizar acciones con dichos archivos. 

   >  //const fs = require('fs');            // Importamos "File System"
      import fs from 'fs';

### fs.readFile()

   >  fs.readFile('./hello.txt', (err, data) => {     // Lee un archivo 'hello.txt' y usa un "CALLBACK".
         if (err) { console.log('errooor'); }

         //console.log(data)              // Si no se codifica, devuelve un 'raw buffer'.
         console.log(data.toString());    // Si no se especifica la codificación, usa 'utf8' que 'lee' el raw buffer.
      });

NOTA: UTF8 es un estandar en HTML5 para texto.

### fs.readFileSync()

   >  const file = fs.readFileSync('./hello.txt');
      console.log('SYNC -', file.toString());

### readFile() vs readFileSync()

   * readFile(): Es Asíncrono y usa un Callback. Para el ejemplo anterior, 'readFile' se llama pero mientras se ejecuta la función, se sigue ejecutando el resto del código hasta que la función haya finalizado y devuelva un valor.

   * readFileSync(): Es Síncrono. Para el ejemplo anterior, 'readFileSync' se llama y no se ejecuta más código hasta que dicha función termine.

   Es decir, al ejecutar ambas funciones en "script.js", primero se imprime 'readFileSync' antes que 'readFile', probablemente.

**IMPORTANTE: Cada uno tiene su uso, sin embargo a la hora de crear un servidor, 'readFile' es una mejor opción ya que al leer uno o varios archivos pesados no estaríamos deteniendo/bloqueando la ejecución y respuesta del servidor. **

### appendFile()

Podemos agregar contenido al archivo que estamos ubicando.

   >  fs.appendFile('./hello.txt', ' - Append is pretty cool!', err => {
         if (err) { console.log(err); }
      });   

NOTA: Si el archivo no existe, lo crea.

### writeFile()

   >  fs.writeFile('bye.txt', 'Sad to see you go', err => {
         if (err) { console.log(err); }
      });



**VEASE 'script.js'**

--------------------------------------------------------------------------------------------------------------------------------------------

## EXERCISE: SANTA'S NODE HELPER

NOTA: Usaremos "console.time()" y "console.timeEnd()".

CHALLENGE:  https://adventofcode.com/2015/day/1
THINK LIKE A PROGRAMMER: https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/

### Enunciado

   > https://adventofcode.com/2015/day/1

**VÉASE ./santa-challenge/script.js**

--------------------------------------------------------------------------------------------------------------------------------------------