var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Función que hace set del gradiente.
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// Evento para cambiar el color del background
color1.addEventListener("input", setGradient);		
color2.addEventListener("input", setGradient);		

// NOTA: Esto también pudo llevarse a cabo desde el html.
// <input oninput="setGradient()" class="color1" ... >
// Sin embargo, esto no es recomendable ya que solo puedes añadir una sola función.
// Javascript da más opciones y flexibilidad.