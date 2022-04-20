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
