var dateNow = new Date();  // puxa a data atual 
//var dayNow = dateNow.getDay() // dia
//var monthNow = (dateNow.getMonth() + 1) // mês (valores vão de 0 a 11)
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
