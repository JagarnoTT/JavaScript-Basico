const soma = (a, b = 10)=>
 a + b;
const Soma = soma(2)
console.log(Soma);

let cidade = ['paranavai', 'maringa','curitiba', 'blumenau', 'florianópolis'];

// function CadaCidade(indice){

//     indice = indice.toLowerCase();

//     if (cidade.includes(indice)){
//         return `A cidade ${indice} está na lista`
//     }
//     else{
//         return `A cidade ${indice} não está na lista`
//     }
// }
// console.log(CadaCidade('curitiba'))
// console.log(CadaCidade('OSASCO'));
// console.log(CadaCidade('blumenau'));

function CadaCidade(EscolherCidade){

    EscolherCidade = EscolherCidade.toLowerCase();

    let Cidadeformatada = EscolherCidade[0].toUpperCase() + EscolherCidade.slice(1).toLowerCase();

    if(Cidadeformatada.includes(EscolherCidade)){
        return `✅ A cidade ${Cidadeformatada} está na lista`
    }
    else{
        return `❌ A cidade ${Cidadeformatada} não está na lista`
    }
}
console.log(CadaCidade('PaRaNaVaI'));
console.log(CadaCidade('curiTIBA'));
console.log(CadaCidade('BLUmenau'));
console.log(CadaCidade('OSASCO'));