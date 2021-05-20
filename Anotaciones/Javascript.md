# JAVASCRIPT

# SUMMARY

   - DEVELOPER FUNDAMENTALS: V
   - IMPORTANTE (ANOTACIONES, ALERT, PROMPT, CASTING, ...)
      
   From Section Outline:
   - TYPES
   - COMPARISON
   - VARIABLES  
   - CONTROL FLOW 
   - CONDITIONALS
   - JAVASCRIPT IN HTML
   - FUNCTIONS
   - DATA STRUCTURES
   - JAVASCRIPT TERMINOLOGY
   - LOOPS
   - KEYWORDS

-------------------------------------------------------------------------------------------------------------------------------------

## DEVELOPER FUNDAMENTALS: V

Ser capaz de resolver problemas con las herramientas que tienes.
Saber buscar respuestas en lugares como StackOverFlow.
    
-------------------------------------------------------------------------------------------------------------------------------------

### IMPORTANTE

A continuación, todo es extraído del archivo "SectionOutline.txt" y rellenado por mi.

NOTAS: 
	- El uso de ";" indica el final de una expresión (No es obligatorio, pero es mejor).
	- Para hacer comentarios usamos //.
	- Un fragmento de código que produce un valor se le llama "Expresión".

### Casting
 
Cambia de tipo a una variable.

Ejemplos:
   Number(age)             // Convierte string a number.
   var sum = Number(age) + Number(otherAge);
   sum                  // Imprime sum.

### prompt() 

Carga una ventana de entrada de texto MANUAL de parte del usuario y la pasa a String.

Ejemplos:
   prompt("What is your username") 
   var first = prompt("Enter your first name");       // Y se guarda desde la entrada del usuario en first.
      var second = prompt("Enter your last name");       // Se guarda desde la entrada del usuario en second.
      var age = prompt("Enter your age");
      var otherAge = prompt("Enter another age");

### alert() 

Devuelve un popup con el mensaje dentro.
   
Ejemplos:
   alert("This is an alert")     // Aparece el pop up con el mensaje. 

### console.log()

Devuelve un mensaje por consola.

Ejemplo: 
   console.log("This is a console message");
   console.log("Hello! ", "How are you?");

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT TYPES

   1. Number 									

   		Es el tipo para valores numéricos.
   		Ejemplos: 12/4, 12%5, 1+4, 8-9, 5 * 2, ...

   2. String									

   		Es el tipo para cadenas de texto.
   		Ejemplos:
   			"Esto es un String", 'This isn\'t very nice', "Hello "+"There!", ...
   			10 + "3", devuelve "103" casteando 10 en un string.
   			10 - "3", devuelve 7 casteando "3" en número.

   3. Boolean

   		Es el tipo booleando de (True, False).

   		Ejemplos:
    		3<2 devuelve False, 5===5 devuelve True, 3!===3 devuelve False, ...
   			true+true devuelve 2, true+false devuelve 1, false-false devuelve -1, ...

   4. Undefined

   		Es el tipo que posee una variable mientras no se le haya asignado un valor o tipo.
   		Ejemplo:
   			Si se crea una variable "var a;" sin asignarle un valor, permanece "Undefined" hasta que se le asigne un valor.
   
   5. Null

         Completamente vacío.
   
   6. <!-- Symbol (new in ECMAScript 6) -->
   
   7. Object

         **Ver la sección de Arrays y Objects**

**Revisar el "exercise1"**

NOTA: NaN (Not a Number).
      Javascript tiene muchas incongruencias, es necesario adaptarse.

NOTA: El tipo de una variable puede sobreescribirse al asignarle un valor con tipo distinto.
	  Ejemplo: "a=true;" y luego "a="Hello"", el valor en "a" se sobreescribe y ahora es un string.

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT COMPARISONS

   * !==	   - Distinto que
   * ===	   - Igual que
   * >=		- Mayor que
   * <=		- Menor que
   * >		- Mayor que
   * <		- Menor que

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT VARIABLES

Para declarar una variable capaz de almacenar datos:

   * var

   		- Deben empezar con una letra y pueden terminar con un número (opcional).
   		- No pueden empezar con números o signos, excepto "$" o " _ ".
   		- Camelcase: firstName, lastName, ...

   * <!-- let (new in ECMAScript 6)-->  
   * <!-- const (new in ECMAScript 6)-->

Ejemplos:
	var george = "These pretzels are making me thirsty";
	var three = 3;

### EJEMPLO CALCULADORA:

   var first = prompt("Enter first number");
   var second = prompt("Enter second number");
   var sum = Number(first) + Number(second);
   alert("The sum is: " + sum);

-------------------------------------------------------------------------------------------------------------------------------------

## CONTROL FLOW

El flujo de ejecución puede variarse mediante condicionales, loops, etc. Que alteran el flujo lineal de la ejecución de un programa.

   - Linear Execution
   - Conditional Execution
   -

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT CONDITIONALS

   * if
   * else
   * else if
   * <!-- ternary operator -->
   * <!-- switch -->

Ejemplo:
   var name = prompt("Enter your name: ")
   if (name === "Billy") {
      alert("Hi Billy!");
   } else if (name === "Susan") {
      alert("Hi Susan!");
   } else {
      alert("I dont know  you");
   }

Ejemplo:
   var age = prompt("What is your age?");
   if (Number(age) < 18) {
      alert("Sorry, you are too yound to drive this car. Powering off");
   } else if (Number(age) > 18) {
      alert("Powering On. Enjoy the ride!");
   } else if (Number(age) === 18) {
      alert("Congratulations on your first year of driving. Enjoy the ride!");
   }

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT LOGICAL OPERATORS

   * &&     - AND
   * ||     - OR
   * !      - NOT

**Ejemplo OR:**
   var name = prompt("Enter your name: ")
   if (name === "Billy" || name === "Bob") {
      alert("Hi Billy or Bob!");
   } else if (name === "Susan") {
      alert("Hi Susan!");
   } else {
      alert("I dont know  you");
   }

**Ejemplo AND:**
   var firstName = prompt("Enter your first name: ")
   var lastName = prompt("Enter your last name: ")
   if (firstName === "Billy" && lastName === "Smith") {
      alert("Hi Billy!");
   } else if (firstName === "Susan" && lastName === "Boyle") {
      alert("Hi Susan!");
   } else {
      alert("I dont know  you");
   }

**Ejemplo NOT:**
   if (!(name === "Billy")) {
       alert("You are not Billy! Security!)
   }

NOTA: "!true" devuelve false y "!false" devuelve true.

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT in HTML

El archivo Javascript se suele colocar al final del body, de manera que se ejecute todo el contenido HTML antes de que el JS.
Esta es la razón por la que a veces mientras no se ha terminado de cargar una página web, no se puede interactuar del todo.

Por ejemplo, si dejaramos el script atravesado:
   <body>
      <h1>Javascript in HTML. Waiting for JS</h1>                 - Se muestra esta parte HTML
      <script type="text/javascript" src="script.js"></script>    - Luego se ejecuta este script.
      <h1>JS is ready!</h1>                                       - Finalmente se muestra esta parte del HTML.
   </body>

Lo ideal sería:
   <body>
      <h1>ANTES DEL SCRIPT VA TODO EL CONTENIDO</h1>
      ...
      ...
      <script type="text/javascript" src="script.js"></script>
   </body>

Tampoco podemos dejar el JS en el <head></head> porque se ejecutaría antes que TODO el contenido. No debe ser así. 

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT FUNCTIONS

   > function name(arguments) { code }

   * var a = function name() {}           - Function Expression
   * function name() {}                   - Function Declaration
   * return
   * <!-- () => (new in ECMAScript 6) -->
  
**Ejemplo FUNCTION DECLARATION:**
      function sayHello() {
         console.log("Hello");
      }
      sayHello();

**Ejemplo FUNCTION EXPRESSION:**
      var sayBye = function() {
         console.log("Bye");
      }
      sayBye();

**Ejemplo:**
      function sing(song) {
         console.log(song);
      }
      sing("Ulalaaaaa");
      sing("Me arruinaste netflix");

NOTA: Una función sin nombre (Así como "function()")" se define como "Anonymous Function".

NOTA: Todas estas funciones se pueden acceder desde la misma consola en el browser por la relación al script.

NOTA: Si escribimos el nombre de la función solamente, obtenemos una visualización del código de la función.
      Por ejemplo: Escribimos en consola "sing" y vemos el código de la función. 

NOTA: Si una función no devuelve un valor, es undefined, y si devuelve un valor es value.

**Ejemplo:**
      function multiply(a, b){      // a y b son "PARAMETROS"
         var c = a * b;
         console.log(c);
         return c;
      }
      multiply(5, 4);               // 5 y 4 son "ARGUMENTOS"
      alert(multiply(5, 4));

-------------------------------------------------------------------------------------------------------------------------------------
 
## JAVASCRIPT DATA STRUCTURES

### Array

   > var list = ["value 0", "value 1", ..., "value n-1"];       // length "n"

NOTA: Los arrays pueden ser de números, strings, booleans, funciones, combinaciones de varios tipos e incluso arrays.

**Ejemplo:**
   var numbers = [1, 2, 3, 4];                                                      // Array de números.
   var booleans = [true, false, true];                                              // Array de booleans.
   var functionList = [function apple() { console.log("apple"); },                  // Array de funciones.
                       function grape() { ... },   
                       ...];                                                        
   var mixedList = ["apples", 4, true, undefined, function apple(){...}, ... ];     // Array mixto. No es recomendable.
   var arrays = [numbers, booleans, functionList, mixedList, [10, 20, 30, 40]];     // Array de Arrays.

**Ejemplo:**
   var list = ["tiger", "cat", "bear", "bird"];
   console.log(list[1]);                        // Devuelve "cat".
   list;                                        // Devuelve el array y una visualización de los índices de cada elemento.

**Ejemplo:**
   var matrix = [[1, 2, 3, 4], 
                 ["A", "B", "C", "D"],
                 [true, false],
                 ...]
   console.log(matrix[0][1])     // Devuelve 2
   console.log(matrix[1][3])     // Devuelve D
   console.log(matrix[2][0])     // Devuelve true

**VER LA DOCUMENTACIÓN DE ARRAYS PARA LOS MÉTODOS EXISTENTES**:   https://www.w3schools.com/jsref/jsref_obj_array.asp
   
   - shift()
   - pop()
   - push()
   - length() 
   - concat()
   - sort()
   - ...

### Object

Son colecciones de propiedades. También es un tipo de dato.

- PARECIDO a los "diccionarios" en python, que tienen llave y valor.
- Un Array se ordena por index, un object no.
- Un Array es bueno para hacer listas, mientras que Objects son muy buenos almacenando objetos.

**Ejemplo:**
   var user = {
         name: "John",
         age: 34,
         hobby: "Soccer",
         isMarried: false,
         spells: ["abrakadabra", "shazam", "boo"],
         shout: function() { console.log("AHHHHHH!") }
   };
   user.name;                       // Se accede con la llave, no con el index como en una lista.
   user.isMarried;                  
   user.favouriteFood = "apple";    // Así se añade elementos al Object. (ADD)
   user.isMarried = true;           // Asi se cambia el valor de un elemento. (UPDATE)
   user.spells[1];                  // Devuelve shazam.
   user.shout();                    // Devuelve y ejecuta la función (método).

**Ejemplo:**
   var list = [
         {
            username: "Andy",
            password: "secret"
         },
         {
            username: "Jess",
            password: "123"
         }
   ]
   list[0].password;          // Devuelve el password del primer user

NOTA: Una Función dentro de un Object, es un Método.

NOTA: Un array y un object pueden ser vacíos. Por ejemplo:  list = [], obj = {} 

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT TERMINOLOGY

   * Function Declaration:

         function newFunction() {

         }

   * Function Expression:

         var newFunction = function() {           // "= function nameFunction()" también puede ser pero no es muy frecuente.

         };

   * Expression: Cualquier cosa que produce un valor.

         1+3;
         var a = 2;
         return true;

   * Calling or Invoking a function:

         alert();
         newFunction(par1, par2, ...);

   * Assign a variable:

         var a = true;
         var b = 1;

   * Function vs Method

         function thisIsAFunction() { }
         
         var obj = {
            thisIsAMethod: function() { }
         }

         thisIsAFunction();
         obj.thisIsAMethod();

-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT LOOPING

   * for
   * while
   * do 
   * forEach (new in ECMAScript 5) 

**Ejemplo FOR:**
   var toDo = [
      "clean room", 
      "brush teeth",
      "exercise",
      "study javascript",
      "eat healthy"
   ];
   length = toDo.length;
   for (var i = 0; i < length; i++) {
      console.log(toDo[i] + "!");
      toDo[i] = toDo[i] + "!";
   }
   toDo;

**Ejemplo WHILE:**
   var counterOne = 0;
   while (counterOne < 10) {
      console.log(counterOne);
      counterOne++;
   }

**Ejemplo DO WHILE:**
   var counterTwo = 10;
   do {
      console.log(counterTwo);
      counterTwo--;
   } while (counterTwo > 0);

**Ejemplo FOR EACH:**
   toDo.forEach (function(i) {         // Represento la acción del loop mediante una función.
      console.log(i);
   }); 
   function logToDo(toDo, i) {         // Represento la acción del loop mediante una función.
      console.log(i, toDo);
   }
   toDo.forEach (logToDo); 

### Diferencia entre While Loop y Do While Loop
   - WHILE verifica la condición al inicio, antes de ejecutar el código.
   - DO WHILE verifica la condición al final, luego de ejecutar el código la primera vez.


-------------------------------------------------------------------------------------------------------------------------------------

## JAVASCRIPT KEYWORDS

   * break              --
   * case
   * catch
   * class
   * const
   * continue
   * debugger
   * default
   * delete
   * do
   * else
   * export
   * extends
   * finally
   * for
   * function
   * if
   * import
   * in
   * instanceof
   * new
   * return
   * super
   * switch
   * this
   * throw
   * try
   * typeof
   * var
   * void
   * while
   * with
   * yield
    
NOTA: En la consola del browser se puede hacer "clear()".

-------------------------------------------------------------------------------------------------------------------------------------

Siguiente Sección: DOM Manipulation

https://www.w3schools.com/js/js_htmldom.asp 
