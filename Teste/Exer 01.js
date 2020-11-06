var resultadoMtm = 0
let numerosArray = []
let numeros = 0

for (var posição in array_Operação) {
    numeros = parseInt(array_Operação[posição])

    if (isNaN(numeros) == false) {  //verificar se é um numero mesmo 
        resultadoMtm += numeros
        var tamanhoArray = numerosArray.length
        numerosArray[tamanhoArray] = numeros
    }
}
var arrayToString = numerosArray.toString().replace(/,/g, ' + ') //Torna o array uma string e depois usa o replace para trocar a virgula pelo simbolo da operação 
