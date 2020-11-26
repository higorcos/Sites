//Ideia do projeto em julho 
// icone mostrando o consumo de energia do mês

//juntar todas os equipamentos e dá o custo do mês todo (usando o mesmo sistema já usados em outro projeto)
// lista de equipamento já definidas 
var potenciaEquipamento = 0;
var horasDeUso = 0;
var usoDias = 0;
var tarifaEnergia = 0;

const carregar = () => {
    var msg = window.document.getElementById('msg');

    potenciaEquipamento = document.getElementById('iPotencia').value
    horasDeUso = document.getElementById('iHoras').value
    usoDias = document.getElementById('iDias').value
    tarifaEnergia = document.getElementById('iTarifas').value
/*
    potenciaEquipamento = 0;
    horasDeUso = 0;
    usoDias = 0;
    tarifaEnergia = 0;
*/
    if (potenciaEquipamento.length == 0) {
        alert("Adicione a Potência do equipamento")
        document.getElementById('iPotencia').value = ''; //limpa o campo
        document.getElementById('iPotencia').focus();   // coloca a seta no local 
    } else if (horasDeUso.length == 0) {
        alert("Adicione o total de horas de uso diário do equipamento")
        document.getElementById('iHoras').value = ''; //limpa o campo
        document.getElementById('iHoras').focus();   // coloca a seta no local 
    } else if (usoDias.length == 0) {
        alert("Adicione o total de dias de uso durante o periodo de um mês")
        document.getElementById('iDias').value = ''; //limpa o campo
        document.getElementById('iDias').focus();   // coloca a seta no local 
    }
    else if (tarifaEnergia == "") {
        alert("Selecione o Estado correspondente a sua localização")
    } else {

        let consumo = (potenciaEquipamento * horasDeUso * usoDias / 1000).toFixed(2)
        let preço = (consumo * tarifaEnergia).toFixed(2)

        
        
        console.log(tarifaEnergia, "tarifa")
        console.log(consumo, "consumo")
        console.log(preço, "preço")
        msg.innerHTML = `<div class="retornoJS">
        <p>Consumo mensal: ${consumo}</p> 
        <p>Custo mensal: R$${preço}</p>  
        </div>
        <h3>Adicione outro equipamento ou finalize</h1>
    <div>
    <input type="button" value="Adcionar outro" class="botao" onclick="adicionarEquipamento()"/>
    </div>
    <div>
    <input type="button" value="Duplicar" class="botao" onclick="dublicarEquipamento()"/>
    </div>
    <div>
    <input type="button" value="Finalizar" class="botao" onclick="finalizar()"/>
    </div>
    `
    }

}/*
    document.getElementById('iPotencia').value = ''; //limpa o campo
    document.getElementById('iHoras').value = ''; //limpa o campo
    document.getElementById('iDias').value = ''; //limpa o campo
    document.getElementById('iPotencia').focus();   // coloca a seta no local    faz a mesma coisa ==== document.getElementById('iPotencia').focus(); 
*/