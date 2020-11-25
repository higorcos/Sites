//Ideia do projeto em julho 
// icone mostrando o consumo de energia do mês

//juntar todas os equipamentos e dá o custo do mês todo (usando o mesmo sistema já usados em outro projeto)
// lista de equipamento já definidas 
const carregar = () => {
    var msg = window.document.getElementById('msg');

    let potenciaEquipamento = document.getElementById('iPotencia').value
    let horasDeUso = document.getElementById('iHoras').value
    let usoDias = document.getElementById('iDias').value
    let tarifaEnergia = document.getElementById('iTarifas').value
    if (potenciaEquipamento.length == 0) {
        alert("Adicione a Potência do equipamento")
        document.getElementById('iPotencia').value=''; //limpa o campo
        document.getElementById('iPotencia').focus();   // coloca a seta no local 
    } else if (horasDeUso.length == 0) {
        alert("Adicione o total de horas de uso diário do equipamento")
        document.getElementById('iHoras').value=''; //limpa o campo
        document.getElementById('iHoras').focus();   // coloca a seta no local 
    } else if (usoDias.length == 0) {
        alert("Adicione o total de dias de uso durante o periodo de um mês")
        document.getElementById('iDias').value=''; //limpa o campo
        document.getElementById('iDias').focus();   // coloca a seta no local 
    }
    else if (tarifaEnergia == "") {
        alert("Selecione o Estado correspondente a sua localização")
    } else {
        
        let consumo = (potenciaEquipamento * horasDeUso * usoDias / 1000).toFixed(2)
        let preço = (consumo * tarifaEnergia).toFixed(2)
        
        document.getElementById('iPotencia').value=''; //limpa o campo
        document.getElementById('iPotencia').focus();   // coloca a seta no local    faz a mesma coisa ==== document.getElementById('iPotencia').focus(); 
        
        console.log(tarifaEnergia, "tarifa")
        console.log(consumo, "consumo")
        console.log(preço, "preço")
        msg.innerHTML = `<div class="retornoJS">
    <p>Consumo mensal: ${consumo}</p> 
    <p>Custo mensal: R$${preço}</p>  
    </div>
    <h3>Adicione outro equipamento ou finalize</h1>
    <div>
    <input type="button" value="Adcionar" class="botao" onclick="adicionarEquipamento()"/>
    </div>
    <div>
    <input type="button" value="Finalizar" class="botao" onclick="finalizar()"/>
    </div>
    `
}

}
