// DOM EVENTS

// Button Click Me
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
	console.log("CLICK!");
});
button.addEventListener("mouseenter", function() {
	console.log("Hoveeer!");
});
button.addEventListener("mouseleave", function() {
	console.log("Dont leave me :(");
});


// Button & Input Enter
var button2 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length	
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value = "";	
}

function addListAfterClick() {
	console.log("Enter is working");
	if (inputLength() > 0) {
		createListElement();
	}	
}

function addListAfterKeyPress(event) {
	//console.log(event.which);
	if (inputLength() > 0 && event.keyCode === 13) { 		// KeyCode 13 es "enter". También funciona event.which
		createListElement();
	} 
}

button2.addEventListener("click", addListAfterClick);		// Callback Function
input.addEventListener("keypress", addListAfterKeyPress);
