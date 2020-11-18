//Ideia do projeto em julho 
// icone mostrando o consumo de energia do mês

const carregar = () => {
    var msg = window.document.getElementById('msg');

    var horasDeUso = 0;
    var usoDias = 0;
    var tarifaEnergia = 0;
    var potenciaEquipamento = 0;
    /*potenciaEquipamento = 40;
    horasDeUso = 6;
    usoDias = 20;
    tarifaEnergia = 0.60;
    */
    potenciaEquipamento = document.getElementById('iPotencia').value
    horasDeUso = document.getElementById('iHoras').value
    usoDias = document.getElementById('iDias').value
    tarifaEnergia = document.getElementById('iTarifas').value

    var consumo = (potenciaEquipamento * horasDeUso * usoDias / 1000).toFixed(2)
   console.log(consumo)
    var preço = (consumo * tarifaEnergia).toFixed(2)//verificar se foi colocado tarifa se não for falar para o usuário
    console.log(preço)
    msg.innerHTML = `<div class="retornoJS">
    <p>Consumo mensal: ${consumo}</p> 
    <p>Custo mensal: ${preço}</p>
    </div>`




}