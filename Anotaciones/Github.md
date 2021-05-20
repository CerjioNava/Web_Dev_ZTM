# GITHUB

# SUMMARY

   - COMMAND LINE (Git Bash)
   - SOURCE CONTROL
   - BASIC COMMANDS (CLONE, STATUS, ADD, COMMIT, PUSH, PULL)
   - ADVANCED TOPICS (BRANCH, MERGE)
   - OPEN SOURCE

-------------------------------------------------------------------------------------------------------------------------------------

## Command Line (Git Bash)
	
   * BASH  		|  		WINDOWS:
   * ls    		|		dir 				// Muestra una lista de lo que hay en mi directorio actual.
   * pwd   		|  		cd 					// Muestra la localización donde estoy. 
   * cd ..									// Me devuelve un directorio arriba.
   * clear 		|  		cls					// Limpia la terminal.
   * cd /			 						// Lleva al Root Directory.
   * cd ~									// Lleva al User Directory.
   * cd desktop/test						// Ejemplo de como acceder a una ruta.
   * open .		| 		start .				// Abre el directorio (carpeta) donde nos encontramos.
   * open <folder>	|	star <folder>		// Abre el directorio especificado en la ruta.
   * mkdir name 							// Crea una carpeta con el nombre asignado.
   * touch index.html | echo > index.html	// Crea el archivo específico.
   * open index.html  | start index.html 	// Abrimos el archivo recien creado.
   * open -a "Sublime Text" 				// En windows este comando es distinto.
   * open -a "Sublime Text" index.html
   * mv index.html about.html  | rename		// Renombra el archivo.
   * rm index.html about.html  | del		// Elimina/Remueve el archivo.
   * rm -r test		| deltree test			// Elimina una carpetda.
   * ...

Command Prompt: https://www.lifewire.com/command-prompt-2625840

-------------------------------------------------------------------------------------------------------------------------------------

## Source Control

Permite que multiples personas puedan trabajar en el mismo archivo desde distintos lugares.
Permite manejar problemas como el Merge Conflict. 

-------------------------------------------------------------------------------------------------------------------------------------

## BASIC COMMANDS

Los siguientes comandos son muy importantes, sin embargo en la siguiente sección se aprecia el verdadero desempeño real.

### git clone

Permite clonar el proyecto de github.

   - Nos dirigimos desde la consola al directorio donde vamos a clonar (En mi caso, la carpeta /Documentos/Github).
   - Obtenemos el link del repositorio desde la página de Github y escribimos:

   		> git clone https://github.com/CerjioNava/background-generator.git

   - Esto último clonará el repositorio en una carpeta con el nombre de dicho repositorio (/Github/background-generator).

   - Si nosotros estamos creando el proyecto, facilmente copiamos los archivos del proyecto a la carpeta clonada.
   	 Si es un proyecto ajeno, basta con haber clonado el repositorio y obtener todo lo que vamos a trabajar.

NOTA: La carpeta git en el directorio clonado permite la comunicación con Github.

### git status 

Obtenemos el status del proyecto. Aquí se muestran los "Untracked Files" y los "modified files".

   - Estando en la carpeta del proyecto, escribimos en la terminal:

      > git status

   - Se observan la Untracked List y es posible también añadir al "commit" dichos archivos.

### git add

Permite añadir al "commit" los archivos especificados.

	> git add index.html
	> git add script.js
	> git add style.css

Si quisiera añadir todos los archivos y no uno por uno:

	> git add .

### git commit

Realiza el commit al main project.

   > git commit -m "adding starting project"			// "aquí va el mensajeeeee"

### git push  

Permite subir los cambios definitivos a github y se suben al repositorio.

   > git push 

### git pull 

Permite obtener los cambios que hayan ocurrido en el repositorio.

   > git pull   

Haciendo Pull se realizan los cambios automáticamente en tu archivo.

### EXTRA

   > git diff					// Para ver las diferencias en los cambios.
 
-------------------------------------------------------------------------------------------------------------------------------------

## ADVANCED TOPICS

### Branching

Branching permite trabajar en distintas ramas del proyecto y evitar que los cambios afecten inmediatamente a la rama principal.
De esta manera se evita código erroneo o crasheo de la aplicación hasta que el código en la nueva rama este lista para unificar.

**IMPORTANTE: El main branch es la rama principal del proyecto, y es con la que el usuario interactua.**

NOTA: Toda la sección anterior es suponiendo que estan trabajando en la misma rama (Branch) main.

### git branch

Muestra los branch del proyecto. 

   - Para ver los branch del proyecto:

   		> git branch

NOTA: El branch donde nos encontramos se resalta.

   - Para crear un nuevo branch

   		> git branch littlefeature				// Puede ser cualquier nombre

   - Para cambiar de branch donde trabajamos:

   		> git checkout littlefeature

   		> git checkout -b branch_name			// También sirve para crear una branch

Ya realizado los cambios en nuestro nuevo branch, si queremos subir los commits y push, es el mismo procedimiento de siempre.
La diferencia es que se sube como un pull request para ser añadido (Merge) en la rama principal.

### Merge Conflict

Cuando realizas todos tus cambios en una nueva branch, es bueno verificar antes de subirla que tengas la última actualización de 
la rama principal (Volviendo a la main branch y haciendo pull).

	> git checkout main
	> git pull

Luego volvemos nuevamente a nuestra branch de cambios y hacemos:

	> git checkout branch_name
	> git merge branch_name 

Si ocurre un MERGE CONFLICT, se observa en las lineas de código donde ocurre el conflicto al intentar unificar.

Luego de llegar al acuerdo de cual es el cambio correcto entre tu y tu colaborador, se deja el pedazo de código correcto. 

Ahora nuevamente se hace el merge y finaliza la unificación.

NOTA: Cuando ocurre el error "The current branch conflict has no upstream...", se puede corregir con el código de resolución que te
	  devuelve la consola, o escribiendo:

	  > git push origin branch_name

-------------------------------------------------------------------------------------------------------------------------------------

## Contributing to Open Source

### Open Source

Open Source Software es software con código fuente que cualquier persona puede inspeccionar, modificar y mejorar.

NOTA: Contribuir en Open Source Projects es bueno para formar portafolio.

start-here-guideline: 	https://github.com/zero-to-mastery/start-here-guidelines
ZTM Projects:			https://github.com/zero-to-mastery

### Fork

Sirve para copiar el proyecto completo y llevarlo a tu perfil de Github.

	> git push origin test 			// 

-------------------------------------------------------------------------------------------------------------------------------------

    > git remote -v
    > git remote add  upstream
    > git remote -v

Syncing a Fork:			 https://help.github.com/articles/syncing-a-fork

Access to bash_profile:  https://www.quora.com/What-is-bash_profile-and-what-is-its-use

-------------------------------------------------------------------------------------------------------------------------------------   