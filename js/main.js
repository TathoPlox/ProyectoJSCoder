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

class Oficio {
  constructor(off, dmg, def, agi) {
    this.off = off.toUpperCase();
    this.dmg = parseFloat(dmg);
    this.def = parseFloat(def);
    this.agi = parseFloat(agi);
  }
}

const oficio = [];

oficio.push(new Oficio("guerrero", 3, 2, 2));
oficio.push(new Oficio("paladin", 2, 4, 1));
oficio.push(new Oficio("peleador", 3, 1, 3));

let busca = prompt("¿Cuál es tu oficio? guerrero, paladin o peleador");

let character = oficio.find((item) => item.off == busca.toUpperCase());

/*if (busca == oficio.off) {
  alert("verdadero");
} else {
  alert("falso");
}
*/
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
