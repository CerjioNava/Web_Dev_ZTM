# WEB FUNDAMENTALS

# SUMMARY:

   - TRACEROUTE
   - DEVELOPER FUNDAMENTALS: I
   - HTML, CSS & JAVASCRIPT
   - DEVELOPER FUNDAMENTALS: II
  
--------------------------------------------------------------------------------------------------------------------------------------

## Extras

ISP (Internet Server Provider)
DNS (Domain Name Server) ---> Posee las direcciones IP de las páginas, como una agenda telefónica.

   > URL ---> ISP ---> DNS

- Cada dispositivo conectado a la red posee una dirección IP.

- Al conectarse con un servidor, este provee los archivos HTML, CSS y JS de su dominio para que nuestro navegador pueda interpretarlo.
  Además, al actualizar la página, esta envia nuevamente los archivos así que vuelve a su estado original, sin importar los cambios que hayamos aplicado antes.

- Google IP: 172.217.7.23

- Maps: https://www.vox.com/a/internet-maps

--------------------------------------------------------------------------------------------------------------------------------------

## Traceroute

En windows: "tracert".

   > tracert google.com

Traza a la dirección que se otorga mediante "saltos" y así define el ping.
Localiza los servidores de la página.

**Buscar más de esto**

--------------------------------------------------------------------------------------------------------------------------------------

## DEVELOPER FUNDAMENTALS: I

Hay tres cosas que pueden hacer más rápida la comunicación entre cliente y servidor:

   - Location Server: Si los servidores estan cerca de ti, el salto es más rápido.
   - How Many Trips:  Mientras menos "ida y vuelta" de información, mejor.
   - Size of files: El tamaño de los archivos por transferir.

--------------------------------------------------------------------------------------------------------------------------------------

## WWW vs Internet

WWW refiere a World Wide Web (www.), es un lenguaje que todas las computadoras pueden entender.

La primera página web del mundo: http://info.cern.ch/hypertext/WWW/TheProject.html

--------------------------------------------------------------------------------------------------------------------------------------

## HTML, CSS, JAVASCRIPT

### HTML

Se utiliza para escribir el texto y contenido de la página.

### CSS

Se encarga el aspecto visual de la página.

### JAVASCRIPT

Se encarga del funcionamiento e interacción con la pagina.

En una página web, desde las herramientas de desarrollador:

   - "Elements" tab is for the HTML
   - "Style" tab is for the CSS
   - "Console" tab is to enter javascript.

EJEMPLO BÁSICO:

   - Accedemos a http://info.cern.ch/hypertext/WWW/TheProject.html donde todo esta en HTML básicamente.
   - Abrimos las herramientas de desarrollador.
   - Entramos en "Styles" (CSS) y para modificar el estilo, escribimos:

   		element.style {
   			color: blue;
   			background-color: lightyellow;
   		}

   	- Abrimos "Console" (JAVASCRIPT) y escribimos:

   		alert("Holaaaa")
   	
   	- Se crea una interacción con la pagina.

--------------------------------------------------------------------------------------------------------------------------------------

## DEVELOPER FUNDAMENTALS: II

Existen muchos browser y dispositivos que pueden renderizar una pagina web. Aunque tengan maneras similares de interpretarlo, siempre puede haber diferencias y no solo por interpretación de código, sino incluso cosas como dimensiones de pantalla o si es un celular.

--------------------------------------------------------------------------------------------------------------------------------------

