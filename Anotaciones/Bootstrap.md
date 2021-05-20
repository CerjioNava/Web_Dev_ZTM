# BOOTSTRAP

# SUMMARY:

   - BOOTSTRAP
   - CDN
   - HOW TO USE BOOTSTRAP
   - BOOTSTRAP GRID
   - META TAG
   - RESPONSIVE META TAG
   - PERFECT FULL PAGE BACKGROUND
   - LAYOUT
   - MAILCHIMP
   - PUTTING YOUR WEBSITE ONLINE (GITHUB)
   - DEVELOPER FUNDAMENTALS: IV

--------------------------------------------------------------------------------------------------------------------------------------

## Bootstrap

Es un front-end framework que permite trabajar una página desde un modelo ya existente, un molde o plantilla específica.
Se maneja entre CSS y Javascript.

   * Download: https://getbootstrap.com/

### CDN (Content Delivery Network) (jsDelivr)

What is CDN?: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/

### How to use Bootstrap

Para obtener el CSS de Bootstrap, copiamos esto en <head> ANTES que otros stylesheet:

   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

Para obtener el JS de Bootstrap, copiamos esto al FINAL de <body>:

   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
   
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>

NOTA: Estos links pueden variar según la versión de Bootstrap.

De igual manera añadirmos en <body> un NavBar, Jumbotron y Modal.

--------------------------------------------------------------------------------------------------------------------------------------

## Bootstrap Grid

Ejemplo:

   <div class="container">
		<div class="row">
			<div class="col-sm-8">
				One of three columns
			</div>
			<div class="col-sm-2">
				One of three columns
			</div>
			<div class="col-sm-2">
				One of three columns
			</div>
		</div>
   </div>

Importante: 
   
   - El sistema GRID de bootstrap divide el grid en un ancho 12 columnas o espacios. 
   - De manera que al escribir "col-sm" en todas las columnas, todas se reparten equitativamente entre los 12 espacios.
   - Si escribimos en una columna "col-sm-8", serían 8/12 espacios para esa columna y 4 espacios entre las columnas restantes.
   - Si las columnas exceden los 12 espacios, se ubican en la siguiente linea.
   - Las clases "col-sm", "col-md", etc... se ajustan al contenedor que se utilice por pixeles

https://getbootstrap.com/docs/5.0/layout/grid/

--------------------------------------------------------------------------------------------------------------------------------------

## Meta Tag

The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.
The <meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

https://www.w3schools.com/tags/tag_meta.asp

### Responsive Meta Tag

Bootstrap is developed "mobile first", a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries.

   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

Con este tag, se asegura que las funciones en celular puedan usarse (zooming, scrolling, etc...).

Viewport Meta Tag:	https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag

### UTFO-8

https://www.quora.com/What-is-UTF8

--------------------------------------------------------------------------------------------------------------------------------------

## Perfect Full Page Background Image

Sirve para que la página se amolde al contenido correctamente mientras se varien las dimensiones.

CSS Perfect Background: 	https://css-tricks.com/perfect-full-page-background-image/

--------------------------------------------------------------------------------------------------------------------------------------

### Layout

<!-- Separamos en div el contenido de la página en filas, habilitamos el flex de bootstrap y se centra el contenido -->
  <div class="container d-flex align-items-center h-100">
    <div class="row">
      <header class="text-center col-12">
        <h1 class="text-uppercase"><strong>The Biggest Startup Event of the Year</strong></h1>
      </header>
      <div class="buffer col-12"></div>
      <section class="text-center col-12">
        <hr>
        <button type="button" class="btn btn-primary btn-xl">Find Out More</button>
      </section>
    </div>
  </div>

**Vease "index.html"**

--------------------------------------------------------------------------------------------------------------------------------------

## MAILCHIMP

https://mailchimp.com/en/help/add-a-signup-form-to-your-website/

--------------------------------------------------------------------------------------------------------------------------------------

## PUTTING YOUR WEBSITE ONLINE

USAR GITHUB!

--------------------------------------------------------------------------------------------------------------------------------------

## DEVELOPER FUNDAMENTALS: IV

Aunque podamos usar plantillas y cosas como bootstrap, eso no saca nuestro máximo potencial.

## ANIMATE.CSS

https://animate.style/
	
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">	
</head>

https://www.creative-tim.com/

http://www.mashup-template.com/templates.html

--------------------------------------------------------------------------------------------------------------------------------------