# SMART BRAIN PROJECT

# SUMMARY

   - FRONTEND
   -
   -

   - BACKEND
   - /signin
   - /register
   - /profile:id
   - /image
   -
   -
   -
   -
   -


Clarifai API:			https://www.clarifai.com/
React Tilt:				https://www.npmjs.com/package/react-tilt
React Parallax Tilt:	https://www.npmjs.com/package/react-parallax-tilt
CSS3 Patterns:			https://projects.verou.me/css3patterns/
Particles JS:			https://vincentgarreau.com/particles.js/
Particles React:		https://www.npmjs.com/package/react-particles-js

Clarifai Git:			https://github.com/Clarifai/clarifai-javascript#basic-use

---------------------------------------------------------------------------------------------------------------------------------------------

NOTA: 

Calling "setState()" in React is asynchronous, for various reasons (mainly performance). Under the covers React will batch multiple calls to "setState()" into a single call, and then re-render the component a single time, rather than re-rendering for every state change. Therefore the imageUrl parameter would have never worked in our example, because when we called Clarifai with our the predict function, React wasn't finished updating the state. 

One way to go around this issue is to use a callback function:

	"setState(updater, callback)"

https://reactjs.org/docs/react-component.html#setstate

---------------------------------------------------------------------------------------------------------------------------------------------

npm install clarifai-nodejs-grpc
.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)

---------------------------------------------------------------------------------------------------------------------------------------------

## BACKEND - SERVER

- Es importante tener una idea de como queremos que funcione nuestra API antes de hacerla.

OBJETIVOS: Primero crearemos el funcionamiento para las siguientes rutas.

      '/'                  --->  res = this is working             - Pagina inicial.
      '/signin'            --->  POST = success/fail               - Vamos a postear data y respondera con success o fail. Evitamos las query string.
      '/register'          --->  POST = user                       - Vamos a postear data nueva.
      '/profile/:userId'   --->  GET = user                        - Cada usuario obtendría su propio 'home screen'
      '/image'             --->  POST/PUT = user                   - Conteo de actualizaciones en el perfil
    
   Probaremos todo con Postman.

---------------------------------------------------------------------------------------------------------------------------------------------

## /signin

   - Por ahora para simular un inicio de sesión, creamos una database en el mismo "server.js" e ingresamos data de comparación desde el body.
   - Recordemos que al recibir información del req.body, necesitamos hacer "parse" con Express. Añadimos el "Middleware con use(express.json())".
   
Algo así:

   >  app.post('/signin', (req, res) => {
         if (req.body.email === database.users[0].email && 
            req.body.password === database.users[0].password) {      // Comparamos al usuario
            res.json("success");
         } else {
            res.status(400).json("error logging in");
         }
      });

      // POSTMAN  
   >  {
         "email": "john@gmail.com",
         "password": "cookies"
      }

---------------------------------------------------------------------------------------------------------------------------------------------

## /register

   >  // REGISTER POST
      app.post('/register', (req, res) => {
          const { email, name, password } = req.body;     // Obtenemos la data del body
          database.users.push({                           // Añadimos a la base de datos con el body
              id: '125',
              name: name,
              email: email,
              password: password,
              entries: 0,
              joined: new Date()        
          });
          res.json(database.users[database.users.length-1]);     // Devolvemos un response con el nuevo
      });

      // POSTMAN 
   >  {  
         "name": "Ann",
         "email": "ann@gmail.com",
         "password": "apple"
      }

NOTA: Podemos ver como se añade a la base de datos artificial si hacemos el POST en '/register' y luego GET en '/'.
      Sin embargo, al realizar un cambio en el servidor, Nodemon actualiza el servidor y por ende, la base de datos vuelve a su inicial.
      Esto podrá evitarse más adelante cuando manejemos bases de datos reales.

---------------------------------------------------------------------------------------------------------------------------------------------

## /profile:id

   >  app.get('/profile/:id', (req, res) => {
         const { id } = req.params                       // Obtiene los parametros del "id" del URL.    
         database.users.forEach(user => {                // Loop en los usuarios
            if (user.id === id) {
               return res.json(user);                    // Si existe, devuelve usuario
            } 
         })
         res.status(404).json('no such user');           // Si no existe, 404.
      });

      // POSTMAN
   > localhost:3000/profile/123      ... 124, 125

---------------------------------------------------------------------------------------------------------------------------------------------

## /image

   >  app.put('/image', (req, res) => {
         const { id } = req.body                      // Obtiene los parametros del "id" del BODY  
         database.users.forEach(user => {             // Loop en los usuarios al entrar
            if (user.id === id) {
               user.entries++;                        // Si existe, se aumenta el conteo de ingresos
               return res.json(user.entries);         // Devolvemos las entradas del user
            } 
         })
         res.status(404).json('no such user');        // Si no existe, 404.
      });

      // POSTMAN         
   >  {     
         "id":"123"
      }

**VÉASE EL "server.js"**

---------------------------------------------------------------------------------------------------------------------------------------------

## Storing User Passwords
 
Es importante manejar claves de manera cautelosa, al menos encriptandolas. Vamos a asegurarlo.
Usaremos la librería "bcrypt-nodejs" aunque está ya obsoleta, pero para objeto del curso esta bien. Actualmente se usa "bcrypt o bcrypt.js".

   > npm install bcrypt-nodejs

Almacenaremos las password en "hashes".  Así que extraemos de la página de "bcrypt-nodejs":

   >  bcrypt.hash("bacon", null, null, function(err, hash) {         // cambiamos "bacon" por password.
         // Store hash in your password DB.
      });

      // Load hash from your password DB.
      bcrypt.compare("bacon", hash, function(err, res) {
          // res == true
      });
      bcrypt.compare("veggies", hash, function(err, res) {
          // res = false
      });

El hash toma un string y lo encripta de manera que no sea facil de entender.

NOTA: Siempre al enviar cualquier información delicada al backend utilizando HTTPS en el POST BODY.
      Si se trata de claves, utilizamos "bcrypt" para enctriptarlas en Hash y así subirlas a la base de datos.

BRCYPT-NODEJS:          https://www.npmjs.com/package/bcrypt-nodejs
BCRYPT VS BCRYPT.JS:    https://github.com/kelektiv/node.bcrypt.js/wiki/bcrypt-vs-bcrypt.js

---------------------------------------------------------------------------------------------------------------------------------------------

##

---------------------------------------------------------------------------------------------------------------------------------------------

##

---------------------------------------------------------------------------------------------------------------------------------------------