const contar = () => {
    let numeroI = Number(document.getElementById('iInicial').value);
    let numeroF = Number(document.getElementById('iFinal').value);
    let pulo = Number(document.getElementById('iPulo').value);

    let resultado = document.getElementById('iRe');

    console.log(numeroI)
    console.log(numeroF)
    console.log(pulo)


    if (numeroI == 0 || numeroF == 0 ) {
        resultado.innerHTML = `[Erro] selecione os números`
    } else {
        resultado.innerHTML = `Contando \u{1F916} `;
    if(pulo <= 0 ){
        pulo = 1;
        window.alert('O pulo será igua a 1');
    }
    if(numeroF > numeroI){
        for(let n = numeroI; n <= numeroF; n += pulo) {
            console.log(n);
            resultado.innerHTML += `\u{1F449}${n}; `
            
        }
        resultado.innerHTML += `\u{1F389}`
    }else {
            for(let n = numeroI; n >= numeroF; n -= pulo) {
                console.log(n);
                resultado.innerHTML += `\u{1F449}${n}; `
                
            }
            resultado.innerHTML += `\u{1F389}`
    
    }

}
}





