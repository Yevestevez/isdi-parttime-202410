// Usaremos este test para probar la funcionalidad de la lógica de authenticateUser de manera rápida, sencilla y aislada

// Importamos el archivo que necesitamos de la lógica que queremos probar, en este caso aunthenticateUser
import authenticateUser from './authenticateUser.js'

try {
    // Declaramos la variable userId aprovechando que la lógica authenticateUser devuelve el id del usuario
    // Invocamos a la función aunthenticateUser con argumentos específicos de prueba
    const userId = authenticateUser('zanahoria', '123123123')

    console.log(userId) // Si la lógica funciona, imprime el id del usuario en consola, si no... 
} catch (error) { // recoge el error de la lógica y... 
    console.error(error) // lo muestra en consola
}

// Podemos testear la lógica desde la terminal con el comando 'node logic/authenticateUser.test.js'
// Veremos el id del usuario en consola en caso de exito o el error en caso de fallo; podemos cambiar la contraseña, por ejemplo, para testear la ruta de error