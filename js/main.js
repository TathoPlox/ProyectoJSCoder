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

/*
class Oficio {
  constructor(off, dmg, def, agi) {
    this.off = off.toUpperCase();
    this.dmg = parseFloat(dmg);
    this.def = parseFloat(def);
    this.agi = parseFloat(agi);
  }
}

const oficio = [];

oficio.push(new Oficio("guerrero", 6, 2, 2));
oficio.push(new Oficio("paladin", 5, 4, 1));
oficio.push(new Oficio("peleador", 6, 1, 3));

let busca = prompt("¿Cuál es tu oficio? guerrero, paladin o peleador");

let character = oficio.find((item) => item.off == busca.toUpperCase());

if (busca == oficio.off) {
  alert("verdadero");
} else {
  alert("falso");
}

document.write(
  "<h1>Tu oficio es: " +
    character.off +
    "</h1>" +
    "<p> Daño: " +
    character.dmg +
    "<br> Defensa: " +
    character.def +
    "<br> Agilidad: " +
    character.agi +
    "</p>"
);
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
};

function crear__pj() {
  document.getElementById("lista").style.display = "none";
  document.getElementById("create").style.display = "block";
  document.getElementById("raza").style.display = "block";
}

function make__raza() {
  if (!document.querySelector('input[name="raza"]:checked')) {
    alert("No seleccionaste ninguna raza");
  } else {
    document.getElementById("raza").style.display = "none";
    document.getElementById("oficio").style.display = "block";
    var razacreado = document.querySelector('input[name="raza"]:checked').value;
  }
}

const listapj = document.getElementById("listapersonajes");
const nuevopj = document.createElement("li");

function volver__raza() {
  document.getElementById("raza").style.display = "block";
  document.getElementById("oficio").style.display = "none";
}

function make__off() {
  if (!document.querySelector('input[name="off"]:checked')) {
    alert("No seleccionaste ningun oficio");
  } else {
    document.getElementById("oficio").style.display = "none";
    document.getElementById("character").style.display = "block";
    var oficiocreado = document.querySelector(
      'input[name="off"]:checked'
    ).value;
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

function make__pj() {
  if (document.getElementById("nickname").value == "") {
    alert("Necesitas un nombre y una foto");
  } else {
    document.getElementById("create").style.display = "none";
    document.getElementById("character").style.display = "none";
    document.getElementById("lista").style.display = "block";
    nuevopj.innerHTML =
      document.getElementById("imagenavatar") +
      document.getElementById("nickname").value;
    listapj.appendChild(nuevopj);
  }
}
