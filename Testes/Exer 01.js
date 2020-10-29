/*const numero = "iNumeros"
var i = 10
var array = []

for (var Verif = 1; i != 0; Verif++) {
    var tec = (numero+Verif)
    array.push(tec)
    console.log(numero + Verif);
   //console.log(typeof(numero + Verif));
    i--
}
//console.log(array)
//array.length
for(let posição in array){
    console.log(array[posição])
}
var tec = ['iNumero',]
//var teczero = tec.indexOf('iNumero')
var teczero = tec[0]
var teczero2 = tec[1]
console.log(teczero);
console.log(teczero2);
var iNumero = tec[1]
console.log(iNumero)
*/
var strin = '23,23,23,23,23,03,888,65,43,23,45,656,34,2,0,00,00'
var strinA = strin.split(',')
console.log(strinA);

console.log(typeof (strinA))

//var array_Operação = [2,3,4,5] //TESTE
console.log(typeof (array_Operação))
console.log(array_Operação)
let soma = 0
for (var posição in array_Operação) {
    soma += array_Operação[posição]
}
console.log(soma, 'S', typeof (soma))