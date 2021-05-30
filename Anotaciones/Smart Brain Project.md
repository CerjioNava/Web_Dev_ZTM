# SMART BRAIN PROJECT

# SUMMARY

   - FRONTEND
   -
   -

   - BACKEND
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

##

---------------------------------------------------------------------------------------------------------------------------------------------

##

---------------------------------------------------------------------------------------------------------------------------------------------