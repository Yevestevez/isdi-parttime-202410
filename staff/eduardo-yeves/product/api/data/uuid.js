// FUNCIÓN GENERADORA DE ID ÚNICO Y ALEATORIO
// Date.now() → Devuelve los milisegundos transcurridos desde la época UNIX (1/1/1970)
// Math.random() → Genera un número aleatorio
// Suma → Combina los dos valores para mayor unicidad
// .toString(36) → Convierte el número a una cadena en base 36 (0-9 / a-z)
// .replace('.', '') → Elimina el punto decimal
// Ejemplo -> uuid(); // Resultado: "18ftd5s3bykxo"

const uuid = () => (Date.now() + Math.random()).toString(36).replace('.', '');

export default uuid; // Exportamos la función para poder usarla en otros arhivos JS