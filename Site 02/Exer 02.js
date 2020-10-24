console.log(moment())
var dateNow = new Date();  // puxa a data 
var dayNow = dateNow.getDay() // puxa o dia
var monthNow = (dateNow.getMonth() + 1) //puxa o  mês que começa em 0
var yearNow = dateNow.getFullYear() //puxa o ano 

const verificar = () => {
    //monthF();
    //console.log(date);
    var AnoDoNascimento = (window.document.getElementById("iAno").value); //AAAA-MM-DD Formato da data fornecida pelo usuário

    const day = AnoDoNascimento.split('-')[2];     // dia
    const month = AnoDoNascimento.split('-')[1];   //nesse caso não precisamos fazer nenhum filtro diante do valor do mês
    const yearNas = AnoDoNascimento.split('-')[0]; // ano
    //console.log(day + "/" + month + "/" + yearNas) //mostra a data no formato do Brasil


    if (yearNas.length == 0 || yearNas > yearNow || yearNas == 0) {
        window.alert("Verifique os dados e tente novamente! ");
    } else {
        var sexo = window.document.getElementsByName('nSexo');
        var idade = yearNow - yearNas;
        var diferençaMeses = monthNow - month;
        var genero = '';

        var img = document.createElement('img'); //criando html pelo javascript
        img.setAttribute('id', 'img01'); //criamos um id para a foto chamada img1

        //console.log(diferençaMeses, 'normal');
        let testeN = Math.sign(diferençaMeses) //Verifica se o número é positivo negativo ou neutro
        if (testeN == -1) {
            var diferençaMeses = (monthNow - month) + 12;
            //console.log(diferençaMeses, 'true Alterado ');

        } else {
            //console.log(diferençaMeses, 'false');
        }

        var convertendo_data_Cliente = new Date();
        convertendo_data_Cliente.setDate(day)
        convertendo_data_Cliente.setMonth(month - 1) // tem que colocar -1 um porque o valor vem direto do cliente e ele não leva em consideração que o Date()começa em 0
        convertendo_data_Cliente.setFullYear(yearNas)
        //console.log(convertendo_data_Cliente, "set");

        var convertendo_data_ClienteD = convertendo_data_Cliente.getDate()
        var convertendo_data_ClienteM = (convertendo_data_Cliente.getMonth() + 1)
        var convertendo_data_ClienteY = convertendo_data_Cliente.getFullYear()

        console.log(`${convertendo_data_ClienteD}/${convertendo_data_ClienteM}/${convertendo_data_ClienteY}  get`) //mostra a data no formato do Brasil*/


        var dateNow2 = new Date();  // puxa a data 
        
        var month_FOR = (dateNow2.getMonth()+1) //Mês atual
        var yearNow2 = dateNow2.getFullYear()
        console.log(`${month_FOR}/${yearNow2}`);
        
        var dateNow3 = new Date();  // puxa a data 
        
        for (var contador = 0; convertendo_data_ClienteM != month_FOR; contador++) {
            
            var monthNow3 = (dateNow3.getMonth()+1)
            dateNow3.setMonth(dateNow3.getMonth() - 1);

            console.log(monthNow3, 'mês 02');
            console.log(contador, "contador");
            month_FOR = monthNow3;
                    //if (month == monthNow3) {
                        //}
        }

    }
    var resuldado = window.document.querySelector("div#iResultado");
    resuldado.style.textAlign = 'center';
    if (sexo[0].checked) {
        genero = 'Homem';


        if (diferençaMeses <= 12 && diferençaMeses != 0) {
            genero = 'Bebê'
            //bebê
            resuldado.innerHTML = ` ${genero} de ${diferençaMeses} meses`
            img.setAttribute('src', 'https://i.ibb.co/HHBQCnr/beb.png')

        } else if (diferençaMeses <= 0 && yearNas == yearNow) {//para abribui 0 meses  a pessoa tiver nascido no mês referente a pesquisa do usúario 
            genero = 'Bebê'
            //bebê
            resuldado.innerHTML = ` ${genero} de ${diferençaMeses} meses`
            img.setAttribute('src', 'https://i.ibb.co/HHBQCnr/beb.png');

        } else if (diferençaMeses == 0 && yearNas != yearNow) {//colocar para mostrar "1" idade mesmo o bebê tento 12 meses  
            genero = 'Criança'
            //criança
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/7XPYYzf/Crian-a-h.png');
        } else if (idade > 0 && idade < 11) {
            genero = 'Criança'
            //criança
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/7XPYYzf/Crian-a-h.png');
        } else if (idade < 22) {
            genero = 'Jovem'
            //jovem
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/31CFBDc/Jovens-h.png');
        } else if (idade < 60) {
            //Adulto
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/0QRZLZx/Adulto-h.png');
        } else {
            //idoso
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/dLJmvsD/Idoso-h.png');
        }

    } else if (sexo[1].checked) {
        genero = 'Mulher';

        if (yearNow == yearNas) {
            genero = 'Bebê'
            //bebê
            resuldado.innerHTML = ` ${genero} de ${diferençaMeses} meses`
            img.setAttribute('src', 'https://i.ibb.co/HHBQCnr/beb.png')


        } else if (idade > 0 && idade < 11) {
            genero = 'Criança'
            //criança
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/0XpK2VT/Crian-a-m.png');
        } else if (idade < 22) {
            genero = 'Jovem'
            //jovem
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/z2wPj2R/Jovens-m.png');
        } else if (idade < 60) {
            //Adulto
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/zf18t4b/Adulto-m.png');
        } else {
            //idoso
            resuldado.innerHTML = ` ${genero} de ${idade} anos`
            img.setAttribute('src', 'https://i.ibb.co/ZmSxxRk/Idoso-m.png');
        }
    }
    resuldado.style.textAlign = 'center';
    resuldado.innerHTML += `</br>`
    resuldado.appendChild(img);    //atribui de fato a imagem 
}

