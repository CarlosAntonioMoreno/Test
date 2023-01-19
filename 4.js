// Ejercicio 4
// Dado el siguiente trozo de código queremos que imprima primero 'Hola' y luego 'Adiós' pero no queremos alterar la función principal.
// Por algún motivo este código no funciona como se espera y está imprimiendo en consola dos veces 'Adiós'.
// Podriamos corregir esto de alguna manera modificando sólo el código entre las líneas 15 y 19

const showText = function() {
  return {
    text: 'Adiós',
    init: function() {
      return console.log(this.text);
    }
  }
}();

// --------------- Solo puedes tocar desde aquí ------------- //
showText.text = 'Hola';
showText2 = {...showText}; //the reference was being modified and showtext and showtext2 point to a single object, it was missing to clone it
showText2.text = 'Adiós';
// --------------- hasta aquí ------------------------------- //

showText.init();  // Hola
showText2.init(); // Adiós