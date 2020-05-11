/*/////transformando numero
var n1 = Number(window.prompt("Fale um número "));
var n2 = Number(window.prompt("Fale outro número "));

////// string/ html / 
window.document.write(`Valor do cálculo iqual a ${resul}`);

var nome1 = window.prompt("Qual o seu nome ?");
window.document.write(`Prazer ${nome1}, seu nome tem ${nome1.length} letras.
  <br/> Fica ${nome1.toUpperCase()} e ${nome1.toLowerCase()}`);

///////////////  DOM
var p1 = window.document.getElementsByTagName('p')[1];
window.document.write(p1.innerText);

window.document.body.style.background = 'black';

var variavel = window.document.getElementById('msg')
variavel.innerText = 'estou aguardando...'
var variavel = window.document.getElementsByName('usando_name')[0]
variavel.innerText = "olá!";
var variavel  = window.document.querySelector('div.usando_name');
variavel.style.background = 'blue'     
var variavel  = window.document.querySelector('div.usando_name');
variavel.style.background = 'blue'


///////////////////////////EVENTO DOM
var tagDiv = window.document.getElementById('evento_DOM');
tagDiv.addEventListener('click',clicar);
tagDiv.addEventListener('mouseenter', mouseDentro);
tagDiv.addEventListener('mouseout', mouseFora);

function clicar() {
  tagDiv.style.background = "greenyellow";
  tagDiv.innerText = 'Clicou';
  
}
function mouseDentro() {
  tagDiv.style.background = "blue";
  
}

  function mouseFora() {
    tagDiv.style.background = "black";


  }



/////////////////////////Eventos Dom
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <title>Usando Eventos Dom</title>
  <style>
  body {
  
    font-family: monospace;
    background-color: black;
    color: #2d3b66;
  }
  div{
    font-size: 13px;
  }
  </style>
  
  
</head>

<body>
  <h1>Usando Eventos DOM</h1>
  <h2>Somando valores</h2>
  <input type="number" name="txtn1" id="txtn1"> +
  <input type="number" name="txtn2" id="txtn2">
  <input type="button" value="Somar" onclick="somar()">
  <div id="res"> Resultado</div>

  <script>
    function somar() {
      var sn1 = window.document.getElementById('txtn1')
      var sn2 = window.document.getElementById('txtn2')
      var res = window.document.getElementById('res')
      var n1 = Number(sn1.value)
      var n2 = Number(sn2.value)
      var s = n1 + n2
      res.innerHTML = `</br>A soma entre ${n1} e ${n2} é igual a ${s}`
    }
  </script>
</body>
</html>
<!---> 
/////////////////////////////*/