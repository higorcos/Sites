function falar() {
  document.write("voce está imune ");
}
//typeof "nome da variavel" = faz leitura de qual tipo é a variavle
//null sem valor/tirar valor mas é um objetc 
// var= a variavel (não necessita colocar o tipo )
// NaN = não é um numero
//("prazer " + nomeP1);  ==== concatenação 
// prompt retorna uma string sempre 
   //(number + number) faz adição 
   //(string + string) faz concatenação 

/*     **********Para converter
   Number.parseInt(n) ou parseInt(n)
   Number.parseFloat(n) ou parseFloat(n)
   Number(n) === ele se vira
   String(n) ou n.toString()
*/

/***************FORMATAÇÂO
   var s = "texto"
   s.length //revela o tamanho da string
   s.toUpperCase()  // tornar a string maiusculas
   s.toLowerCase()  // tornar tudo minusculo

   var n1 = 12334.5
   n1.tofixed(2);    //duas casas decimas
   n1.replace('.',',')  //mudar . por vircula
   n1.toLocaleString('pt-br', {style: 'currency', 'currency: 'BRL'}) //trasnformar em dinheiro (rel ) Currency=dinheiro
*/
/***************OPERADORES
    ARITMÉTICOS
    + adição
    - subtração
    * multiplicação
    / divisão
    % resto da divisão
    ** potencia

CUIDADO Ordem de precedência
   ()
   **
   * / %    // da esquerda para direita
   + _

Adribuição + opreração 
  var n = 5 
    n += 1
    n -= 4
    n *= 7
    n /= 8
    n %= 4
    n **= 3

Incremeto 
    n++ ou ++n    (localização do sinal altera a ordem de mostrar o resultado do incremento  com o sinal da frente ele mostra automaticamente)
    n-- ou --n

Relacionais ====== o resultado sempre é true ou false = boolean  
    >   maior que 
    <   menos que 
    >=  maior e igual 
    <=  menor e igual
    ==  igual 
    === igual valor e tipo ex int,float ...
    !+  diferente de 

Lógicos      **************CUIDADO Ordem de precedência(já está na ordem )
    !  negação 
    && conjunção "E"
    || disjunção "OU"

Ternário(possue três partes)
    Teste ? true : false
        Pergunta  
          ? 
        Resposta da pergunta
        tal_coisa : tal_coisa02

        exemplo:
        var name = "higor";
        name.length == 5 ? "contém cinco letras" : "não contém"

/*************** DOM
 * *****************é a arvore para controlar tudo (segue uma ordem como um diretório)
          Sem várias formas se percorrer essa Árvore 


Por Marca 
        getElementsByTagName("")[]  //se tiver mais de um elemento com a tag deve colocar qual quer modificar dentro dos "[]" sendo 0 o primeiro a aparecer
por ID
        getElementById()
por nome
        getElementsByName()[]
por classe 
        getElemntsByClassName()[]
por seletor (Css)
        querySelector()
        querySelectorAll() 'plural'


///////////////
console.log = document.white
////////////
var variavel = new Date()
var variavel2 = variavel.getHours()
////////////
  getDay() ==== fala o numero da semana sendo 0 = a domingo
    
  
 







    */