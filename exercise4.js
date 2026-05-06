let nota1 = Number(prompt("Qual a primeira nota?"));
let nota2 = Number(prompt("Qual a segunda nota?"));
let nota3 = Number(prompt("Qual a terceira nota?"));
let listaNotas = [nota1, nota2, nota3];

function processarMedia(notasAluno) {
    let soma = 0 ; 
    for (let i = 0; i < notasAluno.length; i++) {
        soma += notasAluno[i]; 
    }
    let media = soma / notasAluno.length; 
    let mediaFormatada = media.toFixed(1); 
    if (media >= 7) {
        return `Aprovado com média ${mediaFormatada}`;
    } else if (media >= 5) {
        return `Recuperação com média ${mediaFormatada}`;
    } else {
        return `Reprovado com média ${mediaFormatada}`;
    }
}

console.log(processarMedia(listaNotas));
