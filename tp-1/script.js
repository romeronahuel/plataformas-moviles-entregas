// Numeros

// Implementar una función "suma" que retorne la suma de 2 numeros
// ejemplo: suma(2,3) retorna 5

function suma(num1, num2) {
    return num1 + num2;
}

//NOTA DEL ALUMNO: solo lo separo en bloques por miedo de que una variable joda a otra, ya que por comodidad propia y para que sea legible uso el mismo nombre de variables en algunos casos

{
    let num1=parseInt(prompt("Deme un numero para una suma"));
    let num2=parseInt(prompt("Dame otro numero para una suma"));
    console.log(`suma(${num1}, ${num2}): `, suma(num1, num2));
}

// Implementar una función "elevarAlCubo" que eleve al cubo un numero
// ejemplo: elevarAlCubo(3) retorna 27

function elevarAlCubo(num){
    return num**3
}

{
    let num=parseInt(prompt("Deme un numero para elevar al cubo"));
    console.log(`elevarAlCubo(${num}): `, elevarAlCubo(num))
}

// Implementar una función "restoDivisionEntera" para devolver el resto de una división entera entre un dividendo y un divisor
// ejemplo: restoDivisionEntera(3,2) retorna 1

function restoDivisionEntera(num1, num2){
    return num1%num2;
}

{
    let num1= parseInt(prompt("Ingrese un numero para una resta entera"));
    let num2= parseInt(prompt("Ingrese un numero para una resta entera"));
    console.log(`restoDivisionEntera(${num1}, ${num2}): `, restoDivisionEntera(3,2));
}

// Implementar una función "numeroPi" para devolver el numero PI
// ejemplo: numeroPi() retorna 3,14...

function numeroPi(){
    return Math.PI;
}
console.log("numeroPi(): ", numeroPi())


// Implementar una función "numeroRandom" para devolver un número random / aleatorio
// ejemplo: numeroRandom() retorna 0,123...
function numeroRandom(){
    return Math.random()*10;
}
console.log("numeroRandom(): ", numeroRandom())


// Implementar una función "mejorNumeroRandom" para devolver un número random entre 2 valores recibidos como parámetros
// ejemplo: mejorNumeroRandom(1,6) retorna 3
function mejorNumeroRandom(num1, num2){
    return Math.random(num1, num2);
}

{
    let num1=parseInt(prompt("Dame un numero para darte un numero random entre la escala de numeros que me des"));
    let num2=parseInt(prompt("Dame otro numero para darte un numero random entre la escala de numeros que me des"));
    console.log(`mejorNumeroRandom(${num1}, ${num2}): `, mejorNumeroRandom(num1, num2));
}
// Cadenas de Caracteres

// Implementar una función "transformarMayuscula" que transforme a mayúscula la palabra recibida como parámetro
// ejemplo: transformarMayuscula("Plataformas Móviles") retorna "PLATAFORMAS MÓVILES"
function transformarMayuscula(str){
    return str.toUpperCase();
}
console.log("transformarMayuscula(\"Plataformas Móviles\"): ", transformarMayuscula("Plataformas Móviles"))


// Implementar una función "primeraLetra" que nos devuelva la inicial de la palabra recibida como parámetro
// ejemplo: primeraLetra("Plataformas") retorna "P"

function primeraLetra(str){
    return str[0];
}

console.log("primeraLetra(\"Plataformas\"): ", primeraLetra("Plataformas"))


// Implementar una función "ultimaLetra" que nos devuelva la letra final la palabra recibida como parámetro
// ejemplo: ultimaLetra("Plataformas") retorna "s"

function ultimaLetra(str){
    return str.charAt(str.length -1);
}

console.log("ultimaLetra(\"Plataformas\"): ", ultimaLetra("Plataformas"))


// Implementar una función "primeraLetraMayuscula" que devuelve la palabra original con su primera letra en mayúscula
// ejemplo: primeraLetraMayuscula("plataformas") retorna "Plataformas"

function primeraLetraMayuscula(str){
    return str[0].toUpperCase();
}

console.log("primeraLetraMayuscula(\"plataformas\"): ", primeraLetraMayuscula("plataformas"))

// Implementar una función "palabraAListaDeLetras" que dada una palabra me retorne un listado de sus letras
// ejemplo: palabraAListaDeLetras("hola") retorna ['h', 'o', 'l', 'a'];

function palabraAListaDeLetras(str){
    return str.split('');
}

console.log("palabraAListaDeLetras(\"hola\"): ", palabraAListaDeLetras("hola"))

// Implementar una función "listaDeLetrasAPalabra" que dado un listado de letras, devuelva una palabra
// ejemplo: listadoDeLetrasAPalabra(["h", "o", "l", "a"]) retorna "hola";

function listadoDeLetrasAPalabra(str){
    return str.join('');
}
console.log("listadoDeLetrasAPalabra([\"h\", \"o\", \"l\", \"a\"]): ", listadoDeLetrasAPalabra(["h", "o", "l", "a"]))

// Implementar una función "palabraInvertida" que devuelva la palabra invertida
// ejemplo: palabraInvertida("hola") retorna "aloh";
function palabraInvertida(str){
    return str.split('').reverse().join('');;
}
console.log("palabraInvertida(\"hola\"): ", palabraInvertida("hola"))