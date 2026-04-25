let estoque = [10, 5, 8, 12];
 
function addEstoque(list){
    let total = 0;
    // Trocamos as vírgulas por ponto e vírgula
    for(let i = 0; i < list.length; i++){
        total += list[i];
    }
    return total;
}

console.log(addEstoque(estoque));
