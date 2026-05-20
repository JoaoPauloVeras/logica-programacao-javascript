
let usuarios = ["ana", "Beto", "cArlos"];
let dominio = "gmail";

function generateEmails(users, dominio) {
    let listaPronta = [];
    for (let i = 0; i < users.length; i++) {

        let emailFormatado = users[i].toLowerCase() + "@" + dominio + ".com";
        listaPronta.push(emailFormatado);
    }
    return listaPronta;
}

let emailsDaEmpresa = generateEmails(usuarios, dominio);
console.log("Lista final de envios:", emailsDaEmpresa);
