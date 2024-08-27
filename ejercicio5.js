//Ejercicio 5

function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(5));
console.log(rollDice(33));
console.log(rollDice(61));
