/*
function numeroDado(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let nombre = prompt("Ingrese nombre");
let dados = parseInt(prompt("Numero de dados maximo 10"));

document.write("<h1>Tu nombre es: " + nombre + "</h1><h3>Resultado:</h3>");
for (let i = 1; i <= dados; i++) {
  document.write("<h4>" + i + ". - " + numeroDado(1, 6) + "</h4>");
  if (i >= 10) {
    document.write("<p>El limite es de diez dados</p>");
    break;
  }
}
*/

window.onload = function () {
  document.getElementById("crear").onclick = crear__pj;
  document.getElementById("check__raza").onclick = make__raza;
  document.getElementById("volver__raza").onclick = volver__raza;
  document.getElementById("check__off").onclick = make__off;
  document.getElementById("volver__off").onclick = volver__off;
  document
    .getElementById("fotoavatar")
    .addEventListener("change", archivos, false);
  document.getElementById("pjcreado").onclick = make__pj;
  cargarpj();
  fetchprueba();
};

class Pj {
  constructor(raza, offi, nick, foto) {
    (this.raza = raza),
      (this.offi = offi),
      (this.nick = nick),
      (this.foto = foto);
  }
}

const pj = JSON.parse(localStorage.getItem("pj")) || [];

function crear__pj() {
  document.getElementById("lista").style.display = "none";
  document.getElementById("create").style.display = "block";
  document.getElementById("raza").style.display = "block";
}

function make__raza() {
  if (!document.querySelector('input[name="raza"]:checked')) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No seleccionaste ninguna raza",
      footer: "Es necesario elegir una",
    });
  } else {
    document.getElementById("raza").style.display = "none";
    document.getElementById("oficio").style.display = "block";
  }
}

function volver__raza() {
  document.getElementById("raza").style.display = "block";
  document.getElementById("oficio").style.display = "none";
}

function make__off() {
  if (!document.querySelector('input[name="off"]:checked')) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No seleccionaste ningun oficio",
      footer: "Es necesario elegir uno",
    });
  } else {
    document.getElementById("oficio").style.display = "none";
    document.getElementById("character").style.display = "block";
  }
}

function volver__off() {
  document.getElementById("oficio").style.display = "block";
  document.getElementById("character").style.display = "none";
}

function showavatar(event) {
  var traerimagen = event.target.result;
  var verimagen = document.getElementById("imagenavatar");
  verimagen.src = traerimagen;
}

function archivos(event) {
  var foto = event.target.files[0];
  var leer = new FileReader();
  leer.addEventListener("load", showavatar, false);
  leer.readAsDataURL(foto);
}

const form = document.getElementById("newpj");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.reset();
});

const listapj = document.getElementById("listapersonajes");

const fragment = document.createDocumentFragment();

var conteopj = document.getElementById("conteo");

function cargarpj() {
  for (const i of pj) {
    let nuevopj = document.createElement("li");
    nuevopj.innerHTML =
      '<div class="ancho rounded-circle"><img id="" class="fotopj" src="' +
      i.foto +
      '" alt="" /></div>' +
      i.nick;
    fragment.appendChild(nuevopj);
    conteopj.innerText = pj.length;
    listapj.appendChild(fragment);
    fetchprueba();
  }
  if (pj.length == 3) {
    document.getElementById("crear").style.display = "none";
  }
}

function borrarlista() {
  let x = listapj.querySelector("li");
  if (x < pj) {
    while (listapj.firstChild) {
      listapj.removeChild(listapj.firstChild);
    }
    console.log(listapj.children.length);
  }
}

function make__pj() {
  if (document.getElementById("nickname").value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Necesitas un nombre y una foto",
      footer: "Escribe el nombre de tu personaje",
    });
  } else {
    document.getElementById("create").style.display = "none";
    document.getElementById("character").style.display = "none";
    document.getElementById("lista").style.display = "block";
    pj.push(
      new Pj(
        document.querySelector('input[name="raza"]:checked').value,
        document.querySelector('input[name="off"]:checked').value,
        document.getElementById("nickname").value,
        document.getElementById("imagenavatar").src
      )
    );
    console.log(pj);
    localStorage.setItem("pj", JSON.stringify(pj));
    borrarlista();
    cargarpj();
    document.getElementById("imagenavatar").src = "";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Personaje Creado",
      showConfirmButton: false,
      timer: 900,
    });
  }
}
const $pokemon = document.querySelector("#pokemon");
function renderPokemon(image) {
  $pokemon.setAttribute("src", image);
}
function fetchprueba() {
  fetch("https://pokeapi.co/api/v2/pokemon/" + 25 + pj.length + "/")
    .then((response) => response.json())
    .then((pokemon) => {
      renderPokemon(pokemon.sprites.front_default);
    });
}
