var Selecao = ""
var SelecaoArray = []
var FinalMensagem = ""
var tamanhoArray = ""
var fases = 0


const Adicionar = () => {

    Selecao = Number(document.getElementById('iSelecaoN').value);
    tamanhoArray = SelecaoArray.length
    
    if (Selecao == 0) {
        alert('Adicione um número entre 1 e 1000')
    } else if (Selecao >= 1 && Selecao <= 1000 && SelecaoArray.indexOf(Selecao) == -1) {
        SelecaoArray[tamanhoArray] = Selecao
        console.log('Adicionou um número no Array = ' + SelecaoArray)
        tamanhoArray = SelecaoArray.length
        if (fases == 0) {
            let teste = document.getElementById('iBoxOp')
            teste.innerHTML += ``
            teste.innerHTML = `<p><select name="nSelect" id="iSelect" size="6"></select></p>`
            fases++
        }
        let SelectM = document.getElementById('iSelect')
        SelectM.innerHTML += ``
        let gerando_Opcao = document.createElement('option')
        gerando_Opcao.text = `Número ${Selecao} adicionado` 
        gerando_Opcao.value = `v_ ${Selecao}`
        SelectM.appendChild(gerando_Opcao)
        FinalMensagem = document.getElementById('iFinalMensagem')
        FinalMensagem.innerHTML = `<p><input type="button" value="Concluir" onclick="Fish()" class="botao"/></p>`
        
        
    } else if (SelecaoArray.indexOf(Selecao) != -1){
        alert('Esse Número já foi adicionado !!')
    }else{
        alert('Adicione um número entre 1 e 1000')
        
    }
    document.getElementById('iSelecaoN').value=''; 
    document.getElementById('iSelecaoN').focus(); 

    ////// OU
    //Selecao.value = ""
    Selecao.focus()
    
}
const Fish = () => {
    SelecaoArray.sort()
    let valor_Maior = SelecaoArray[0]
    let soma = 0
    let media = 0
    
    for (var posicao in SelecaoArray){ ///fala as posições presentes no setor/Array
        soma += SelecaoArray[posicao]
        media = ((soma/tamanhoArray).toFixed(2));
        if(SelecaoArray[posicao] > valor_Maior){
            valor_Maior = SelecaoArray[posicao]
            
        }

}

    FinalMensagem.innerHTML = `Você adicionou um total de ${tamanhoArray} números</br>`
    FinalMensagem.innerHTML += `O menor valor foi ${SelecaoArray[0]}</br>`
    FinalMensagem.innerHTML += `O maior valor foi ${valor_Maior}</br>`
    FinalMensagem.innerHTML += `Somando todos os valores temos, temos ${soma}</br>`
    FinalMensagem.innerHTML += `A média entre os números adicionados é ${media}</br>`

}