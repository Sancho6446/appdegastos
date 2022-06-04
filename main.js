var cantPersonas = 0;
var suma = 0;
function myFunction() {
	var division;
	var persona;
	var paga;
	persona =
		String(document.getElementById("personas").value) ||
		"Ingrese un nombre porfavor";
	paga = parseFloat(document.getElementById("plata").value) || 0;
	if (persona != "Ingrese un nombre porfavor") {
		cantPersonas++;
		suma = suma + paga;
	}
	division = suma / cantPersonas;
	total.innerHTML = `$${suma}`;
	aporte.innerHTML = `$${division}`;
	cantPersona.innerHTML = `${cantPersonas}`;

	var lista = document.createElement("li");
	const listaDesordenada = document.getElementById("ul1");
	lista.classList.add(
		"list-group-item",
		"d-flex",
		"justify-content-between",
		"lh-sm"
	);
	lista.id = "li" + cantPersonas;
	listaDesordenada.appendChild(lista);

	var nombre = document.createElement("h6");
	nombre.classList.add("my-0");
	nombre.textContent = persona;
	lista.appendChild(nombre);

	var dinero = document.createElement("span");
	dinero.textContent = "$" + paga;
	dinero.classList.add("text-muted");
	lista.appendChild(dinero);
}
