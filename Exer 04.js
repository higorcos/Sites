
function cal() {
    let numeroL = document.getElementById('iNumero');
    let numero = Number(document.getElementById('iNumero').value);

    let nOpe = document.getElementsByName('nOpe')
    let resultado = document.getElementById('iRe');

    if (numeroL.value.length == 0) {
        window.alert("digite um numero ")
    } else if (nOpe[0].checked) {
        console.log(numero);
        resultado.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} x ${c}  = ${numero * c}  `
            item.value = `valor_${c}`
            resultado.appendChild(item)
        }
    } else if (nOpe[1].checked) {
        console.log(numero);
        resultado.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} : ${c}  = ${(numero / c).toFixed(2)}  `
            item.value = `valor_${c}`
            resultado.appendChild(item)
        }
    } else if (nOpe[2].checked) {
        console.log(numero);
        resultado.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} + ${c}  = ${numero + c}  `
            item.value = `valor_${c}`
            resultado.appendChild(item)

        }
    } else if (nOpe[3].checked) {
        console.log(numero);
        resultado.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} - ${c}  = ${numero - c}  `
            item.value = `valor_${c}`
            resultado.appendChild(item)

        }
    }
}
function Multiplicar() {

}
function Dividir() {

}
function Somar() {

}
function Subtrair() {

}
//function Media(){}
function Media() {
    let chamadaHtml = document.getElementById('entrada');
    console.log('media');
    let opcoes = document.createElement('input')
    opcoes.setAttribute('type', 'radio');
    opcoes.name = `nRetornoArit`
    //opcoes.value = `RetornoArit`
    opcoes.id = `iRetornoArit`
    //opcoes.innerHTML = `<label for="iNumero">Número: </label><input type="number" name="nNumero" id="iNumero" /> `
    //opcoes.className = `cRetornoArit`
    var opcoes2 = document.createElement('label')
    opcoes2.setAttribute('for', 'iRetornoArit')
    opcoes2.innerHTML = `Aritimetica 2`
    
    
    chamadaHtml.appendChild(opcoes);
    opcoes.appendChild(opcoes2);
    //.insertBefore(novoElem, itens[0]);


}


/*
        let op = documet.getElementById('entra');
        console.log('media');
        let opcoes = documet.createElement('input')
        opcoes.setAttribute("type", "radio");
        opcoes.setAttribute('name', 'name');
        opcoes.value =  `test`
        op.appendChild(opcoes)


   console.log(res01 = numero * 1);
   console.log(res02 = numero * 2);
   console.log(res03 = numero * 3);
   console.log(res04 = numero * 4);
   console.log(res05 = numero * 5);
   console.log(res06 = numero * 6);
   console.log(res07 = numero * 7);
   console.log(res08 = numero * 8);
   console.log(res09 = numero * 9);
   console.log(res10 = numero * 10);

   var res01 = numero * 1;
   var res02 = numero * 2;
   var res03 = numero * 3;
   var res04 = numero * 4;
   var res05 = numero * 5;
   var res06 = numero * 6;
   var res07 = numero * 7;
   var res08 = numero * 8;
   var res09 = numero * 9;
   var res10 = numero * 10;


   resultado.innerHTML=`
   ${numero} x 1  = ${res01}  </br>
   ${numero} x 2  = ${res02}  </br>
   ${numero} x 3  = ${res03}  </br>
   ${numero} x 4  = ${res04}  </br>
   ${numero} x 5  = ${res05}  </br>
   ${numero} x 6  = ${res06}  </br>
   ${numero} x 7  = ${res07}  </br>
   ${numero} x 8  = ${res08}  </br>
   ${numero} x 9  = ${res09}  </br>
   ${numero} x 10 = ${res10} </br> `
*/
