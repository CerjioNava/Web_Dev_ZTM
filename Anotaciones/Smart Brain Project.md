# SMART BRAIN PROJECT

# SUMMARY

   - FRONTEND
   -
   -

   * BACKEND
   - /signin
   - /register
   - /profile:id
   - /image
   - Storing Users Password
   - Connecting to our Front-End
   - Database
   
   * DEPLOY
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

IMPORTANTE: PASSWORD SECURITY: https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8767508#overview

---------------------------------------------------------------------------------------------------------------------------------------------

## Connecting to our Front-End

### Desde el Front End:

   >  componentDidMount() {                     // Solo de prueba, luego lo eliminamos
      fetch('http://localhost:3001/')
        .then(response => response.json())
        .then(console.log);                   // data se usa automaticamente
     }
     // Sin embargo, esto puede devolver el error "No Access-Control-Allow-Origin" en el browser como medida de seguridad. Usamos "no-cors"

### Desde el Back End:

Instalamos 'cors' en la api, importamos y usamos en el servidor:

   > npm install cors
     import cors from 'cors';
     app.use(cors());                // Middleware para evitar el error en el browser.

Procedemos a hacer la conexión con SignIn.

---------------------------------------------------------------------------------------------------------------------------------------------

## Signin

Lo convertimos en un smart component para hacer su funcionalidad dentro del mismo.

   >  //const SignIn = ({ onRouteChange }) => {...}
      class SignIn extends React.Component { 
         constructor(props) {
            super(props);
            this.state = {
               signInEmail: '',
               signInPassword: ''
            }
         }
         ...
      }

Creamos estados en SignIn y procesos que evaluen el cambio. 
Además, al hacer submit del inicio de sesión, se comunica con el servidor y verifica el usuario. 
El servidor envía su respuesta (success o failed) y entonces viaja o no a la página home.

   >  onEmailChange = (event) => {
         this.setState({signInEmail: event.target.value});
      }

      onPasswordChange = (event) => {
         this.setState({signInPassword: event.target.value});
      }

      onSubmitSignIn = () => {
         //console.log(this.state);
         fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               email: this.state.signInEmail,
               password: this.state.signInPassword
            })
         })
           .then(response => response.json())
           .then(data => {
            if (data === 'success') {
               this.props.onRouteChange('home')
            }
           })
      }

A su vez, añadimos dichos cambios a las funciones de los componentes de SignIn, sean las casillas de email y password, y el botón.

---------------------------------------------------------------------------------------------------------------------------------------------

## RESTANTE
 
VEASE EL PROYECTO SMART-BRAIN-PROJECT Y SMART-BRAIN-API!!!!!!!!!!!!!

---------------------------------------------------------------------------------------------------------------------------------------------

## DATABASE

### Setting up our database

Creamos una base de datos 'smartbrain' con PostgreSQL.

   > psql -U postgres
   > contraseña:  root
   > CREATE DATABASE smartbrain; 

Accedemos a la base de datos.

   > psql 'smartbrain' postgres
   > contraseña:  root
 
Creamos la tabla users:

   >  CREATE TABLE users (
         id serial PRIMARY KEY,
         name VARCHAR(100),
         email text UNIQUE NOT NULL,            -- Al hacer UNIQUE, no se podrá repetir el email en toda la tabla.
         entries BIGINT DEFAULT 0,
         joined TIMESTAMP NOT NULL
      );

Creamos la tabla login:

   >  CREATE TABLE login (
         id serial PRIMARY KEY,
         hash VARCHAR(100) NOT NULL,
         email TEXT UNIQUE NOT NULL             -- Al hacer UNIQUE, no se podrá repetir el email en toda la tabla.
      );    
   
## Connecting to the database

Para conectar la base de datos a nuestro servidor Node, utilizaremos un módulo de NPM llamado "knex.js".
Existen muchas opciones, por ahora usaremos esta que conecta con Postgres, MySQL, MariaDB, SQLite2, Oracle, etc.
Existen otras opciones como "pg-promise"

**INSTALACIÓN:   http://knexjs.org/#Installation-node** 

   > npm install knex --save
   > npm install pg

Importamos y especificamos la base de datos:

   >  import knex from 'knex';
   >  const postgres = knex({
         client: 'pg',
         connection: {
            host : '127.0.0.1',
            user : 'postgres',
            password : 'root',
            database : 'smartbrain'
         }
      });

Accediendo a la base de datos:

   > postgres.select('*').from('users');     // Esto devuelve un promise, para extraer la información hacemos lo siguiente.
   > db.select('*').from('users').then(data => {
      console.log(data);
     });

#### En el Register POST:

   >  return db('users')                              // De la tabla users, obtenemos todo
         .returning('*')  
         .insert({                                    // Insertamos la data
           email: email,
           name: name,   
           joined: new Date()         
         })
         .then(user => {
           res.json(user[0]); 
         })
         .catch(err => res.status(400).json('unable to register'));

#### En el Profile GET

   >  db.select('*').from('users').where({id: id})                   // De 'users' obtenemos la data donde coincidan los ID.
        .then(user => {
            if (user.length) {                                       // Si se devolvió usuarios, devolvemos un response.
                res.json(user[0]);
            } else {
                res.status(400).json('Not Found')
            }
        })
        .catch(err => res.status(400).json('Error getting user'))

### En el Image PUT

   >  db('users').where('id', '=', id)                               // De 'users' buscamos la data donde coincidan los ID.
        .increment('entries', 1)                                     // Con esta función aumentamos las entradas por 1.
        .returning('entries')
        .then(entries => {
            res.json(entries[0])
        })
        .catch(err => res.status(400).json('Unable to get entries'))

### Nuevamente en el Register POST

Haremos el hash del password primero.        https://www.npmjs.com/package/bcrypt-nodejs

   >  const hash = bcrypt.hashSync(password);      // Encripta el password.

Es importante el concepto de TRANSACTIONS:

   Transactions are an important feature of relational databases, as they allow correct recovery from failures and keep a database consistent even in cases of system failure. All queries within a transaction are executed on the same database connection, and run the entire set of queries as a single unit of work. Any failure will mean the database will rollback any queries executed on that connection to the pre-transaction state.

Lo usamos para hacer varias acciones simultaneas. Hacemos la transacción.

   >  db.transaction(trx => {
        trx.insert({                               // Insertamos en "login"
            hash: hash,
            email: email
        })
        .into("login")
        .returning('email')                        // Devolvemos el "email" como "loginEmail"
        .then(loginEmail => {                         
            return trx('users')                    // Obtenemos la tabla 'users' (Esto es lo mismo que teníamos, pero cambiando a la transacción)
                .returning('*')  
                .insert({
                    email: loginEmail[0],          // Insertamos en 'users' los datos correspondientes
                    name: name,   
                    joined: new Date()         
                })
                .then(user => {
                    res.json(user[0]); 
                })                                 // Hasta acá
        })
        .then(trx.commit)                          // Entonces hacemos el commit 
        .catch(trx.rollback)
      })    
      .catch(err => res.status(400).json('unable to register'));

### En el Signin POST
   
   >  db.select('email', 'hash').from('login')              // De la tabla 'login' obtenemos los usuarios donde coinciden los email
         .where('email', '=', req.body.email)      
         .then(data => {
           console.log(data[0])
           const isValid = bcrypt.compareSync(req.body.password, data[0].hash);     // if true (Si las password encriptadas coinciden)
           if (isValid) {                                                           // Entonces devuelve el usuario correspondiente
             return db.select('*').from('users') 
               .where('email', '=', req.body.email)
               .then(user => {
                   res.json(user[0])
               })
               .catch(err => res.status(400).json('Unable to get user'))
           } else {
             res.status(400).json('Wrong credentials');
           }
         }) 
         .catch(err => res.status(400).json('Wrong credentials'))  


---------------------------------------------------------------------------------------------------------------------------------------------

## DEPLOY

Usaremos Heroku para desplegar nuestro proyecto. También existen alternativas como AWS, Google Cloud, Microsoft Azure, Digital Ocean, etc.

### Code Review

Hacemos esto para mejorar cosas. Siempre hay cosas que se pueden mejorar.
En este caso, hicimos algunas pocas modificaciones al FrontEnd, y en el Backend llevamos las funciones de la "app" a una carpeta de "controllers".

### Security Review

- Hicimos un chequeo en el backend, en los controladores de Register y SignIn para evitar casillas vacías.

- También vamos a mudar clarifai al backend para que nuestra API KEY no sea accesible desde el front end.
  Para ello instalamos clarifai en el backend y lo importamos en Image.js.

### Environment Variables

En vez de escuchar hacia un puerto que nosotros coloquemos (3000 por ejemplo), usamos 'process.env.PORT'.
Es decir, creamos una "Environment Variable", esto lo hace más dinámico.

En el bash:

   > PORT=3000 node server.js

Accedemos a ella en server.js:

   > const PORT = process.env.PORT;

Informacion: http://www.dowdandassociates.com/blog/content/howto-set-an-environment-variable-in-windows-command-line-and-registry/

### Deploying on Heroku

Errores que podamos tomar en cuenta durante esta sección:

   * FRONTEND:    https://medium.com/quick-code/deploying-production-build-of-react-app-to-heroku-2548d8bf6936
   * BACKEND:     https://devcenter.heroku.com/articles/getting-started-with-nodejs

Además, ya que usamos "nodemon" como una "dev-dependency" que no se instalan en el deploy, tendremos un error "nodemon: not found".
Esto lo solucionamos en el "package.json" de la manera:

   >   "scripts": {
          "start": "node server.js",
          "start:dev": "nodemon server.js"
          .....    
        },

DEPLOYING OF HEROKU:    https://devcenter.heroku.com/articles/git
HEROKU:                 https://devcenter.heroku.com/articles/git

- Nos registramos en Heroku (Cerjio19$03).

- Necesitamos dos cosas, GIT (listo) y Heroku CLI (Descargamos el instalador de windows e instalamos, 7.53).

- En Heroku subiremos nuestro Backend junto a la base de datos, para ello, vamos a nuestro proyecto API en bash:

   > heroku create         // De esta manera se crea la app en nuestro directorio de GIT.

- Verificamos el Git Remote:

   > git remote -v         // Se observan "heroku" y "origin", ahora podemos hacer push hacia Heroku.

- Hacemos push a Heroku:
   
   > git push heroku master      // en nuestro caso, es main.

- Abrimos la app con:

   > heroku open           // Para abrir el link creado anteriormente. 

- Lo anterior da error, usamos el siguiente comando para verificar los logs:

   > heroku logs --tall       // Debemos cambiar el puerto con "process.env.PORT"

NOTA: Es necesario subir los cambios a git antes de hacer los cambios en Heroku, ya que Heroku lee directamente desde el Git.

- Volvemos a hacer "heroku open" y debería funcionar.

IMPORTANTE: Ahora debemos cambiar la dirección del fetching en el frontend (localhost) por el link dado por Heroku:

   >  https://warm-shore-36617.herokuapp.com/

Sin embargo, aún es necesario crear la base de datos en Heroku. En Heroku podemos crear una nueva base de datos Postgres para nuestra app.

- Comprobamos que tenemos Heroku Postgres en nuestro proyecto:

   > heroku addons

- Ejecutamos el CLI:

   > heroku pg:info

- Y accedemos a nuestra base de datos:

   > heroku pg:psql

- Ahora creamos las tablas que necesitamos:

// Creamos la tabla users:
   >  CREATE TABLE users (
         id serial PRIMARY KEY,
         name VARCHAR(100),
         email text UNIQUE NOT NULL,            -- Al hacer UNIQUE, no se podrá repetir el email en toda la tabla.
         entries BIGINT DEFAULT 0,
         joined TIMESTAMP NOT NULL
      );

// Creamos la tabla login:
   >  CREATE TABLE login (
         id serial PRIMARY KEY,
         hash VARCHAR(100) NOT NULL,
         email TEXT UNIQUE NOT NULL             
      );    

// Podemos verificar las tablas con '\d' en el bash.

- Debemos arreglar la conexión del host en "knex". De 'heroku addons' extraemos el URL para el host. Sin embargo no sirve, hacemos:

   >  connectionString : process.env.DATABASE_URL,       // en el knex()
      ssl: true,

- Finalmente podemos acceder a nuestra app desde el frontend e interactuar con el backend de manera correcta.

//- Antes de finalizar, usaremos "serve" en el frontend para evitar algunos errores con react.

//   > npm install serve --s

STATIC SERVER:    https://create-react-app.dev/docs/deployment#static-server

### En el frontend

Finalmente, creamos una app en Heroku para el smart-brain-sn.

   > heroku login
   > heroku git:remote -a smart-brain-sn
   > git remote -v
   > git add .   
   > git commit -m "deploy frontend"
   > git push heroku main

Obtenemos:   https://smart-brain-sn.herokuapp.com/

---------------------------------------------------------------------------------------------------------------------------------------------