const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputWeight = event.target.querySelector('#weight');
  const inputHeight = event.target.querySelector('#height');

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult('Peso inválido', false);
    return;
  }
  if (!height) {
    setResult('Altura inválida', false);
    return;
  }

  const imc = getImc(weight, height);
  const stateImc = getImcStates(imc);
  
  const message = `O seu imc ${imc} (${stateImc})`
  setResult(message, true);
  
});

function getImcStates(imc) {
  const level = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ]

  if (imc < 18) return level[0]
  if (imc < 25) return level[1]
  if (imc < 30) return level[2]
  if (imc < 35) return level[3]
  if (imc < 39) return level[4]
  if (imc >= 40) return level[5]
}

function getImc(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function createParagraph() {
  const p = document.createElement('p');
  return p;
}

function setResult(message, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';
  
  const p = createParagraph();

  if (isValid) {
    p.classList.add('paragraph-result');
  } else {
    p.classList.add('isInvalid');
  }
  p.innerHTML = message;

  result.appendChild(p);
}