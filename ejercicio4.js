//Ejercicio 4

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  return array.indexOf(text);
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Yoda"));
console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Luke"));
console.log(removeItem(mainCharacters, "Yoda"));
