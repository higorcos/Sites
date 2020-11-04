var saidaDeMensagem = ""
var interfaceSite = ""
var box = ""
var opcoesMedia = ""
var interfaceSite = ""
var numeroDeElementos = ""
var numero1 = ""
var numero2 = ""
var numero3 = ""
var numero4 = ""
var numero5 = ""
/**Função inial */
const calculadoraNormal = () => {
    console.log('Botão tabuada pressionado');
    interfaceSite = document.getElementById('iInterfaceSite');
    interfaceSite.innerHTML = `
    <p>Adicione os números desejados separando-os com uma vírgula:</p>
    <p><label for="iNumero">Número 1: </label><input type="text" name="nNumero" id="iNumero" /></p>
    <p>Operação</p>
    <p><input type="radio" name="nOpe" id="iSomar"/><label for="iSomar">Somar</label>
    <input type="radio" name="nOpe" id="iSubtrair"/> <label for="iSubtrair">Subtrair</label>
    <input type="radio" name="nOpe" id="iMultiplicar"/> <label for="iMultiplicar">Multiplicar</label>
    <input type="radio" name="nOpe" id="iDividir"/> <label for="iDividir">Dividir</label></p>
    <input type="button" value="Calcular" onclick="calcudoraDoisNumeros()" class="botao" />`
}
/**Função para fazer as operações  */
const calcudoraDoisNumeros = () => {

    let numeroL = (document.getElementById('iNumero').value);

    //let numerol2 = document.getElementById('iNumero2');
    //let numero = Number(document.getElementById('iNumero').value); 
    //let numero2 = Number(document.getElementById('iNumero2').value);
    let nOpe = document.getElementsByName('nOpe')

    var array_Operação = (numeroL.split(","))//usa o Split para separar os números

    if (numeroL.length == 0) {
        window.alert('Digite os números °separados por vígula ');

    } else if (nOpe[0].checked) {//soma
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
    } else if (nOpe[1].checked) {//sulbtração 
        var resultadoMtm = 0
        let numerosArray = []
        let numeros = 0

        for (var posição in array_Operação) {
            numeros = parseInt(array_Operação[posição])

            if (isNaN(numeros) == false) {  //verificar se é um numero mesmo 
                if (posição == 0) {         //verifica qual o primeiro número digitado
                    let numeroIndiceZero = numeros //o primeiro número digitado é atribuido a variavel, para a opecação não sobre influencia do valor vazio da variavel  
                    resultadoMtm = numeroIndiceZero
                } else {
                    resultadoMtm -= numeros
                }
                var tamanhoArray = numerosArray.length
                numerosArray[tamanhoArray] = numeros
            }
        }
        var arrayToString = numerosArray.toString().replace(/,/g, ' - ') //Torna o array uma string e depois usa o replace para trocar a virgula pelo simbolo da operação 
    } else if (nOpe[2].checked) {//multiplicação       
        var resultadoMtm = 0
        let numerosArray = []
        let numeros = 0

        for (var posição in array_Operação) {
            numeros = parseInt(array_Operação[posição])

            if (isNaN(numeros) == false) {  //verificar se é um numero mesmo 
                if (posição == 0) {     //verifica qual o primeiro número digitado
                    let numeroIndiceZero = numeros //o primeiro número digitado é atribuido a variavel, para a opecação não sobre influencia do valor vazio da variavel
                    resultadoMtm = numeroIndiceZero
                } else {
                    resultadoMtm *= numeros
                }
                var tamanhoArray = numerosArray.length
                numerosArray[tamanhoArray] = numeros
            }
        }
        var arrayToString = numerosArray.toString().replace(/,/g, ' x ') //Torna o array uma string e depois usa o replace para trocar a virgula pelo simbolo da operação 

    } else if (nOpe[3].checked) {//divisão
        var resultadoMtm = 0
        let numerosArray = []
        let numeros = 0

        for (var posição in array_Operação) {
            numeros = parseInt(array_Operação[posição])

            if (isNaN(numeros) == false) {  //verificar se é um numero mesmo 
                if (posição == 0) {         //verifica qual o primeiro número digitado
                    let numeroIndiceZero = numeros //o primeiro número digitado é atribuido a variavel, para a opecação não sobre influencia do valor vazio da variavel  
                    resultadoMtm = numeroIndiceZero
                } else {
                    resultadoMtm /= numeros
                }
                var tamanhoArray = numerosArray.length
                numerosArray[tamanhoArray] = numeros
            }
        }
        var arrayToString = numerosArray.toString().replace(/,/g, ' ÷ ') //Torna o array uma string e depois usa o replace para trocar a virgula pelo simbolo da operação 


    }

    boxF();
    saidaDeMensagem.innerHTML = ``
    let item = document.createElement('option');
    item.text = `O resultado da operação ${arrayToString} é ${resultadoMtm}.`
    item.value = `valor_${resultadoMtm}`
    saidaDeMensagem.appendChild(item)

}
/**Função para o cálculo da tabuada */
const cal = () => {
    let numeroL = document.getElementById('iNumero');
    let numero = Number(document.getElementById('iNumero').value);
    let nOpe = document.getElementsByName('nOpe')

    boxF();

    if (numeroL.value.length == 0) {
        window.alert("Digite um número")
    } else if (nOpe[0].checked) {
        //console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} x ${c}  = ${numero * c}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)
        }
    } else if (nOpe[1].checked) {
        //console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} : ${c}  = ${(numero / c).toFixed(2)}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)
        }
    } else if (nOpe[2].checked) {
        //console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} + ${c}  = ${numero + c}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)

        }
    } else if (nOpe[3].checked) {
        //console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} - ${c}  = ${numero - c}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)

        }
    }
}
const calculadoraNormal1a10 = () => {
    console.log('Botão calculadora pressionado');
    interfaceSite = document.getElementById('iInterfaceSite');
    interfaceSite.innerHTML = `<p><label for="iNumero">Número: </label><input type="number" name="nNumero" id="iNumero" /></p>
    <p>Operação</p>
    <p><input type="radio" name="nOpe" id="iMultiplicar"/> <label for="iMultiplicar">Multiplicar</label>
    <input type="radio" name="nOpe" id="iDividir"/> <label for="iDividir">Dividir</label>
    <input type="radio" name="nOpe" id="iSomar"/><label for="iSomar">Somar</label>
    <input type="radio" name="nOpe" id="iSubtrair"/> <label for="iSubtrair">Subtrair</label></p>
    <input type="button" value="Calcular" onclick="cal()" class="botao" />`
}
const Media = () => {
    //console.log('Botão Média pressionado  ');
    //var interfaceSite = document.getElementById('iInterfaceSite');
    interfaceSite = document.getElementById('iInterfaceSite');

    interfaceSite.innerHTML =
        `<p>Adicione os números para tirar a média, separando-os com uma vírgula:</p>
         <p><label for="iNumero1">Número 1: </label><input type="text" name="nNumero1" id="iNumero1" /><p>
         </br>
        <input type="button" value="Calcular Média Aritmética" onclick="TirandoMedia()" class="botaoM" />
`
}
const TirandoMedia = () => {

    let numeroL = (document.getElementById('iNumero1').value);
    var array_Media = (numeroL.split(","))//usa o Split para separar os números
    console.log(array_Media)
    if (numeroL.length == 0) {
        window.alert('Digite os números °separados por vígula ');
    } else {

        var resultadoMtm = 0
        let numerosArray = []
        let numeros = 0
        var tamanhoArray = 0

        for (var posição in array_Media) {
            numeros = parseInt(array_Media[posição])

            if (isNaN(numeros) == false) {  //verificar se é um numero mesmo 

                resultadoMtm += numeros
                tamanhoArray = numerosArray.length
                numerosArray[tamanhoArray] = numeros
            }
        }
        console.log(numerosArray)
        tamanhoArray = numerosArray.length
        let quociente = (resultadoMtm / tamanhoArray)//.toFixed(1)
        var arrayToString = numerosArray.toString().replace(/,/g, ' + ') //Torna o array uma string e depois usa o replace para trocar a virgula pelo simbolo da operação 

        boxF();
        saidaDeMensagem.innerHTML = ``
        let item = document.createElement('option');
        item.text = `A media dos valores ${arrayToString} / ${tamanhoArray} é ${quociente}`
        item.value = `valor_${resultadoMtm}`
        saidaDeMensagem.appendChild(item)
    }
}
const boxF = () => {
    box = document.getElementById('iBox');
    box.innerHTML = `<select name="nMensagem" id="iSaidaDeMensagem" size="10">
    <option>Digite um número acima</option>
    </select>`
    saidaDeMensagem = document.getElementById('iSaidaDeMensagem');
}
