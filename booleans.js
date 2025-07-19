// false;
// true;

// console.log(2=2);

//  null && undefined;

//  const x = null; // Quando queremos declarar quando uma variavel é vazia

//  const y = undefined; // Quando queremos declarar que a variavel é nada, é como querer anular a mesma

let tentativasErradas = 4;
let senhaCorreta = false;

let contaBloqueada = tentativasErradas >= 4 || senhaCorreta === false;

let mensagem = contaBloqueada ? "Sua conta está bloquada" : "Você pode tentar novamente";

console.log(mensagem);


