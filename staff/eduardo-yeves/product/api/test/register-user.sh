# curl -> comando para llamar a cURL desde nuestra terminal (herramienta que sirve para hacer solicitudes HTTP)
# -X POST -> -X indica el método, en este caso POST
# -H 'Content-Type: application/json' -> -H indica la cabecera y usamos Content-type para especificar que mandamos contenido tipo json
# -d -> -d se usa para enviar algo, en este caso un objeto json con la información de un usuario
# http://localhost:8080/users -> indica la ruta a la que llamamos desde cURL
# -v -> Verbose (modo detallado): indica que queremos que nos muestre información detallada de lo que sucede durante la ejecución del comando

curl -X POST -H 'Content-Type: application/json' -d '{"name":"Le Chuga","email":"le@chuga.com","username":"lechuga","password":"123123123"}' http://localhost:8080/users -v

# Para testear, primero arrancamos el servidor en una terminal (npm start || node index.js) y después usamos otra terminal en la que copiamos (Windows + C) y ejecutamos el código anterior

# PERMISOS DE ESCRITURA A ESTE ARCHIVO SH (No me funciona en windows!!!)
# Con el comando ls -l test/register-user.sh vemos los permisos actuales -> -rw-r--r-- (solo lectura)
# Para dar permisos de ejecución a este archivo.sh usamos el siguiente comando en la terminal -> chmod 744 test/register-user.sh
# Comprobamos de nuevo los permisos con ls -l y deberían ser ahora -> -rwxr--r-- (no me funciona por ahora!!!)