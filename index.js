document.querySelector(".hamburger").addEventListener("click", menubarButton);
document.querySelector("#inicio").addEventListener("click", mostrarInicio);
document.querySelector("#form").addEventListener("click", mostrarForm);
document.querySelector("#saludar").addEventListener("click", saludar);
document
	.querySelector("#cerrar-saludar")
	.addEventListener("click", cerrarSaludar);
document
	.querySelector("#guardar-datos")
	.addEventListener("click", guardarDatos);

const SeccionInicio = document.querySelector("#seccion-inicio");
const SeccionFormulario = document.querySelector("#seccion-formulario");
const Msj = document.querySelector(".msj");
const Nombre = document.querySelector("#nombre");
const Apellido = document.querySelector("#apellido");
const Correo = document.querySelector("#correo");
const Lista = document.querySelector("#lista");

let listaID = 0;

function menubarButton() {
	let menu = document.querySelector(".menu");
	if (menu.style.display == "flex") {
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	}
}

function mostrarInicio() {
	SeccionInicio.style.display = "flex";
	SeccionFormulario.style.display = "none";
}
function mostrarForm() {
	SeccionInicio.style.display = "none";
	Msj.style.display = "none";
	SeccionFormulario.style.display = "flex";
}

function saludar() {
	Msj.style.display = "flex";
}
function cerrarSaludar() {
	Msj.style.display = "none";
}

function guardarDatos() {
	let datos = `<tr id="lista-${listaID}"><td>${Nombre.value}</td><td>${Apellido.value}</td><td>${Correo.value}</td><td><a href="#" onclick="destroy('lista-${listaID}')"><i class="material-icons">delete</i></a></td></tr>`;
	//Lista.innerHTML += datos;
	Lista.insertAdjacentHTML("beforeend", datos);
	listaID++;
	Nombre.value = "";
	Apellido.value = "";
	Correo.value = "";
}
function destroy(id) {
	document.getElementById(id).remove();
}
