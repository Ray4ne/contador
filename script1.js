let numero = 0;
const p = document.querySelector("#resultado");
p.innerHTML = numero;

function aumentar() {
  p.innerHTML = ++numero;
}
function diminuir() {
  p.innerHTML = --numero;
}
function resetar() {
  p.innerHTML = numero = 0;
}
