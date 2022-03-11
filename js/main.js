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
  console.log(symbols);
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSymbol());
