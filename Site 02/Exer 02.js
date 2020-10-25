
var dateNow = new Date();  // puxa a data atual 
var dayNow = dateNow.getDay() // dia
var monthNow = (dateNow.getMonth() + 1) // mês (valores vão de 0 a 11)
var yearNow = dateNow.getFullYear() //ano 

const verificar = () => {
    var AnoDoNascimento = (window.document.getElementById("iAno").value); //AAAA-MM-DD Recebe a data do cliente
    const dayNas = AnoDoNascimento.split('-')[2];     // dia
    const monthNas = (AnoDoNascimento.split('-')[1])  //mês (os valor vâo de 1 a 12)
    const yearNas = AnoDoNascimento.split('-')[0];    // ano
    var month = (monthNas) - 1
    //console.log(dayNas + "/" + monthNas + "/" + yearNas + " Valor passado pelo usúario") //mostra a data no formato do Brasil
    
    
    
    if (yearNas.length == 0 || yearNas > yearNow || yearNas == 0) {
        window.alert("Verifique os dados e tente novamente! ");
    } else {
        var sexo = window.document.getElementsByName('nSexo');
        var genero = '';
       
        var moment1 = moment()
        var moment2 = moment() 
        var moment3 = moment()
        /*__seta o mês e o anos da data do anoversário do cliente*/
        moment2.months(month) 
        moment2.years(yearNas)
    
        //console.log(moment1.format('DD/MM/YYYY'),"atual ");
        //console.log(moment2.format('DD/MM/YYYY'),'REsu');
    
        var diferençaMeses = moment1.diff(moment2,'month'); //mostra a diferença entre os meses das datas 
        console.log(diferençaMeses,"meses");  
        var idade = moment1.diff(moment2,'year'); //mostra a diferençaa entre os anos das datas
        console.log(idade,"idade");  
        
        var img = document.createElement('img'); //criando html pelo javascript
        img.setAttribute('id', 'img01'); //criamos um id para a foto chamada img1
        
        /*
        var convertendo_data_Cliente = new Date();
        convertendo_data_Cliente.setDate(day)
        convertendo_data_Cliente.setMonth(month - 1) // tem que colocar -1 um porque o valor vem direto do cliente e ele não leva em consideração que o Date()começa em 0
        convertendo_data_Cliente.setFullYear(yearNas)
        //console.log(convertendo_data_Cliente, "set");
        
        var convertendo_data_ClienteD = convertendo_data_Cliente.getDate()
        var convertendo_data_ClienteM = (convertendo_data_Cliente.getMonth() + 1)
        var convertendo_data_ClienteY = convertendo_data_Cliente.getFullYear()
        
        console.log(`${convertendo_data_ClienteD}/${convertendo_data_ClienteM}/${convertendo_data_ClienteY}  get`) //mostra a data no formato do Brasil
        
        
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
            
        }*/
        var resuldado = window.document.querySelector("div#iResultado");
        resuldado.style.textAlign = 'center';
        if (sexo[0].checked) {
            genero = 'Homem';
        
            
            if (diferençaMeses < 12 || diferençaMeses == 0) {
                genero = 'Bebê'
                //bebê
                if(diferençaMeses > 4){
                resuldado.innerHTML = ` ${genero} de ${diferençaMeses} meses`
                img.setAttribute('src', 'https://i.ibb.co/HHBQCnr/beb.png')
                } else {
                    resuldado.innerHTML = ` ${genero} de menos de cinco meses`
                    img.setAttribute('src', 'https://i.ibb.co/HHBQCnr/beb.png')
                }
                
        
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
        
        if (diferençaMeses < 12 || diferençaMeses == 0) {
            genero = 'Bebê'
            //bebê
            if(diferençaMeses > 4){
            resuldado.innerHTML = ` ${genero} de ${diferençaMeses} meses`
            img.setAttribute('src', 'https://i.ibb.co/HHBQCnr/beb.png')
            } else {
                resuldado.innerHTML = ` ${genero} de menos de cinco meses`
                img.setAttribute('src', 'https://i.ibb.co/HHBQCnr/beb.png')
            }
            
        }  else if (idade > 0 && idade < 11) {
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
}



//moment().clone() //clonar a data
/*__só muda a forma de escrever a diferença entre a data escrita e a data atual 
(não é muito eficiente)
o uso do diff é melhor      */
//console.log(moment('2019/10/23').fromNow()); //conta como se a se estivesse no presente 
//console.log(moment('2019/09/23').toNow()); //conta como se a se estivesse no passado