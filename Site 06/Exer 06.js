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
    } else if (horasDeUso.length == 0) {
        alert("Adicione o total de horas de uso diário do equipamento")
    } else if (usoDias.length == 0) {
        alert("Adicione o total de dias de uso durante o periodo de um mês")
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
    </div>`
    }
}