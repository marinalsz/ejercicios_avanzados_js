//Ejercicio 6

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  const temp = array[index1];

  array[index1] = array[index2];

  array[index2] = temp;

  return array;
}

console.log(swap(fantasticFour, 0, 2));
console.log(swap(fantasticFour, 1, 3));
