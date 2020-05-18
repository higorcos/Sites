    var saidaDeMensagem = ""
    var interfaceSite = ""
    var box = ""
function calculadoraNormal(){
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

function cal() {
    let numeroL = document.getElementById('iNumero');
    let numero = Number(document.getElementById('iNumero').value);
    let nOpe = document.getElementsByName('nOpe')

    box = document.getElementById('iBox');
    box.innerHTML =`<select name="nMensagem" id="iSaidaDeMensagem" size="10">
    <option>Digite um número acima</option>
    </select>`
    saidaDeMensagem = document.getElementById('iSaidaDeMensagem');

    if (numeroL.value.length == 0) {
        window.alert("digite um numero ")
    } else if (nOpe[0].checked) {
        console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} x ${c}  = ${numero * c}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)
        }
    } else if (nOpe[1].checked) {
        console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} : ${c}  = ${(numero / c).toFixed(2)}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)
        }
    } else if (nOpe[2].checked) {
        console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} + ${c}  = ${numero + c}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)

        }
    } else if (nOpe[3].checked) {
        console.log(numero);
        saidaDeMensagem.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} - ${c}  = ${numero - c}  `
            item.value = `valor_${c}`
            saidaDeMensagem.appendChild(item)

        }
    }
}
var opcoesMedia = ""
var interfaceSite = ""
var numeroDeElementos = ""
var numero1 = ""
var numero2 = ""
var numero3 = ""
var numero4 = ""
var numero5 = ""


function Media() {
    console.log('Botão Média pressionado  ');
    //var interfaceSite = document.getElementById('iInterfaceSite');
    interfaceSite = document.getElementById('iInterfaceSite');
    interfaceSite.innerHTML = `
    <input type="radio" name="nRetornoArit" id="iSaidaDeMensagemtornoArit2" onclick="ari2()"> <label for="iSaidaDeMensagemtornoArit2">Fazer média com 2 números </label></input></br>
    <input type="radio" name="nRetornoArit" id="iSaidaDeMensagemtornoArit3" onclick="ari3()"> <label for="iSaidaDeMensagemtornoArit3">Fazer média com 3 números </label></input></br>
    <input type="radio" name="nRetornoArit" id="iSaidaDeMensagemtornoArit4" onclick="ari4()"> <label for="iSaidaDeMensagemtornoArit4">Fazer média com 4 números </label></input></br>
    <input type="radio" name="nRetornoArit" id="iSaidaDeMensagemtornoArit5" onclick="ari5()"> <label for="iSaidaDeMensagemtornoArit5">Fazer média com 5 números </label></input></br>
    `


}
function ari2() {
    //var interfaceSite = document.getElementById('iInterfaceSite');
    console.log('Média com 2 números');
    interfaceSite.innerHTML =
        `
    <label for="iNumero1">Número 1: </label><input type="number" name="nNumero1" id="iNumero1" /></br>
    <label for="iNumero2">Número 2: </label><input type="number" name="nNumero2" id="iNumero2" /></br>
    <input type="button" value="Calcular Média Aritmética" onclick="TirandoMedia()" class="botao" />
    `
    numeroDeElementos = 2;


}

function ari3() {
    //var interfaceSite = document.getElementById('iInterfaceSite');
    console.log('Média com 3 números ');
    interfaceSite.innerHTML =
        `
    <label for="iNumero1">Número 1: </label><input type="number" name="nNumero1" id="iNumero1" /></br>
    <label for="iNumero2">Número 2: </label><input type="number" name="nNumero2" id="iNumero2" /></br>
    <label for="iNumero3">Número 3: </label><input type="number" name="nNumero3" id="iNumero3" /></br>
    <input type="button" value="Calcular Média Aritmética" onclick="TirandoMedia()" class="botao" />

     `
    numeroDeElementos = 3;
}
function ari4() {
    //var interfaceSite = document.getElementById('iInterfaceSite');
    console.log('Média com 4 números ');
    interfaceSite.innerHTML =
        `
    <label for="iNumero1">Número 1: </label><input type="number" name="nNumero1" id="iNumero1" /></br>
    <label for="iNumero2">Número 2: </label><input type="number" name="nNumero2" id="iNumero2" /></br>
    <label for="iNumero3">Número 3: </label><input type="number" name="nNumero3" id="iNumero3" /></br>
    <label for="iNumero4">Número 4: </label><input type="number" name="nNumero4" id="iNumero4" /></br>
    <input type="button" value="Calcular Média Aritmética" onclick="TirandoMedia()" class="botao" />
    `
    numeroDeElementos = 4;
}
function ari5() {
    //var interfaceSite = document.getElementById('iInterfaceSite');
    console.log('Média com 5 números');
    interfaceSite.innerHTML =
        `
    <label for="iNumero1">Número 1: </label><input type="number" name="nNumero1" id="iNumero1" /></br>
     <label for="iNumero2">Número 2: </label><input type="number" name="nNumero2" id="iNumero2" /></br>
     <label for="iNumero3">Número 3: </label><input type="number" name="nNumero3" id="iNumero3" /></br>
     <label for="iNumero4">Número 4: </label><input type="number" name="nNumero4" id="iNumero4" /></br>
     <label for="iNumero5">Número 5: </label><input type="number" name="nNumero5" id="iNumero5" /></br>
     <input type="button" value="Calcular Média Aritmética" onclick="TirandoMedia()" class="botao" />
     `
    numeroDeElementos = 5;
}
function TirandoMedia() {
    //console.log("TirandoMedia pressionado ");
    box = document.getElementById('iBox')
    box.innerHTML =`<select name="nMensagem" id="iSaidaDeMensagem" size="10">
    <option>Digite um número acima</option>
    </select>`
    saidaDeMensagem = document.getElementById('iSaidaDeMensagem');

    switch (numeroDeElementos) {
        case 2:
            numero1 = Number(document.getElementById('iNumero1').value);
            numero2 = Number(document.getElementById('iNumero2').value);
            let resultadoMedia2 = (((numero1 + numero2) / 2).toFixed(2));
            console.log(`Média entre ${numeroDeElementos} números; ${numero1} + ${numero2} ÷ 2 = ${resultadoMedia2}`);
            saidaDeMensagem.innerHTML = ``
            opcoesMedia = document.createElement('option');
            opcoesMedia.text = `${numero1} + ${numero2} ÷ 2 = ${resultadoMedia2}`
            opcoesMedia.value = `valor_${2}`
            saidaDeMensagem.appendChild(opcoesMedia)
            break;
        case 3:
            numero1 = Number(window.document.getElementById('iNumero1').value);
            numero2 = Number(window.document.getElementById('iNumero2').value);
            numero3 = Number(window.document.getElementById('iNumero3').value);
            let resultadoMedia3 = (((numero1 + numero2 + numero3) / 3).toFixed(2));
            console.log(`Média entre ${numeroDeElementos} números; ${numero1} + ${numero2} + ${numero3} ÷ 3 = ${resultadoMedia3}`);
            saidaDeMensagem.innerHTML = ``
            opcoesMedia = document.createElement('option');
            opcoesMedia.text = `${numero1} + ${numero2} + ${numero3} ÷ 3 = ${resultadoMedia3}`
            opcoesMedia.value = `valor_${3}`
            saidaDeMensagem.appendChild(opcoesMedia)
            break;
        case 4:
            numero1 = Number(window.document.getElementById('iNumero1').value);
            numero2 = Number(window.document.getElementById('iNumero2').value);
            numero3 = Number(window.document.getElementById('iNumero3').value);
            numero4 = Number(window.document.getElementById('iNumero4').value);
            let resultadoMedia4 = (((numero1 + numero2 + numero3 + numero4) / 4).toFixed(2));
            console.log(`Média entre ${numeroDeElementos} números; ${numero1} + ${numero2} + ${numero3} + ${numero4} ÷ 4 = ${resultadoMedia4}`);
            saidaDeMensagem.innerHTML = ``
            opcoesMedia = document.createElement('option');
            opcoesMedia.text = `${numero1} + ${numero2} + ${numero3} + ${numero4} ÷ 4 = ${resultadoMedia4}`
            opcoesMedia.value = `valor_${4}`
            saidaDeMensagem.appendChild(opcoesMedia)
            break;
        case 5:
            numero1 = Number(window.document.getElementById('iNumero1').value);
            numero2 = Number(window.document.getElementById('iNumero2').value);
            numero3 = Number(window.document.getElementById('iNumero3').value);
            numero4 = Number(window.document.getElementById('iNumero4').value);
            numero5 = Number(window.document.getElementById('iNumero5').value);
            let resultadoMedia5 = (((numero1 + numero2 + numero3 + numero4 + numero5) / 5).toFixed(2));
            console.log(`Média entre ${numeroDeElementos} números; ${numero1} + ${numero2} + ${numero3} + ${numero4} + ${numero5} ÷ 5 = ${resultadoMedia5}`);
            saidaDeMensagem.innerHTML = ``
            opcoesMedia = document.createElement('option');
            opcoesMedia.text = `${numero1} + ${numero2} + ${numero3} + ${numero4} + ${numero5} ÷ 5 = ${resultadoMedia5}`
            opcoesMedia.value = `valor_${5}`
            saidaDeMensagem.appendChild(opcoesMedia)
            break;
        default:
            console.log("Erro 404")
            break;
    }
}



/*
let interfaceSite = document.getElementById('iInterfaceSite');
console.log('media');
let opcoes = document.createElement('input')
opcoes.setAttribute('type', 'radio');
opcoes.name = `nRetornoArit`
//opcoes.value = `RetornoArit`
opcoes.id = `iSaidaDeMensagemtornoArit`
 //opcoes.innerHTML = `<label for="iNumero">Número: </label><input type="number" name="nNumero" id="iNumero" /> `
 //opcoes.className = `cRetornoArit`
 var opcoes2 = document.createElement('label')
 opcoes2.setAttribute('for', 'iSaidaDeMensagemtornoArit')
 opcoes2.innerHTML = `Aritimetica 2`
 interfaceSite.appendChild(opcoes);
 opcoes.appendChild(opcoes2);
*/