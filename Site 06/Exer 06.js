//Ideia do projeto em julho 
// icone mostrando o consumo de energia do mês

const carregar = () => {
    var msg = window.document.getElementById('msg');
    
    var horasDeUso = 0;
    var usoDias = 0;
    var tarifaEnergia = 0;
    potenciaEquipamento = 40;
    horasDeUso = 6;
    usoDias = 20;
    tarifaEnergia = 0.60;
    
    
    var consumo = potenciaEquipamento * horasDeUso * usoDias /1000 
    var preço = consumo * tarifaEnergia
    msg.innerHTML = `O consumo mensal do aparelho  ${consumo} custo do funcinamento dele ${preço}`
     

    

}