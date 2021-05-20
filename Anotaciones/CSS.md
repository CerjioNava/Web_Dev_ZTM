# CSS (Cascading Style Sheet)

# SUMMARY
	
   - CSS FUNDAMENTALS
   - CSS & HTML
   - CSS PROPERTIES (AND COLORS)
   - CSS SELECTORS (AND CHEAT SHEET)
   - TEXT AND FONT
   - IMAGES IN CSS
   - BOX MODEL
   - PX VS EM VS REM
   - CSS QUIZ, EXERCISES AND RESOURCES
   
   - CRITICAL RENDER PATH
   - FLEXBOX
   - CSS 3
   - RESPONSIVE UI

   - CSS GRID
   -


---------------------------------------------------------------------------------------------------------------------------------------

## CSS FUNDAMENTALS

CSS refiere a Cascading Style Sheet.
Esto significa que baja en la hoja como una cascada, de arriba hacia abajo haciendo cada modificación en orden.
Si modificaramos dos veces el mismo elemento, la última modificación (selector) sería la final y mostrada en la página.

**VER "style.css"**

### First CSS

La base de CSS es la siguiente:

   Selector {
      Property:value;
   }

---------------------------------------------------------------------------------------------------------------------------------------

## CSS & HTML

Hay tres maneras de hacer la referencia CSS en el archivo HTML:

   1. Relacionando el archivo "css" con el "html" mediante el elemento <head></head> con el tag "link" desde el html.

      <link rel="stylesheet" type="text/css" href="">

	  NOTA: Se pueden tener multiples archivos CSS para distintos html que referencien.

   2. Realizando modificaciones en los tags usando "style" de manera individual. Por ejemplo:

   	  <header style="background-color: blue; color:purple"></header>

   	  NOTA: Puede ser en casi cualquier tag.

   3. Creando un Style Text dentro del HTML:

   	  <style>
   	  		li {
   	  			background-color: purple;
   	  		}
   	  </style>

   	  NOTA: 

En una página, desde las herramientas de desarrollador también se puede comprender el CSS y modificarlo a gusto.

---------------------------------------------------------------------------------------------------------------------------------------

## CSS Properties

Recordando de la sintaxis:
   Selector {
      Property:value;
   }

Se refiere a las propiedades que vamos a modificar en la página. Por ejemplo:

   - color:red;   
   - background-color: cyan;
   - text-align: center;
   - border: 5px dashed purple;
   - background-image: url(background.png);
   - background-size:  cover;
   - etc...

**VÉASE "style.css"**

Para ver más propiedades:  https://css-tricks.com/almanac/

### CSS Colors

No solo podemos darle color con los predeterminados de CSS, sino también por código hexadecimal o RGB. Por ejemplo:

   - color: #AC4E00;
   - color: rgb(255, 176, 90);
   - border: 5px dashed rgb(52, 2, 80)
   - border: 5px dashed rgba(52, 2, 80, 0.5)          (rgba para añadir opacidad.)

Paleta de colores: https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF

---------------------------------------------------------------------------------------------------------------------------------------

## CSS Selectors

Si quieres aplicar las mismas propiedades a varios elementos en un selector, basta con hacer varias selecciones a la vez.
Por ejemplo:

   h2, p, body { Property:Value; ... }

Cascade and Inheritance:   https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance
CSS Selector Reference:    https://www.w3schools.com/cssref/css_selectors.asp

### CSS Cheat Sheet (Sacado del curso)

**IMPORTANT: Cascading Style Sheets at the most basic level it indicates that the order of CSS rules matter.**

   
   * .class                   - Sirve para diferenciar un grupo de elementos.
   
   * #id                      - Parecido a class, pero solo se puede utilizar una sola vez. Aquí es util <div></div>.
   
   * *                        - Todos los elementos.
   
   * element                  - Seleccionando el elemento, por ejemplo:          h{ ... }, body{ ... }, etc
   
   * element, element         - Selecciona multiples elementos, por ejemplo:     h, p, body... { ... }    
   
   * element1 element2        - Selecciona todo los element2 dentro de element1. "h p" son todos los "p" dentro de "h"
   
   * element1 > element2      - Selecciona todo los element2 que tengan como padre un element1.
   
   * element1 + element2      - Seleeciona todo element2 que esta exactamente despues de un element1.
   
   * :hover                   - Cuando se posiciona el mouse "sobre" el elemento, se aplica el selector. (i.e. h1:hover)
   
   * :last-child              - Solo el "last child" de cada web tag se le aplicará el selector.
   
   * :first-child             - Solo el "first child" de cada web tag se le aplicará el selector.
   
   * !important (not recommended)   - Sobreescribe cualquier selector posterior en cascada del mismo elemento y aplica solo el
                                      "importante" que fue descrito.

   * element.class

   * :nth-child(A)                                      
   * :nth-last-child(A)          "plate:nth-child(3)"

What selectors win out in the cascade depends on:
      
   * Specificity: Determines which style declarations are ultimately applied to an element.

      Calculate Specificity: Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.

      Specificity Calculator:    https://specificity.keegan.st/
   
   * Importance: Refiere al "!important".
   
   * Source Order: El último estilo añadido a la página es el último leido. Por ejemplo:

      <link rel="stylesheet" type="text/css" href="style.css">
      <link rel="stylesheet" type="text/css" href="style2.css">       (SE LEE ESTE FINAL)

**VÉASE "style.css"**

### CSS EXERCISES

https://css-diner.netlify.app/#        ---> **ESTAN BUENOS**

"orange.small"

---------------------------------------------------------------------------------------------------------------------------------------

## TEXT AND FONT

   * text-decoration: underline;       (underline, line-through, etc...)
   * text-transform: uppercase;        (uppercase, undercase, etc...)
   * line-height: 20px;
   * font-style: italic;               (italic, oblique, etc...)
   * font-weight: bold;
   * font-size: 115%;
   * font-family: "Times New Roman";
   * font-family: "Times New Roman", Georgia, ...;      (i.e. Si el dispositivo no tiene Times New Roman, imprime en Georgia, sino ...)
   * ...

Pasa asegurarnos que el Font se pueda imprimir en cualquier dispositivo, se coloca como archivo dentro de la página. Por ejemplo:

   - Vamos a Google Fonts:  https://fonts.google.com/
   - Seleccionamos nuestra fuente y obtenemos de la página el tag completo:

      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">

   - De igual forma se especifica en CSS obtenido de la página:

      font-family: 'Poiret One', cursive;
 
---------------------------------------------------------------------------------------------------------------------------------------

## Images in CSS

img {
   float:left;
   ...
}

---------------------------------------------------------------------------------------------------------------------------------------

## BOX MODEL

Ejemplo:

<div class="boxmodel">A</div>

.boxmodel {
   border: 5px solid green;
   display: inline-block;
   /* padding: 20px; * /               / * Espaciamiento dentro del bloque* /
   padding: 5px 20px 5px 20px;      / * Top, Right, Bottom, Left * /
   /* margin: 20px;                  / * Espaciamiento entre bloques * /
   /* margin: 0px 20px 0px 20px; * /   / * Tambien con dos dimesiones asume arriba-abajo, izquierda-derecha: * /
   margin: 0px 20px;
   width: 32px;
   height: 55px;
}

**VER LA IMAGEN "Box Model.png"**

---------------------------------------------------------------------------------------------------------------------------------------

## px vs em vs rem

<p><span>Inicio de Parrafo</span> Resto del parrafoooooo</p>

   * px: Define el tamaño por pixeles.
   
   * em: Define el tamaño en proporción al contenido.
   
   * rem: Define el tamaño en proporción al elemento raíz (root element "html"), sin importar el contenido aquí.

---------------------------------------------------------------------------------------------------------------------------------------

### CSS QUIZ

https://www.w3schools.com/css/css_quiz.asp

### CSS EXERCISES

https://www.w3schools.com/css/exercise.asp

### ZTM RESOURCES

https://zero-to-mastery.github.io/resources/
https://zerotomastery.io/resources/

---------------------------------------------------------------------------------------------------------------------------------------

## CRITICAL RENDER PATH

Si un archivo del cual dependa algún contenido de la página, no se obtiene, puede que dicho contenido no se muestre.

**EJEMPLO:**
   - Cuando entras a una página, pides al servidor el contenido HTML. 
   
   - Dentro del HTML puede haber una relación a un archivo CSS, así que ahora se le pide nuevamente al servidor el archivo CSS correspondiente y este lo otorga.
   
   - Luego si también se pide algun archivo de un link exterior al servidor (como una fuente o imagen en URL), ahora se extrae de ese servidor externo para añadirlo a la página.

Si alguno de estos archivos falta puede haber contenido no posible de mostrar, dependiendo del código establecido.

### CSS MINIFY

Es un método para simplificar el archivo CSS y evitar que pese demasiado por grandes cantidades de lineas de código.
Esto se lleva a cabo eliminando todos los espacios en blanco (Se ve desordenado pero pesa menos).

https://www.cleancss.com/css-minify/

NOTA: Esta técnica también se aplica en JavaScript.

---------------------------------------------------------------------------------------------------------------------------------------

## FLEXBOX

Es importante para distribuir el contenido en la página, alinear, posicionar, etc.
A pesar de que existan muchas herramientas como Boostrap y otras librerías, flexbox es la más eficiente y elegante.

- Flexbox Guide:    https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- Flexbox Froggy:   http://flexboxfroggy.com/#es         (SIRVE PARA PRACTICAR, ES BUENISIMO)

- Flexbox Cheat Sheet:  https://darekkay.com/dev/flexbox-cheatsheet.html

---------------------------------------------------------------------------------------------------------------------------------------

## CSS 3

Al igual que HTML y HTML, CSS también ha evolucionado y se ha adaptado a nuevas utilidades.
CSS 3 es la evolución más reciente en la actualidad.

En CSS 3 se añaden propiedades como:

   - transition      (all 1s, ...)
   - transforms      (scale, ...)
   - animation    
   - ...   

Para saber cuales browser soportan dichas propiedades: 

   - W3C Browser Support Reference: https://www.w3schools.com/cssref/css3_browsersupport.asp

En algunos browsers oficiales, algunas propiedades solo son soportadas con los prefijos necesarios:

   * -ms-      (Edge/Internet Explorer) 
   * -moz-     (Firefox)
   * -webkit-  (Google Chrome, Safari, Opera)
   * -o-       (Opera)

EJEMPLO:

   * Antes para aplicar "box-shadow:..." debías utilizar: "-moz-box-shadow:...", "-ms-box-shadow:...", etc.

También puede verse:

   - CanIUse.com:                   https://caniuse.com/
   - Should I Prefix:               http://shouldiprefix.com/
   - Autoprefixer Tool:             https://autoprefixer.github.io/

Para aprender más de Transform y Transitions:   https://robots.thoughtbot.com/transitions-and-transforms

---------------------------------------------------------------------------------------------------------------------------------------

## Responsive UI

Significa que la website se adapta a cualquier tamaño de la pantalla (parecido a como hicimos flex-wrap).
Sin importar de si el usuario entro desde una pc, tablet, android, etc.

https://www.freecodecamp.org/learn/responsive-web-design/basic-css/

---------------------------------------------------------------------------------------------------------------------------------------

**VÉASE LA SECCIÓN DE BOOTSTRAP. La separe de esta**

---------------------------------------------------------------------------------------------------------------------------------------

## CSS GRID

### CSS GRID vs FLEXBOX vs BOOTSTRAP

   - Realmente es bueno utilizar dos a la vez, como Grid+Flexbox.
   - Realmente no hay uno mejor que otro, sino la situación que lo amerite.

   - Flexbox es muy bueno si solo tienes una dimensión (solo columnas o solo filas, por ejemplo).
   - Grid es mejor para cuando tienes dos dimensiones (filas y columnas).
   - Es mucho más valorado saber trabajar con Grid y Flexbox, que Bootstrap.

### CSS GRID

NOTA: "grid-gap" ahora es "gap".    https://developer.mozilla.org/en-US/docs/Web/CSS/gap

**Véase "CSS Grid/index.html"**

CSS GRID CHEATSHEET:    https://grid.malven.co/
CSS GRID EXERCISES:     http://cssgridgarden.com/

### CSS LAYOUT (EXERCISE)

   - Navigation Bar
   - Media Queries:     https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
   - Cover
   - Grid + Footer
   - Pretify

**VÉASE "CSS Layout/index.html"**

---------------------------------------------------------------------------------------------------------------------------------------
