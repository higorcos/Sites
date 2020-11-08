//Ideia do projeto em julho 
// icone mostrando o consumo de energia do mês

var potenciaEquipamento = 0;
var horasDeUso = 0;
var usoDias = 0;
var tarifaEnergia = 0;

 potenciaEquipamento = 40;
 horasDeUso = 6;
 usoDias = 20;
 tarifaEnergia = 0.60;

console.log((potenciaEquipamento * horasDeUso * usoDias /1000)*tarifaEnergia)
