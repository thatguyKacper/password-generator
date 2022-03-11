const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

generateEl.addEventListener('click', () => {
  const length = Number(lengthEl.value);
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  );
});

clipboardEl.addEventListener('click', () => {
  navigator.clipboard.writeText(resultEl.innerText);
});

function generatePassword(length, upper, lower, number, symbol) {
  let generatedChars = [];

  if (upper) {
    for (let index = 0; index < length; index++) {
      generatedChars.push(randomUpper());
    }
  }

  if (lower) {
    for (let index = 0; index < length; index++) {
      generatedChars.push(randomLower());
    }
  }

  if (number) {
    for (let index = 0; index < length; index++) {
      generatedChars.push(randomNumber());
    }
  }

  if (symbol) {
    for (let index = 0; index < length; index++) {
      generatedChars.push(randomSymbol());
    }
  }

  let finalPassword = [];

  for (let index = 0; index < length; index++) {
    finalPassword.push(
      generatedChars[Math.floor(Math.random() * generatedChars.length)]
    );
  }
  return finalPassword.join('');
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  let symbols = [];
  for (let index = 0; index < 3; index++) {
    symbols.push(String.fromCharCode(Math.floor(Math.random() * 15) + 33));
  }
  symbols.push(String.fromCharCode(Math.floor(Math.random() * 6) + 91));
  symbols.push(String.fromCharCode(Math.floor(Math.random() * 4) + 123));
  return symbols[Math.floor(Math.random() * symbols.length)];
}
