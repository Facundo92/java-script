
/****Variables y Operadores****/ 

/*A) Crear dos variables numéricas y utilizar el operador suma para 
guardar el valor de la suma de ambos números en una 3er variable.*/
var a = 1;
var b = 2;
var c = a+b;
//console.log(c)

/*B) Crear dos variables de tipo String y concatenarlas guardando 
el resultado en una 3er variable.*/
var clubA = "River";
var clubB = "Plate";
var clubComplete = clubA + clubB;
//console.log(ClubComplete);


/*C) Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado la suma una 3er 
variable (utilizar length).*/
var clubA = 'River' ;
var clubB = 'Plate' ;
var totalClub = clubA.length + clubB.length;
//console.log(clubA.length);
//console.log(clubB.length);
//console.log(totalClub);

/****Strings****/

/*A) Crear una variable de tipo string con al menos 10 caracteres y convertir 
todo el texto en mayúscula (utilizar toUpperCase).*/
var club = 'Club Atletico River Plate';
//console.log(club.toUpperCase)

/*B) Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con los primeros 5 caracteres guardando el resultado en una 
nueva variable (utilizar substring).*/
var club = 'River Plate';
var clubShort = club.substring(0,5);
//console.log(clubShort)

/*C) Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con los últimos 3 caracteres guardando el resultado en una 
nueva variable (utilizar substring).*/
var club = 'River Plate';
var clubShort = club.substring(8,11);
//console.log(clubShort)

/*D)Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/
var club = 'River Plate';
var clubB = club.substring(0,1).toUpperCase() + club.substring(1,11).toLowerCase();
//console.log(clubB)

/*E)Crear una variable de tipo string con al menos 10 caracteres y algún espacio 
en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una 
variable (utilizar indexOf).*/
var club = 'River Plate';
var clubB = club.indexOf('');
//console.log(ClubB)

/*F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres 
y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
para generar un nuevo string que tenga la primera letra de ambas palabras 
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).*/
var word = 'Unbelievable repository';
var wordB= word.substring(0,1).toUpperCase + word.substring(1,11);
//sin res.

/****Arrays****/

/*A) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por 
consola los meses 5 y 11 (utilizar console.log).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(months[4], months[10])

//B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
months.sort();
//console.log(months);

//C) Agregar un elemento al principio y al final del array (utilizar unshift y push).
months.push("2021");
months.unshift("2019");
//console.log(months);


//D) Quitar un elemento del principio y del final del array (utilizar shift y pop).

//E) Invertir el orden del array (utilizar reverse)

//F) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

//G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).


/****If Else****/ /*
Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
For
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
Funciones
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/