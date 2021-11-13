// Explica qué tipado (débil o fuerte) se aplica en Javascript.
// Respuesta ejercicio 1: Javascript es un lenguaje de tipado débil, debido a que las variables se declaran sin un tipo específico, los valores insertados en esas variables pueden modificarse y realizar operaciones entre ellas sin necesitar realizar una conversión. 
// Por ejemplo vamos a declarar variables de diferentes tipos y el desarrollador en ningún momento especifica el tipo de dato. 
let nombreUsuario = "Óscar";
// En este ejemplo utilizamos la palabra reservada let para declarar una variable, pero no especificamos en ningún momento si la variable es de tipo String, char, int...
// En el caso de los objetos el tipado es algo más fuerte debido a que la declaración es más precisa pero sigue siendo tipado débil.
let ejemploArray = [];
let ejemploObjeto = {};
// Aunque los desarrolladores no especifican el tipo de dato introducido, Javascript internamente los asigna automáticamente.
// También se demuestra que Javascript es un lenguaje débilmente tipado debido a que se realiza la coerción de datos.
// La coerción de datos puede llegar a ser un problema, debido a que el intérprete realiza de manera automática la conversión de datos y al realizar ciertas operaciones puede dar problemas. A continuación muestro un ejemplo de coerción de datos.
console.log("El resultado1 es: ");
console.log(5+5+5); // El resultado es 15 debido a que estamos realizando una suma de 3 sumandos

console.log("El resultado2 es: ");
console.log(5+5+"5"); // El resultado es 105 debido a que estamos realizando una suma de 2 sumandos y después le estamos añadiendo un carácter con el valor 5, y este resultado es un texto (String).
console.log("5"+5+5); // El resultado es 555 debido a que estamos mostrando un carácter con el valor 5 y después concatenamos el resto de datos, este resultado es un texto (String).


// Realiza un ejemplo con declaración de diferentes variables: texto, numéricas, booleanas y de listas. Identifica correctamente el tipo de dato de cada una.

// Declaración de variables
let texto = "Mi nombre es Óscar";
let numero = 10;
let numeroDecimales = 5.30;
let bandera = true;
let listaPersonas = ["Óscar", "Juan", "Miguel", "Raúl"];

// Muestro por consola mediante la sentencia console.log() un texto y concateno con el método typeof para conseguir el tipo de dato
console.log("La variable texto es de tipo " + typeof(texto))
console.log("La variable numero es de tipo " + typeof(numero))
console.log("La variable numeroDecimales es de tipo " + typeof(numeroDecimales))
console.log("La variable bandera es de tipo " + typeof(bandera))
console.log("La variable listaPersonas es de tipo " + typeof(listaPersonas))



// Explica la diferencia entre let, var y const con un ejemplo.
// Explicación let: Cuando se utiliza la palabra reservada let se crea una variable que si se puede modificar su valor y su scope es block scope
// Explicación var: Cuando se utiliza la palabra reservada var se crea una variable que si se puede modificar su valor pero su scope es local
// Explicación const: Cuando se utiliza la palabra reservada const se crea una constante que no puede modificar su valor en ningún momento del programa.
// A continuación se explica el scope de las variables

// ¿Qué es el scope de una variable?
// El scope de una variable es el lugar en el que una variable es accesible. 


// Bloque de código con variables var
// Explicación variables Var: Mediante la palabra reservada var creamos una variable local y se hereda a scopes diferentes. Si la variable se declara fuera de una función tendrá un ámbito global, aunque si creas una variable con var dentro de una funcion, no existirá fuera de esa función.

var edadPersona = 19;
console.log(edadPersona); // Su valor es 19

if(true){
    var edadPersona = 30;
    console.log(edadPersona); // Su valor es 30
}

console.log(edadPersona); // Su valor es 30

var textoPrueba = "Salida 1";
console.log(textoPrueba); // Su valor es "Salida 1"

if(true){
    var textoPrueba = "Salida 2"; 
    console.log(textoPrueba); // Su valor es "Salida 2"
}

console.log(textoPrueba); // Su valor es "Salida 2"





// Bloque de código con variables let
// Explicación variables let: Si declaras una variable con la palabra reservada let en un scope global o en una función, la variable siempre pertenecerá al ámbito en el que la variable haya sido creada. Por ejemplo si creamos una variable con let en un ámbito global (fuera de una función), la variable tendrá un ámbito global. Pero si dentro de una función creamos una variable con el mismo nombre y cambiamos su valor, ese valor solo podremos utilizarlo dentro de ese bloque de código. Cuando salgamos de ese bloque de código la variable volverá a tener el valor global.

let edadPersona1 = 19;
console.log(edadPersona1); // Su valor es 19

if(true){
    let edadPersona1 = 30;
    console.log(edadPersona1); // Su valor es 30
}

console.log(edadPersona1); // Su valor es 19

let textoPrueba1 = "Salida 1";
console.log(textoPrueba1); // Su valor es "Salida 1"

if(true){
    let textoPrueba1 = "Salida 2";
    console.log(textoPrueba1); // Su valor es "Salida 2"
}

console.log(textoPrueba1); // Su valor es "Salida 1"


// Bloque de código con const
const numeroPi = 3.14;
console.log("El número pi es " + numeroPi); // Su valor es 3.14

// Las líneas de código escritas debajo no funcionarían debido a que const representa un valor constante que siempre tiene que ser el mismo, no puede ser modificado.

//numeroPi = 3.16;
//console.log(numeroPi);