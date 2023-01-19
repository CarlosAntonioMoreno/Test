// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {
  var resultado = [];
  array.forEach((element) => { //forEach to generate array with values and counts to check
    let index = -1;
    resultado.forEach((item, indexFound) => {
      if (item.value == element) {
        index = indexFound;
      }
    });
    if (index == -1) {
      resultado.push({ value: element, count: 1 });
    } else {
      resultado[index].count++;
    }
  });
  var sortArray = resultado.sort(function (a, b) { //fucntion to sort by desc 
    if (a.count < b.count) {
      return 1;
    }
    if (a.count > b.count) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  sortArray.splice(3); //Part of the array is removed, leaving only the first three objects 
  let finalArray = sortArray.map((element) => { //Generating the requested return structure
    return element.value;
  });

  console.log(finalArray);
  return finalArray;
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]); // [ 1, 3, 2 ]
numbersTop(["a", 3, 2, "a", 2, 3, "a", 3, 4, "a", "a", 1, "a", 2, "a", 3]); // [ 'a', 3, 2 ]
