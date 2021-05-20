# REACT.JS

# SUMMARY

   - INTRODUCTION (COMPONENTS, ONE WAY DATA FLOW, VIRTUAL DOM, ECOSYSTEM)
   - CREATE REACT APP 
   - CLASS VS FUNCTIONAL APP.S
   - CLASSES VS HOOKS (INTRO)
   - REACT COMPONENT (JSX, PROPERTIES)
   - BUILDING A REACT APP I (REACT FRAGMENT)
   - BUILDING A REACT APP II & III (STATES)
   -
   -
   -
   

------------------------------------------------------------------------------------------------------------------------------------------------

## INTRODUCTION

Antes de React.js se utilizaba solo jQuery, pero no era lo más optimo.
React.js fue creado por Facebook, es mucho más versatil y predecible.
React (Native) también puede ser utilizado para la creación de aplicaciones moviles y otras, no solo sirve para browser.

### Components

Permite mucha escalabilidad, haciendo partes por partes, pequeñas o grandes, siendo capaz de unificar todo y reutilizar componentes

Los componentes puros son aquellos que bajo las mismas propiedades, devuelven el mismo resultado.

### One Way Data Flow

La data fluye en direction Parent-To-Children. Solo sus hijos saben del cambio.

### Virtual DOM

Es un Javascript Object, una copia del DOM, se entrega a React y permite que React realice cambios al DOM de la manera más optima.
De manera que en vez de ser nosotros quienes hagan todo el trabajo, React se encarga del DOM Manipulation.

### Eco-System

Tiene uno de los ecosistemas de trabajo más grandes en JS, hay muchas herramientas que trabajan con React.

	* NPM
	* Node.js
	* Babel
	* Webpack2
	* Reactrouter
	* ...

------------------------------------------------------------------------------------------------------------------------------------------------

## Create React App

NOTA: Esta sección es un poco obsoleta en cuanto a procedimiento. Véase la siguiente.

	> npm install -g create-react-app 	// Nosotros instalamos la versión 4.0.3

	> create-react-app robofriends		// Incluso me devuelve una lista de comandos NPM (start, run build, test, run eject, ...)

En el "package.json" se observan las dependencias de React (react, react-dom, react-script, ...).
React se encarga de las dependencias, no necesitamos andar descargando el monton de modulos manualmente.
Las versiones serán las mismas si alguien más trabaja en el proyecto (recordando el uso de "package.json").

### public folder

En el directorio "public" encontramos nuevos archivos como:

   * gitignore: Es un archivo que lee Github al hacer un push. De manera que ignora lo que se especifique y no sube espacio innecesario al 
   				repositorio. Por ejemplo: No sube "/node_modules" y otros archivos.

   * manifest.json: Permite a las personas descargar shortcuts para el website y tener iconos de escritorio.
   					Desde index.html: manifest.json provides metadata used when your web app is installed on a user's mobile device or desktop.

   * favicon.ico: Es el icono de la página web.

La carpeta "src" es la más importante, donde todo ocurre. Encontramos archivos como "index.js" (script principal).

### REACT UPDATE

Si necesitamos trabajar con una versión más actualizada en un proyecto que ya existe, basta con dirigirnos a "package.json" y cambiar la versión de "react-scripts" a la que necesitamos, luego correr en la carpeta del proyecto "npm install" y esto descargará todo de la versión.

NOTA: No solo puedes actualizar "react-scripts", sino el resto de dependencias, pero no es necesario del todo.

Create React App NPM:		https://www.npmjs.com/package/create-react-app
Overview:					https://github.com/facebook/create-react-app
Extension for VSC:			https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack
Updates 2.0:				https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

------------------------------------------------------------------------------------------------------------------------------------------------

## Create React App (Updated)

	> npx create-react-app my-app
	> cd my-app
	> npm start

### NPX 

Es un package runner tool, que viene con cualquier versión npm 5.2+

Create React App Documentation:		https://create-react-app.dev/docs/getting-started/
NPX:								https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b

------------------------------------------------------------------------------------------------------------------------------------------------

## Class vs Functional App.js

En versiones anteriores de React, en el archivo "/src/App.js" se utilizaba una clase App, en vez de una función como lo es actualmente.
Sin embargo, el funcionamiento es el mismo.

NOTA: Actualmente utilizamos Create React App 4, sin embargo el uso es similar.

------------------------------------------------------------------------------------------------------------------------------------------------

## Classes vs Hooks

- Actualmente, para crear componentes de React es más utilizado Hooks.

- Sin embargo, Hooks es muy específico a React, mientras que las Classes son más comprendidas en otras formas de web dev.

NOTA: Para efectos del curso, utilizaremos Classes la mayor parte del tiempo ya que se hizo con versiones anteriores de React.
 
------------------------------------------------------------------------------------------------------------------------------------------------

## First React Component

La idea de crear distintos componentes es que esten aislados entre si de manera individual.

- En "/src/index.js" comentamos App.
- Crearemos nuestro componente Hello para sustituir por App. 
- Los componentes se nombran con su inicial en mayúscula, es el estandar.
- También creamos un archivo Hello.css para el Hello.js (solo por esta parte, es de prueba).
- Instalamos "tachyons" que es similar a bootstrap.

	> npm install tachyons

- Importamos tachyons en index.js y añadimos la clase en Hello.js (className="f1 tc").

### JSX

Es un tipo de Javascript que nos permite escribir sintáxis HTML dentro del código.

NOTA: Es necesario importar React si estamos escribiendo JSX.

### Properties

Propiedades de un componente (lo que recibe y maneja un componente).

------------------------------------------------------------------------------------------------------------------------------------------------

## Building a React App I

Vamos a eliminar cosas que no necesitamos:

   - Hello.js y Hello.css
   - App.js y App.css
   - App.test.js
   - logo.svg

NOTA: Abrir una carpeta con muchos archivos en sublime consume mucha memoria.

- Creamos el "card" component para la página web.

- Usaremos la API de "robohash" para las imagenes en Card.js.                   

> https://robohash.org/
> <img alt="robots" src="https://robohash.org/test?200x200"/>

- Añadimos varios componentes Card en index.js con <div>.

- Recordando tachyons, hacemos una clase en Card.js:

> className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'

- En el curso nos dan "robot.js" que es un archivo con un diccionario de objetos de usuarios de ejemplo. Trabajaremos con propiedades.

- Importamos "robots.js" en index.js. Sin embargo, robots exporta sin default, por lo que debemos "desestructurarlo" al importarlo. {}

> export const robots = [{}]
> import { robots } from "./robots.js";

- Ahora podemos otorgarle propiedades al componente Card en index.js (id, name, username, email).

> <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />      

- Hacemos que Card.js acepte parámetros. Ahora podemos utilizarlas dentro del JSX.

// Opción 1:
> const Card = (props) => {
   const { name, email, id } = props;
   return {... props.id... props.name....}
}

// Opción 2 (MEJOR): 
> const Card = ({ name, email, id, username} ) => {
   return {... name...id...}
}

// Ejemplos:
> src={`https://robohash.org/${props.id}test?200x200`}/>
> src={`https://robohash.org/${id}test?200x200`}/>
> <h2>{props.name}</h2>

### React Fragment

NOTA: En el componente se suele devolver un solo elemento del componente, por eso haciamos <div></div> o devolvíamos un arreglo de elementos,
      sin embargo en la nueva versión de React podemos devolver un "Fragmento":

      > function FAQ() {                              // El problema es que no recibe ClassName
            return (
               <React.Fragment>
                  <p>Lo que sea</p>
               </React.Fragment>
         );
      }

------------------------------------------------------------------------------------------------------------------------------------------------

## Building React App II & III

- Recordando el One Way Data Flow, podríamos crear un componente padre para todas las cartas. Creamos CardList y añadimos a index.js.

> <CardList robots={robots}/>
      
- En el CardList hacemos return de las cartas mediante MAP.

- IMPORTANTE: Cada componente de Card debe tener una Key Property.
              El key prop no debe ser cambiante, debe ser un Unique ID.

- Podemos crear ahora una App.js como el componente padre de todo, que contenga la estructura de la página, el cardlist, searchbox, etc.

- Para comunicar entre distintos hijos, utilizamos STATE.

### State
 
Es un objeto que describe tu aplicación. A diferencia de las propiedades, state puede cambiar.
Para este caso, cambiariamos los "robots" que se muestran desde el "robot.js".
Es decir:

   > El componente padre le otorga un State al hijo, y cuando el hijo lo recibe es una propiedad que el hijo no puede cambiar.

- Lo único que puede cambiar un State es un Container Component (App por ejemplo).

- Para utilizar correctamente un state, necesitamos una "class". Cambiamos la función App por una clase App con render.

- Luego de crear el state, los robots mostrados serán provenientes del state, ya que dicho state devolverá los que se quieran específicar.

> <CardList robots={this.state.robots}/>

- Creamos una función de evento en App para el SearchBox cuando existe un cambio en el SearchField. En Searchbox ejecutamos OnChange.
  Dicha función filtrará la lista de robots según la entrada de texto y devolverá la lista filtrada.

## IMPORTANTE

   Para todo lo que provencha de React, es mejor utilizar Arrow Functions ya que nos aseguramos que "this" se refiere a donde se creó.
      > onSearchChange = (event) => {}

   Y no utilizar esta sintáxis, porque "this" se referirá a donde se ejecutó.
      > onSearchChange(event) {}

   Para cambiar valores de un State, es recomendable utilizar setState():
      > this.setState({ searchfield: event.target.value});

- Finalmente, podemos añadir la lista de robots filtrados al CardList, React se encarga de actualizar lo necesario.

NOTA: El Virtual DOM colecta el State y React lo utiliza para renderizar el resto.

NOTA: Esto convierte a un componente en un "Smart Component".

### En resumen

- Cuando ocurre el evento de cambio en el searchbox, se ejecuta OnSearchChange para cambiar el state del Searchfield.
- Con el searchfield se comunica con CardList mediante la nueva lista filtrada.
- CardList entonces muestrea la nueva lista filtrada que recibió, solo con las cartas especificadas con las propiedades.

El One Way Data Flow:

             APP     
            /   \
   CardList       SearchBox
      |
     Card


Handling Events:     https://reactjs.org/docs/handling-events.html

### Styling the App

Hacemos el siguiente cambio en "index.css":
   > background: linear-gradient(to right, rgba(7, 27, 82, 1) 0%, rgba(0, 120, 120, 1) 100%);

Hacemos el siguiente ambio en "App.css" (Extraído de google):
   > @font-face {
      font-family: 'SEGA LOGO FONT';
      font-style: normal;
      font-weight: normal;
      src: local('SEGA LOGO FONT'), url('SEGA.woff') format('woff');
     } 
     h1 {
      font-family: 'SEGA LOGO FONT';
     }

Ademas importamos 

Using @font-face:    https://css-tricks.com/snippets/css/using-font-face/

------------------------------------------------------------------------------------------------------------------------------------------------

## Building a React App IV

En la vida real no utilizamos una base de datos manual como la tenemos en "robots.js", realmente se utiliza algo como una API.

Por ejemplo, nuestra información "robots.js" fue extraida de JSONPlaceHolder:    https://jsonplaceholder.typicode.com/users

### fetch()

Es un método del Window Object. Nos permite hacer request a servidores.
Añadimos la data desde una API de la siguiente manera:

   >  componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users=> this.setState({ robots: users }));     
      }

### Lifecycle Hooks

En React, podemos utilizar "Lifecycle Hooks", y son métodos que se ejecutan automáticamente cuando "App.js" se carga en la website.
Tenemos 4 secciones de métodos:

   1. Mounting: Estos métodos se llaman en el siguiente orden cuando una instancia de un componente está siendo creado e insertado en el DOM.

      * constructor()
      * static getDerivedStateFromProps()
      * render()
      * componentDidMount()
   
   2. Updating: Se debe a cambios en los "props" o "state". Se llaman en el siguiente orden cuando un componente se está re-renderizando:
   
      * static getDerivedStateFromProps()
      * shouldComponentUpdate()
      * render()
      * getSnapshotBeforeUpdate()
      * componentDidUpdate()

   3. Unmounting: Se llama cuando un componente está siendo removido del DOM:

      * componentWillUnmount()

   4. Error Handling: Se llaman cuando hay un error durante el renderizado, un método Lifecycle o un constructor de cualquier componente hijo:

      * static getDerivedStateFromError()
      * componentDidCatch()

NOTA: Mounting ocurre en ReactDOM.render(<App />, document.getElementById('root'));


LifeCycle Hooks:     https://reactjs.org/docs/react-component.html
fetch():             https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

------------------------------------------------------------------------------------------------------------------------------------------------

## Building a React App V & VI

Crearemos un componente Scroll para el Cardlist.

A parte de Props y State, tenemos Children.

### Children

Todo componente en React posee esta propiedad. Lo utilizamos para crear un scroll sobre el cardlist.

**VÉASE Scroll.js**

### Folder Structure

A medida que un proyecto crece, es importante mantener un orden en todos los archivos del proyecto. Para ello crearemos algunas carpetas.

   * components: Para los componentes que hemos creado, como CardList, SearchBox, Scroll.

   * containers: Para los Smart Components, que poseen States, Lifecycle hooks, class, etc.


### NPM RUN BUILD

Así hacemos el build de nuestro proyecto, React se encarga de hacer todo el minify y procesos que habíamos visto antes.

Robofriends project: https://github.com/aneagoie/robofriends

------------------------------------------------------------------------------------------------------------------------------------------------

## Error Boundary

Si un componente falla, necesitas que la UI siga funcionando, no que se quiebre el proyecto.
Idealmente podemos envolver un componente y si este falla, podemos atraparlo en el componente de Error Boundary.

Funciona en producción, no durante el desarrollo.
El user ve el error boundary, mientras nosotros podríamos ver el error como tal (?).

**VÉASE ErrorBoundary.js**

------------------------------------------------------------------------------------------------------------------------------------------------

## Deploying Our React App

Seguir la siguiente página:
> Github Pages with CRA:     https://create-react-app.dev/docs/deployment/#github-pages


------------------------------------------------------------------------------------------------------------------------------------------------

