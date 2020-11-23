//Ideia do projeto em julho 
// icone mostrando o consumo de energia do mês

//verificar se foi colocado tarifa se não for falar para o usuário

const carregar = () => {

    var msg = window.document.getElementById('msg');

    let potenciaEquipamento = document.getElementById('iPotencia').value
    let horasDeUso = document.getElementById('iHoras').value
    let usoDias = document.getElementById('iDias').value
    let tarifaEnergia = document.getElementById('iTarifas').value
    console.log(tarifaEnergia, "tarifa")

    let consumo = (potenciaEquipamento * horasDeUso * usoDias / 1000).toFixed(2)
    console.log(consumo, "consumo")
 
    let preço = (consumo * tarifaEnergia).toFixed(2)

    console.log(preço, "preço")
    msg.innerHTML = `<div class="retornoJS">
    <p>Consumo mensal: ${consumo}</p> 
    <p>Custo mensal: ${preço}</p>
    </div>`
}