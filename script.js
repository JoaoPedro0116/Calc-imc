const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {
  if (altura.value !== '' && peso.value !== '') {
    const alturaMetros = altura.value / 100; // Converter altura de centímetros para metros
    const imc = (peso.value / (alturaMetros * alturaMetros)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
      classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classification = 'Peso normal';
    } else if (imc < 29.9) {
      classification = 'Sobrepeso';
    } else if (imc < 34.9) {
      classification = 'Obesidade Grau I';
    } else if (imc < 39.9) {
      classification = 'Obesidade Grau II';
    } else {
      classification = 'Obesidade Grau III';
    }

    resultado.innerHTML = `IMC: ${imc} - ${classification}`;
  } else {
    resultado.innerHTML = 'Preencha os campos';
  }
}
