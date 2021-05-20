// Ejemplos para trabajar desde la consola del browser.

function sayHello() {
	console.log("Hello");
}
//sayHello();

var sayBye = function() {
	console.log("Bye");
}
//sayBye();

function sing(song) {
   console.log(song);
}
//sing("Ulalaaaaa");
//sing("Me arruinaste netflix");

function multiply(a, b){
	var c = a * b;
	console.log(c);
	return c;
}
multiply(5, 4);

// Build Facebook Exercise:

var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that I learned"
	},
	{
		username: "Sally",
		timeline: "Javascript is so cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);

function isUserValid(username, password) {
	for (var i=0; i<databse.length; i++) {
		if (database[i].username === user &&
			database[i].password === pass){
			return true;
		} 
	}
	console.log("Sorry, wrong username and password");
	return false;

};

function signIn(user, pass) {
	
	if (isUserValid(user, pass)){
		console.log(newsFeed);
	};

	//if (user === database[0].username && 
	//	pass === database[0].password) {
	//	console.log(newsFeed);
	//} else {
	//	alert("Sorry, wrong username and password")
	//}
};










