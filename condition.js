// const sum = 1 + 2;
// if (sum === 3){
//     console.log("Sum is 3");
// }
// else if (sum === 4){
//     console.log("Sum is 4");
// }
// else{
//     console.log("Sum is not 3 or 4");
// };

// let sun = sum === 3 ? "true" : "false";
// console.log(sun)

let idade = -1;

if(idade < 16 && idade >= 1){
    console.log(`Não é permitido votar com ${idade} anos!`)
}
else if (idade >= 16 && idade <18){
    console.log(`É opcional que o individuo com idade ${idade} vote!`)
}
else if (idade >= 18 && idade <= 59){
    console.log(`É obrigatório que o individuo com idade ${idade} anos vote!`)
}
else if (idade >59){
    console.log(`Não é obrigatório que o individuo com idade ${idade} anos vote, devido a sua idade avançada!`)
}
else if(typeof idade !== "number" || idade < 0){ // Condicional para evitar erros de digitação ou elemento string e menos que 0
    console.log(`Idade inválida!`)
};

let dianumero = 3;
let nomeDoDia;

switch (dianumero){
    case 1: 
        nomeDoDia = "domingo";
        break;
    case 2: 
    nomeDoDia = "segunda-feira";
        break;
    case 3: 
    nomeDoDia = "terça-feira";
        break;
    case 4: 
    nomeDoDia = "quarta-feira";
        break;
    case 5: 
    nomeDoDia = "quinta-feira";
        break;
    case 6: 
    nomeDoDia = "sexta-feira";
        break;
    case 7: 
    nomeDoDia = "sábado";
        break;
    default:
        nomeDoDia = "Dia da semana não encontrado!"
        break;
}

console.log(nomeDoDia);