# HTML (Hyper Text Markup Language)

# SUMMARY

   - FIRST WEBSITE
   - DEVELOPER FUNDAMENTALS: III
   - HTML TAGS I & II
   - RELATIVE PATH VS ABSOLUTE PATH
   - HTML FORMS
   - HTML TAGS III
   - COPY A WEBSITE
   - EXTRAS

--------------------------------------------------------------------------------------------------------------------------------------

## Building our first website

Creamos un archivo "index.html" con el siguiente código (puede verse en la carpeta HTML):

   <!DOCTYPE html>	
   <html>
   	<head>
			<title>
				My First Website!
			</title>
		</head>
		<body>
			Helloooooo!!!
			This is my first website!
		</body>
	</html>

Lo arrastramos al browser y este lo interpreta. Se obtiene nuestra primera "página web".

**NOTA: Si escribimos "html" y presionamos "TAB", obtenemos un cuerpo de HTML predeterminado.**

Anotaciones mias:

- "Doctype" define el archivo html.
- "html" define donde inicia y termina el contenido html.
- "head" para la cabecera.
- "body" es el cuerpo de la página.
- Todos los tags se finalizan con el slash "/".

**IMPORTANTE: La mayoría de los servidores devuelven por default el archivo "index.html" de la página. Por eso lo llamamos así.**

--------------------------------------------------------------------------------------------------------------------------------------

## DEVELOPER FUNDAMENTALS: III

Entender como funcionan las cosas, saber resolver problemas y buscar respuestas investigando (en Google, por ejemplo).

--------------------------------------------------------------------------------------------------------------------------------------

## HTML Basic I & II

   * Header Tag:           <h1></h1>, <h2></h2>, ..., <h6></h6>
   * Paragraph Tag:        <p></p>
   * Bold Tag:             <b></b>        (No es muy utilizado, no es recomendable. Mejor utilizar Strong Tag)
   * Italic Tag:           <i></i>        (No es muy utilizado, no es recomendable. Mejor utilizar Emphasis Tag)
   * Strong Tag:           <strong></strong>
   * Emphasis Tag:         <em></em>
   * Order List Tag:       <ol> <li></li> </ol>
   * Unorder List Tag:     <ul> <li></li> </ul>
   * Line Break Tag:       <br>
   * Horizontal Line Tag:  <hr>
   * Image Tag:            <img src="" alt="" width="" height="">       (alt muestra un texto si la imagen no puede mostrarse)
   * Anchor Tag:           <a href=""></a>                              (Relaciona con otros links o documentos)

NOTA: Los tags que no requieren dos para "abrir y cerrar", se les conoce como "Self Closing HTML Tags".
      Por ejemplo: <br>, <img src="">, ...

**NOTA: Si escribes "lorem" y presionas "TAB", se escribe el "Lorem Ipsum" como borrador.
        Esto sirve para probar un diseño antes de insertar texto final**

NOTA: A un bloque completo "<></>" de cualquier tag, se le conoce como un "elemento".

**VER EL ARCHIVO "index.html" y "newpage.html"**

**IMPORTANTE: CADA TAG TIENE MUCHAS MÁS OPCIONES. BUSCAR**

--------------------------------------------------------------------------------------------------------------------------------------

## Relative Path vs Absolute Path

Relative Path: Solo se puede acceder desde tu disco local.
   
   > "file:///C:/Users/Cerjio/Documents/Cerjio/CURSOS/Zero%20To%20Mastery/Web_Development_ZTM/HTML/index.html"

Absolute Path: Cuando accedes a documentos en la red.

   > "https://i.pinimg.com/originals/95/b2/7e/95b27e3fac37841d5aabfb8e9e6f9245.jpg"

--------------------------------------------------------------------------------------------------------------------------------------

## HTML Forms

Se utiliza para colectar una entrada del usuario, como nombre, apellido, email, etc.

   <form method="" action="">
      <input type="" name="">
      <input type="" name="">
      ...
      <select>
         <option></option>
         <option></option>
         ...
      </select>
   </form>

Types: 

   - "text" dispone un campo de entrada de texto de una sola linea.
   - "radio" dispone un boton radio (para seleccionar una sola de varias opciones).
   - "checkbox" dispone un checkbox (Para seleccionar ninguna o varias opciones).
   - "submit" dispone un boton de submit (para enviar la forma).
   - "button" dispone un boton clickeable.
   - "reset" dispone un boton que resetea los valores.
   - "email" para recibir valores tipo email.

NOTA: Añadiendo "required" en el elemento "input", no se puede hacer submit sin tener dicha casilla con algún valor.

NOTA: "name" sirve para especificar que varias formas son parte de la misma "familia". Ejemplo: multiples casillas en género.
      Es necesario añadir "name" a cada campo para que submit reciba los datos.

NOTA: Luego de hacer submit con los "name", los valores del "form" se agregaron a la url (Query Strings) como una manera de
      comunicarse con un backend. Por default, esto es el método "GET".

**Buscar métodos y action del Form**

Action se utiliza para ejecutar un script específico en el servidor.

**VER EL ARCHIVO "register.html"**

--------------------------------------------------------------------------------------------------------------------------------------

## HTML Tags III

   * Comment Tag:       <!-- Comentario -->
   * Division Tag:      <div></div>             (Para dividir contenido, sirve mucho con CSS añadiendo estilos)
   * Span Tag:          <span></span>           (Igual pero para una linea específica)

--------------------------------------------------------------------------------------------------------------------------------------

## HTML vs HTML 5

HTML 5 es la evolucíón de HTML y ha corregido muchas inconveniencias.

   - Introduce la idea de Semantic Elements para websites más descriptivas. (header, footer, nav, etc)
   - Nuevas restricciones.
   - Es retrocompatible con HTML.
   - etc...

**BUSCAR MÁS**

--------------------------------------------------------------------------------------------------------------------------------------

## Copy A Website

   - Click derecho en la página.
   - Ver código fuente de la página.
   - Copiar código HTML en un nuevo archivo.
   - Ejecutar.

**VER "copywebsite.html" donde copie el html de Google Translate**

--------------------------------------------------------------------------------------------------------------------------------------

## EXTRAS

QUIZ:       https://www.w3schools.com/html/html_quiz.asp
EXERCISES:  https://www.w3schools.com/html/exercise.asp

More practices: https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5

--------------------------------------------------------------------------------------------------------------------------------------
