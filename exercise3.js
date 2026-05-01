let convidados = ["João", "Maria", "Pedro", "Ana"];
 function verificarConvidados(list , nameToSearch){
   for(let i =0 ; i< list.length ; i++){
      if(list[i] == nameToSearch){
         return "Welcome "+nameToSearch+"! Your name is on the list.";
      }
   }return "Sorry, " + nameToSearch + " is not invited.";
 }
 console.log(verificarConvidados(convidados , "João"))
