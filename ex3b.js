/**
 * Contesta a todas las preguntas al lado
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función? Esta función tiene como nombre isPositive.
 * 2. ¿Que deberíamos escribir para ejecutar esta función? Un número como argumento.
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? Un boolean ya que devuelve un true o false.
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué? No la usa adecuadamente porque invoca 'El número es negativo antes que positivo. 
      Para que funcionase el mensaje debería cambiar de orden en el console.log.
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es negativo");
} else {
  console.log("El número es positivo");
}
