let mapaCalor = [[],[],[]];
let temperaturaTotal = 0;

for(let i = 0 ; i< 3; i++){
    for(let j = 0 ; j < 3 ; j++){
        let temp = parseInt(prompt(`Linha ${i}, Coluna ${j}. Temperatura:`));
        mapaCalor[i][j] = temp
        temperaturaTotal += temp
    }
}
let mediaTemperatura = temperaturaTotal / 9;
console.log(`Média das temperaturas : ${mediaTemperatura.toFixed(2)} °C`)
if (mediaTemperatura > 30){
    console.log(`Alerta : Ambiente Instável`)
}else{
    console.log(`Ambiente Seguro`)
}
