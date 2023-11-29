let generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let verificarAdivinanza = (numeroSecreto, numeroElegido) => {
  if (numeroElegido < numeroSecreto) {
    console.log("El número secreto es más grande.");
  } else if (numeroElegido > numeroSecreto) {
    console.log("El número secreto es más chico");
  } else {
    console.log("¡Felicitaciones! ¡Adivinaste el Número Secreto!");
  }
};

module.exports = { generarNumeroAleatorio, verificarAdivinanza };
