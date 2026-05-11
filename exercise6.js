function carregarCelular(cargaInicial){
    if(cargaInicial >= 100){
        return "Erro: Bateria já está cheia ou inválida "
    }

    while(cargaInicial < 100){
        cargaInicial += 1;
        console.log(`Carga em ${cargaInicial}%`)
    }
        return "Carga completa! Pode retirar da tomada"
    
}
carregarCelular(parseInt(prompt('Qual a carga inicial do celular?')))
