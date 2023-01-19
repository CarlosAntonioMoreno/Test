// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {
  let uniq;
  for (let i = 0; i < array.length; i++) {
    const element = array[i]; //Select element to compare
    let count = 0;
    for (let j = 0; j < array.length; j++) { // Go through the arrangement to find the number of times that is repeated, if the search throws more than two matches, the process ends
      if (element === array[j]) {
        count++;
      }
      if (count == 2) {
        break;
      }
    }
    if (count == 1) { //If varible count is equal to one assign value;
      uniq = element;
      break;
    }
  }
  console.log(uniq);
  return uniq;
}

/**
 * TEST Ejercicio 1
 */
findUniq(["12", 10, "12", 11, 1, 11, 10, "12"]); // 1
findUniq([
  "Capitán América",
  "Hulk",
  "Deadpool",
  "Capitán América",
  "Hulk",
  "Wonder Woman",
  "Deadpool",
  "Iron Man",
  "Iron Man",
]); // 'Wonder Woman'
