const verificar = () => {
    var data = new Date();
    var ano = data.getFullYear();

    var fAno = window.document.getElementById("iAno");

    var resuldado = window.document.querySelector("div#iResultado")

    if (fAno.value.length == 0 || fAno.value > ano || fAno.value == 0) {
        window.alert("Verifique os dados e tente novamente! ");
    } else {
        var sexo = window.document.getElementsByName('nSexo');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img'); ///criando html pelo javascript
        img.setAttribute('id', 'img01'); //criamos um id para a fotochamada img1

        if (sexo[0].checked) {
            genero = 'Homem';

            if(ano == fAno.value){
                genero = 'Bebê'

            }else if (idade > 0 && idade < 11) {
                genero = 'Criança'
                //criança
                img.setAttribute('src','https://i.ibb.co/7XPYYzf/Crian-a-h.png');
            } else if (idade < 22) {
                genero = 'Jovem'
                //jovem
                img.setAttribute('src','https://i.ibb.co/31CFBDc/Jovens-h.png');
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','https://i.ibb.co/0QRZLZx/Adulto-h.png');
            } else {
                //idoso
                img.setAttribute('src','https://i.ibb.co/dLJmvsD/Idoso-h.png');
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if (idade > 0 && idade < 11) {
                genero = 'Criança'
                //criança
                img.setAttribute('src','https://i.ibb.co/0XpK2VT/Crian-a-m.png');
            } else if (idade < 22) {
                genero = 'Jovem'
                //jovem
                img.setAttribute('src','https://i.ibb.co/z2wPj2R/Jovens-m.png');
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','https://i.ibb.co/zf18t4b/Adulto-m.png');
            } else {
                //idoso
                img.setAttribute('src','https://i.ibb.co/ZmSxxRk/Idoso-m.png');
            }
        }
        resuldado.style.textAlign = 'center';
        resuldado.innerHTML = ` ${genero} de ${idade} anos`
        resuldado.innerHTML += `</br>`

        resuldado.appendChild(img);
    }
}

