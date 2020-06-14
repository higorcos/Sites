

const carregar = () => {
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('img');
    var data = new Date();   //data
    var hora = data.getHours(); // horas
    
    //var hora = 0   //teste madrugada
    //var hora = 11; //teste manhâ
    //var hora = 12  //teste tarde
    //var hora = 18  //teste noite 
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 5) {
        imagem.src = "https://i.ibb.co/yBXBfND/Night-00.png";
        document.body.style.background = "#24262f";
    } else if (hora >= 5 && hora < 12) {
        //bom dia
        imagem.src = "https://i.ibb.co/cD45SNt/Morning.png";
        document.body.style.background = "#ddb273";

    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        imagem.src = "https://i.ibb.co/kKZPhmr/Evening.png";
        document.body.style.background = "#958174";

    } else {
        // boa noide 
        imagem.src = "https://i.ibb.co/XpHshVy/Night.png";
        document.body.style.background = "#184765";

    }

}