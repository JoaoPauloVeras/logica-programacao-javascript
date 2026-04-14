let senhaCorreta = "javascript123";
let acerto = false;
for(let tentativas = 1 ; tentativas <=3 ; tentativas ++){
    let entrada = prompt("Digite sua senha");
    if(entrada === senhaCorreta){
        console.log("Acesso Concedido");
        acerto = true;
        break;
    }else{
        if(tentativas < 3)
        console.log("Senha incorreta, tente novamente")
    }
}
if(!acerto){
    console.log("Sua conta foi bloqueada, tente novamente mais tarde")
}
