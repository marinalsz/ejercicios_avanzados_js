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
  const position = array.indexOf(text);
  if (position === -1) {
    console.log("El texto no se encuentra en el array");
  } else {
    console.log(position);
  }
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  
  return array;
}

findArrayIndex(mainCharacters, "Rey");
findArrayIndex(mainCharacters, "Yoda");
removeItem(mainCharacters, "Rey");
removeItem(mainCharacters, "Yoda");
