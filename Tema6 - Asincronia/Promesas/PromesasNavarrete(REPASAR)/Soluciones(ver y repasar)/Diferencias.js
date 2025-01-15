/*

1. Primer Código:
Manejo de errores:
No valida los códigos de estado HTTP. Asume que la respuesta será exitosa, lo que puede llevar a problemas si la API devuelve un error o un código de estado distinto a 200.
Usa .catch() para manejar cualquier error de la promesa, pero no valida la respuesta a nivel de código de estado HTTP.
Uso de callback:
No se utiliza callback. La función mostrarDatos está definida pero no es utilizada en el flujo del código.
Modularidad:
Todo el proceso de obtención de datos y manejo de la respuesta está dentro de la función getDataFromAPI. No hay una separación clara entre la lógica de la API y el procesamiento de los datos.
No hay modularidad, ya que el manejo de los datos se hace en la misma función que hace la solicitud.
Simplicidad:
Relativamente simple, pero carece de algunas buenas prácticas como la validación del código de estado y modularización.





2. Segundo Código:
Manejo de errores:
Mejora la gestión de errores validando el estado HTTP (xhr.status === 200). Si el estado no es 200, rechaza la promesa con el mensaje de error.
La función xhr.onerror también gestiona cualquier error relacionado con la conexión.
Uso de callback:
Similar al primer código, no usa un callback. La función mostrarDatos está definida, pero no se pasa como parámetro ni se invoca en ningún lugar del código.
Modularidad:
No hay modularidad significativa. Todo se procesa dentro de la misma función getDataFromAPI.
Simplicidad:
Aumenta la robustez en la gestión de errores pero sigue sin modularizar el código ni hacer uso de funciones externas para manejar los datos.



3. Tercer Código:
Manejo de errores:
Al igual que el segundo código, valida el código de estado HTTP (xhr.status === 200). Si el código no es 200, rechaza la promesa con el error.
También gestiona errores de conexión con xhr.onerror.
Uso de callback:
Se utiliza un callback (en este caso, mostrarDatos). La respuesta de la API se pasa a esta función para que los datos se gestionen fuera de la función getDataFromAPI, lo que mejora la modularidad y reutilización del código.
Este enfoque hace que el procesamiento de los datos sea más flexible y fácilmente reutilizable.
Modularidad:
Se mejora la modularidad al pasar la respuesta a una función externa (mostrarDatos) a través de un callback, lo que permite un flujo de trabajo más organizado.
Simplicidad:
Es más complejo que el primer y segundo código debido al uso de callback, pero mejora en términos de reutilización y organización.



4. Cuarto Código:
Manejo de errores:
Valida el código de estado HTTP, similar a los otros dos códigos que gestionan el error si el estado no es 200 (xhr.status === 200).
Al igual que los otros, maneja los errores de conexión con xhr.onerror.
Uso de callback:
No utiliza un callback. La respuesta de la API se maneja directamente dentro del then() de la promesa. Los datos se procesan inmediatamente después de recibir la respuesta sin necesidad de pasar a una función externa.
Modularidad:
No hay modularidad. Todo el proceso se realiza dentro de la promesa misma sin la ayuda de funciones externas.
Este enfoque es menos flexible que el tercer código, pero puede ser suficiente en scripts más simples.
Simplicidad:
El código es más simple y directo, lo que facilita su comprensión, pero carece de la modularidad que ofrecería un callback. No es tan reutilizable como el tercer código.





/me falta el ultimo
*/