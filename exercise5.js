let precoProdutos = [10.50, 40.00, 5.00, 100.00];
let limiteCartao = 100;
let somaTotal = 0
let itensProcessados = 0
for(let i = 0 ; i < precoProdutos.length ; i++){
if(somaTotal + precoProdutos[i] > limiteCartao){
   console.log("O limite do cartão é insuficiente")
   break;
}
somaTotal += precoprodutos[i];
itensProcessados ++;
}
console.log(`Total da compra =${somaTotal.toFixed(2)}. Quantidade de itens : ${itensProcessados}`)
