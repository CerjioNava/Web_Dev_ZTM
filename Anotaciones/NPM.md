# NPM (NODE PACKAGE MANAGER)

# SUMMARY 

   - NPM INTRO
   - NODE.JS
   - USING PACKAGES
   -
   -
   -
   -
   -

------------------------------------------------------------------------------------------------------------------------------------------------

## NPM (Node Package Manager)

Fue creado para permitir compartir código JS que hayan escrito, para cualquier persona.
En esta website se pueden obtener paquetes/modulos de código JS que alguien más escribió y que puede facilitar nuestros proyectos.
Además, hace más facil el poder compartir el proyecto con otras personas.

	https://www.npmjs.com/

Dichos paquetes contienen dos cosas:
	
	* package.json file 	(Es un metafile que describe el paquete)
	* javascript file  

Suelen haber tres tipos de paquetes:

	* Paquetes de Front End.
	* Paquetes para lineas de comando.
	* Paquetes de Back End.

Recordar que hay 3 fundamentos en un proyecto web:

	1. HTML + CSS + Javascript
	2. Github Repo + Git
	3. Package.json file

Latest Stable Version of NPM:	 https://docs.npmjs.com/try-the-latest-stable-version-of-npm

### JSON

Es un formato de archivo que posee las especificaciones del proyecto y sus dependencias. 

------------------------------------------------------------------------------------------------------------------------------------------------

## NODE.JS

Permite ejecutar Javascript fuera del browser, en vez de solo ejecutarlo en la consola o desde un archivo JS adjunto al HTML.

NOTA: Descargamos "Latest LTS Version: 14.16.1 (includes npm 6.14.12)" ya que incluye automáticamente la versión de NPM.
DESCARGA:	https://nodejs.org/en/

Para utilizar NPM y obtener los JSON:

	> npm init			// Crea un package.json file en tu directorio. Hacer esto al inicio del proyecto.
	> npm init -y

Para verificar las versiones de NODE y NPM:

	> node -v
	> npm -v 

------------------------------------------------------------------------------------------------------------------------------------------------

## USING PACKAGES

NPM permite instalar paquetes de manera "global" o "local".

	* Local: Solo se utiliza solo en el directorio que se instaló.

	* Global: Se puede utilizar en cualquier lugar de la computadora (y en el terminal). ( -g ) 

Paquetes que vamos a utilizar:

	* React

	* Live Server: Create un servidor falso y verifica cambios, actualiza automáticamente .

		> npm install -g live-server
		> live-server					// Abre el servidor en "http://127.0.0.1:8080/". (127.0.0.1 = localhost)

	* Lodash: Es una extensión de funciones de JS.

		> npm install lodash 			// Local

NOTA LODASH: https://www.npmjs.com/package/lodash

	// Load the full build.
	var _ = require('lodash');

NOTA: Podemos observar estos cambios en el "package.json". Se observan las dependencias locales.
NOTA: Los paquetes locales se instalan en el directorio "node_modules" del proyecto.
	  No necesito subir "node_modules" a Github. Basta con "package.json".
	  Es decir, si tengo "package.json", para descargar los módulos y sus versiones correspondientes, basta con hacer:

	  	> npm install

### Usando Lodash

Hacemos la prueba de uso con lodash en "script.js":

	import { without } from 'lodash'				
	console.log(without);					// Esto devuelve error, probamos:

El browser no reconoce "import". Debemos usar la sintaxis que requiere Lodash.

	var _ = require('lodash');
	console.log(_);

Instalamos el módulo browserify para los bundle y modulos:

	> npm install -g browserify				// Actualmente se utiliza webpack2
	> browserify script.js > bundle.js 		// Pasamos los cambios al bundle. 

NOTA: Cambiamos "script.js" por "bundle.js" en HTML.

### NPM Run:

	> npm run <script_from_scripts_in_json>

	// En este caso, cambiamos el "test" por "build" y añadimos el código a ejecutar.s

	> npm run build

------------------------------------------------------------------------------------------------------------------------------------------------

## PARA LA SIGUIENTE SECCIÓN

Robofriends Package.json:	https://github.com/aneagoie/robofriends/commit/9348f5f91755e6dbdeb2a6629ffb06c96a1827da

NPM Semver: 				https://semver.npmjs.com/

------------------------------------------------------------------------------------------------------------------------------------------------

## EXERCISE:BUILDING OUR SIMPLEFOLIO

	* Clonamos el proyecto:	https://github.com/cobidev/simplefolio
	* npm install
	* npm start

Simplefolio: 				https://github.com/cobidev/simplefolio
Hatchful Logo Maker:		https://hatchful.shopify.com/
SCSS vs CSS:				https://stackoverflow.com/questions/46400443/what-is-the-difference-between-css-and-scss

Podemos hacer cambios en simplefolio en "src/template.html".
También querremos cambiar el estilo en "src/style/abstracts/_variables.css"

------------------------------------------------------------------------------------------------------------------------------------------------

