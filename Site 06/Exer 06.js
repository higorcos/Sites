//Ideia do projeto em julho 
// icone mostrando o consumo de energia do mês

// lista de equipamento já definidas 
//diminuir tamanho do sweet


var consumo = 0;
var preço = 0;
var arrayValorConsumo = []
var arrayValorPreço = []
var tamanhoArrayConsumo = 0
var tamanhoArrayPreço = 0
var carencia_dados = ""

const carregar = () => {

    var msg = window.document.getElementById('msg');

    let potenciaEquipamento = document.getElementById('iPotencia').value
    let horasDeUso = document.getElementById('iHoras').value
    let usoDias = document.getElementById('iDias').value
    let tarifaEnergia = document.getElementById('iTarifas').value

    potenciaEquipamento = 201;
    horasDeUso = 18;
    usoDias = 30;
    tarifaEnergia = 0.684;

    if (potenciaEquipamento.length == 0) {

        carencia_dados = 'Adicione a Potência do equipamento'
        pop_up();
        document.getElementById('iPotencia').value = ''; //limpa o campo
        document.getElementById('iPotencia').focus();   // coloca a seta no local 
    } else if (horasDeUso.length == 0) {

        carencia_dados = 'Adicione o total de horas de uso diário do equipamento';
        pop_up();
        document.getElementById('iHoras').value = ''; //limpa o campo
        document.getElementById('iHoras').focus();   // coloca a seta no local 
    } else if (usoDias.length == 0) {

        carencia_dados = 'Adicione o total de dias de uso durante o periodo de um mês';
        pop_up();
        document.getElementById('iDias').value = ''; //limpa o campo
        document.getElementById('iDias').focus();   // coloca a seta no local 
    }
    else if (tarifaEnergia == "") {
        carencia_dados = 'Selecione o Estado correspondente a sua localização';
        pop_up();
    } else {

        consumo = (potenciaEquipamento * horasDeUso * usoDias / 1000).toFixed(2)
        preço = (consumo * tarifaEnergia).toFixed(2)

        msg.innerHTML = `<div class="retornoJS">
        <p>Consumo mensal: ${consumo}</p> 
        <p>Custo mensal: R$ ${preço}</p>  
        </div>
        <h3>Adicione outro equipamento ou finalize</h3>
    <div>
    <p class="botaojs"><input type="button" value="Adcionar outro" class="botao" onclick="adicionarEquipamento()"/></p>
    </div>
    <div>
    <p class="botaojs"><input type="button" value="Duplicar" class="botao" onclick="dublicarEquipamento()"/></p>
    </div>
    <div>
    <p class="botaojs"><input type="button" value="Finalizar" class="botao" onclick="finalizar()"/></p>
    </div> `
    }
}
const adiciona_array = () => {
    tamanhoArrayConsumo = arrayValorConsumo.length
    tamanhoArrayPreço = arrayValorPreço.length

    arrayValorConsumo[tamanhoArrayConsumo] = parseFloat(consumo)
    arrayValorPreço[tamanhoArrayPreço] = parseFloat(preço)
}
const adicionarEquipamento = () => {
    adiciona_array();//atenção do local da função 
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Adicionado',
        customClass: 'SweetSucesso',
        showConfirmButton: false,
        timer: 1000
    })
    document.getElementById('iPotencia').value = ''; //limpa o campo
    document.getElementById('iHoras').value = ''; //limpa o campo
    document.getElementById('iDias').value = ''; //limpa o campo
    document.getElementById('iPotencia').focus();   // coloca a seta no local    faz a mesma coisa ==== document.getElementById('iPotencia').focus();

    msg.innerHTML = ``  //remove um elemento do HTML outros MODOS "document.getElementById('msg').remove()"  "msg.parentNode.removeChild( msg );"
}
const dublicarEquipamento = () => {
    tamanhoArrayConsumo = arrayValorConsumo.length
    tamanhoArrayPreço = arrayValorPreço.length

    let elementoC = arrayValorConsumo[tamanhoArrayConsumo - 1]
    arrayValorConsumo[tamanhoArrayConsumo] = elementoC
    let elementoP = arrayValorPreço[tamanhoArrayPreço - 1]

    arrayValorPreço[tamanhoArrayPreço] = elementoP
    console.log(arrayValorConsumo, 'consumo')
    console.log(arrayValorPreço, 'preço')
}
const finalizar = () => {
    //adicionar uma verificação se tem algo na variavel ou tirar o botão de calcular quando aparecer o resultado 
    var resultadoConsumo = 0;
    for (let posição in arrayValorConsumo) {
        resultadoConsumo += arrayValorConsumo[posição]
    }
    var resultadoPreço = 0;
    for (let posição in arrayValorPreço) {
        resultadoPreço += arrayValorPreço[posição]
    }
    console.log(resultadoConsumo, 'consumo');
    console.log(resultadoPreço, 'preço');

    msg.innerHTML = `
    <div class="retornoJS" style="padding-left: 0cm;">
        <p syl>O seu consumo mensal de energia é ${resultadoConsumo.toFixed(2)}kWh, esse consumo custará ${resultadoPreço.toFixed(2)} R$</p> 
    </div>`
}
const pop_up = () => {

    Swal.fire({
        icon: 'error',
        title: 'Dados ',
        width: 400,

        confirmButtonColor: '#C73B3B',
        text: `${carencia_dados}`,
    });
}
/*
Para colocar classes personalizada ao Sweeralert pode ser adicionada 
a vários destinos:

Swal.fire({
  ...
  customClass: {
    container: 'container-class',
    popup: 'popup-class',
    header: 'header-class',
    title: 'title-class',
    closeButton: 'close-button-class',
    icon: 'icon-class',
    image: 'image-class',
    content: 'content-class',
    input: 'input-class',
    actions: 'actions-class',
    confirmButton: 'confirm-button-class',
    cancelButton: 'cancel-button-class',
    footer: 'footer-class'
    
  }
  ou 
  customClass: "nome da sua preferencia "
})*/