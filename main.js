console.log("JAVASCRIPT FUNCIONES");

// 1.Funciones


console.log("RESTAR");
// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function restar(a,b) {
    return a+b
}

console.log(restar(10,5));


console.log("NOTA - comentado");

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.


// function notaFinal() {
//     let nota = prompt("Introduce la nota del examen. Entra valores entre 0 y 10.")
//     nota = +nota;  //check for a number here for extra security
//     let clasificacion = "";
//     switch(true) {
//         case nota <= 4:
//             clasificacion = "Insuficiente";
//             break;
//         case nota == 5 || nota == 6:
//             clasificacion = "Suficiente";
//             break;
//         case nota == 7 || nota == 8:
//             clasificacion = "Notable";
//             break;
//         case nota == 9 || nota || 10:
//             clasificacion = "Sobresaliente";
//             break;
//         default:
//            break;
//     }

//     return ("La clasificacion de tu nota es " + clasificacion);
// }

// console.log(notaFinal());



console.log("DUPLICAR");
// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero(num) {
  if (typeof num === "number") {
     return num * 2;
  } else {
    return "Debo ser ejecutada con un número."
  }
}

console.log(duplicaNumero(6));


console.log("PRIMER CARÁCTER");

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. / Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(palabra) {
    if (typeof palabra === "string" && palabra.length > 0) {
        return palabra[0];
    } else if (typeof palabra === "string" && palabra.length === 0) {
        return "Debo ser ejecutada con un string no vacío";
    } else {
        return "Debo ser ejecutada con un string";
    }
}

console.log(caracterInicial("playa"));


console.log("ÚLTIMO CARÁCTER");
// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(palabra) {
    if (typeof palabra === "string" && palabra.length > 0) {
        return palabra[(palabra.length - 1)];
    } else if (typeof palabra === "string" && palabra.length === 0) {
        return "Debo ser ejecutada con un string no vacío";
    } else {
        return "Debo ser ejecutada con un string";
    }
}

console.log(ultimoCaracter("El mar"));




console.log("CUENTA CARÁCTERES");
// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(palabra) {
    if (typeof palabra === "string" && palabra.length > 0) {
        return palabra.length;
    } else if (typeof palabra === "string" && palabra.length === 0) {
        return "Debo ser ejecutada con un string no vacío";
    } else {
        return "Debo ser ejecutada con un string";
    }
}

console.log(cuentaCaracteres("que tal"));


console.log("PALÍNDROMO");
// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo(frase) {
    if (typeof frase !== "string" || frase.length <= 1){
        return "No es formato correcto - Tiene que ser un string de más de una letra."
    }

    let sinEspaciosYMinuscula = frase.split(" ").join("").toLowerCase();  //split to array, join again to string to delete spaces, convert to lowercase
    console.log(sinEspaciosYMinuscula);
    let arrFrase = sinEspaciosYMinuscula.split(""); //split to array of individual characters
    console.log(arrFrase);

    if (arrFrase.join() === arrFrase.reverse().join()) {
    return "Es palindrome"    //must convert array to string, arrays don't compare values
     } else {
    return "No es palindrome";

 }

}

console.log(esPalindromo("Atar a la rata"));



console.log("PRECIO");

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(precio) {
    if (typeof precio !== "number") {
        return "no es un formato correcto";
    }
    precio = precio.toFixed(2);
    return precio + " €";
}

console.log(getPrecioMostrar(552.23423423));


console.log("DIVISIÓN");
// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Los argumentos tienen que ser números."
    } else {
        return a / b;
    }
}


console.log (division(30, 5));



console.log("MÁS DE CINCO")
// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]


function masDeCuatro(numeros) {
    let arrDos = [];
    for (const numero of numeros) {
        if (numero >= 5) {
            arrDos.push(numero);
        }
    }
    return(arrDos);
}

let ejemplo = [10, 5, 9, 12, 40, 2, 0, 6, 99];

console.log(masDeCuatro(ejemplo));

console.log("PRIMO -comentado");

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.


// function esPrimo() {
//     let numero = prompt("Entra un número para comprobar si es número primo");
//     numero = +numero;
  
//     if (numero === 0 || numero === 1) {
//         return false;
//     }

//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(esPrimo());



console.log("EXTRAS");
// Extras

console.log("EX IMPARES");

// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

function obtenerImpares(numeros) {
    let arrayImpar = [];
    for (const numero of numeros) {
        if (numero % 2 !== 0) {
            arrayImpar.push(numero);
        }
    }
    return arrayImpar;
}

let ejemploDos = [10, 5, 9, 12, 40, 2, 0, 6, 99];
console.log(obtenerImpares(ejemploDos));


console.log("EX SUMA");
// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(numeros) {
    let resultado = 0;
    for (const numero of numeros) {
        resultado += numero;

    }
    return resultado;

}

let ejemploTres = [10, 10, 10, 70];
console.log(sumarArray(ejemploTres));

console.log("EX MULTIPLICAR");
// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(numeros) {
    resultado = 1;
    for (const numero of numeros) {
        resultado *= numero;
    }

  return resultado;
}


let ejemploCuatro = [2, 5, 2, 4];

console.log(multiplicarArray(ejemploCuatro));


console.log("EX PASSWORD -comentado");
// Crea una función checkPassword con una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

// function checkPassword(password) {

//     for(let i = 1; i <= 3; i++) {
//             let pedirPass = prompt("Introduce tu contraseña");
//               if (pedirPass === password) {
//                 alert("Enhorabuena");
//                 break;
//             } else {
//                 alert("Contraseña no correcta.");
//             }
//         }
//     }
// (checkPassword("lavidaesbella"));    

