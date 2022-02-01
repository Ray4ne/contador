p = document.querySelector("#abc");
let numero = 0;

function add() {
  numero++;
  p.innerHTML = numero;
}

function diminuir() {
  numero--;
  p.innerHTML = numero;
}

function zerar() {
  numero = 0;
  p.innerHTML = numero;
}
