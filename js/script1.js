//Elementos cambiar tipografía
let elemento = document.getElementById("nombre");
let nombreOr = elemento.innerText;

//Funciones cambiar tipografía
elemento.addEventListener("mouseover", function () {
    elemento.style.color = "green";
    elemento.innerText = (nombreOr).toUpperCase();
}, false);

elemento.addEventListener("mouseout", function () {
    elemento.style.color = "black";
    elemento.innerText = nombreOr;
}, false)

