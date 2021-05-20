# DOM MANIPULATION

# SUMMARY

   - WHAT IS THE DOM?
   - DOM SELECTORS
   - DOM EVENTS
   - BACKGROUND GENERATOR (EXERCISE)
   - JQUERY
   - DEVELOPER FUNDAMENTALS: V

-------------------------------------------------------------------------------------------------------------------------------------
 
## Document Object Model (DOM)

Cuando una página web se carga, el browser crea un Document Object Model de la página.
El HTML DOM model es construido como un tree of Objects. **VEASE la imagen DOM Tree of Objects**

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

   * Change all the HTML elements in the page.
   * Change all the HTML attributes in the page.
   * Change all the CSS styles in the page.
   * Remove existing HTML elements and attributes.
   * Add new HTML elements and attributes.
   * JavaScript can react to all existing HTML events in the page.
   * JavaScript can create new HTML events in the page.

### What is the DOM?

The DOM is a W3C (World Wide Web Consortium) standard that defines a standard for accessing documents:

   > "El W3C DOM  es una plataforma e interfaz de lenguaje neutral que permite a los programas y scripts acceder y actualizar el contenido, estructura y estilo de un documento.

The W3C DOM standard is separated into 3 different parts:

   1. Core DOM - standard model for all document types.
   2. XML DOM  - standard model for XML documents.
   3. HTML DOM - standard model for HTML documents.

https://www.w3schools.com/js/js_htmldom.asp

NOTA: Para acceder al DOM, escribimos "document" en la consola del browser.

### Window

Window es el "padre" de un browser, es un objeto que describe al browser.
Document hereda de "Window", al igual que alert y prompt.
Aun sin escribir "window.alert" (por ejemplo), el browser asume que estas hablando desde el objeto Window.

### Javascript Engine

Cada browser tiene un "Javascript Engine" para leer los documentos JS. Por ejemplo:

   * Chrome tiene V8 Engine
   * Edge tiene ChakraCore
   * Firefox tiene SpiderMonkey
   * etc...

En resumen:    
   
   Cada Web Browser tiene un Window Object con una propiedad Document, capaz de especificar que se va a mostrar (to display).
   El DOM lee el HTML y CSS, el Javascript Engine lee el JS para entonces poder comunicarse con el DOM en cada cambio o acción.

-------------------------------------------------------------------------------------------------------------------------------------

## DOM SELECTORS 

Usando "document":

   * getElementsByTagName        // Obtiene elementos por el tag.    (por ejemplo: document.getElementsByTagName("h1"))
   * getElementsByClassName      // Obtiene elementos por la clase.  (por ejemplo: document.getElementsByClassName("container"))
   * getElementById              // Obtiene un elemento por el id.   (por ejemplo: document.getElementById("first"))  
 
   * querySelector               // Selecciona un elemento CSS.      (document.querySelector("li")  o también ("h1"), etc)       
   * querySelectorAll            // Selecciona todos los elementos.  (document.querySelectorAll("li", "h1"))
 
   * getAttribute                // Obtiene un atributo de un elemento seleccionado. (...querySelector("h1").getAttribute("random"))
   * setAttribute                // Otorga un atributo a un elemento seleccionado. (...querySelector("h1").setAttribute("random","10"))
   
   * createElement

### Changing Styles

   * style.{property}   //ok     // document.querySelector("h1").style.background = "yellow";
 
   * className          //best   // document.querySelector("h1").className = "coolTitle"
   * classList          //best   // document.querySelector("li").classList
 
   * classList.add               // document.querySelector("li").classList.add("coolTitle")     
   * classList.remove            // document.querySelector("li").classList.remove("coolTitle") 
   * classList.toggle            // document.querySelector("li").classList.toggle("donde")      //on, off, on, off...
 
### Bonus

   * innerHTML          //DANGEROUS    // document.querySelector("h1").innerHTML = "<strong>!!!!</strong>"
                        //Cambia el HTML directamente.

   * parentElement      // document.querySelectorAll("li")[1].parentElement
   * children           // document.querySelectorAll("li")[1].children 

NOTA: It is important to CACHE selectors in variables.

NOTA: Es recomendable almacenar variables y no repetir el mismo código una y otra vez, haciendo return repetidas veces.
      Por ejemplo: "var h1 = document.querySelector("h1")" y así "h1.className, h1.parentElement, ..."

-------------------------------------------------------------------------------------------------------------------------------------

## DOM EVENTS

Se refiere a los evento que el browser puede "escuchar" cuando el usuario interactua con algún elemento de la página.
Mayormente se utilizan eventos de mouse o teclado.

**VÉASE index.html y script.js**

### Callback Functions

Cuando refieres a una función como "funcion_cualquiera" y no "funcion_cualquiera()".

En el "script.js":

   When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.

Events Reference:                      https://developer.mozilla.org/en-US/docs/Web/Events
Javascript Char Codes (Key Codes):     https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

-------------------------------------------------------------------------------------------------------------------------------------

## Exercise: Background Generator

**Véase la resolución en HTML, CSS y JavaScript**

-------------------------------------------------------------------------------------------------------------------------------------

## jQuery

Es una librería de Javascript que facilita el manejo de DOM, HTML, eventos, etc, a través de una API que funciona en todos los browsers y es compatible con todos ellos.

**Ejemplo: Estructura de jQuery parecido al Event Listener para ocultar con click, desde HTML**
<script>
   $(document).ready(function(){
      $("p").click(function(){
         $(this).hide();
      });
   });
</script>

Sin embargo, jQuery hace el código muy "Imperativo", es decir, hay que decirle al programa exactamente que hacer uno a uno.

NOTA: React no es Imperativo, es Declarativo.

jQuery vs Javascript:   http://youmightnotneedjquery.com/

-------------------------------------------------------------------------------------------------------------------------------------

## DEVELOPER FUNDAMENTALS: V

Acceso al DOM.
Saber que acciones como "Inner HTML" pueden romper la estructura DOM de un archivo.
Minimizar la cantidad de manipulaciones y eventos DOM. 

-------------------------------------------------------------------------------------------------------------------------------------













