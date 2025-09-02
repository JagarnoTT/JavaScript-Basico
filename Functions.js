// const soma = (a, b = 10)=>
//  a + b;
// const Soma = soma(2)
// console.log(Soma);

// let cidade = ['paranavai', 'maringa','curitiba', 'blumenau', 'florianópolis'];

// // function CadaCidade(indice){

// //     indice = indice.toLowerCase();

// //     if (cidade.includes(indice)){
// //         return `A cidade ${indice} está na lista`
// //     }
// //     else{
// //         return `A cidade ${indice} não está na lista`
// //     }
// // }
// // console.log(CadaCidade('curitiba'))
// // console.log(CadaCidade('OSASCO'));
// // console.log(CadaCidade('blumenau'));

// function CadaCidade(EscolherCidade){

//     EscolherCidade = EscolherCidade.toLowerCase();

//     let Cidadeformatada = EscolherCidade[0].toUpperCase() + EscolherCidade.slice(1).toLowerCase();

//     if(Cidadeformatada.includes(EscolherCidade)){
//         return `✅ A cidade ${Cidadeformatada} está na lista`
//     }
//     else{
//         return `❌ A cidade ${Cidadeformatada} não está na lista`
//     }
// }
// console.log(CadaCidade('PaRaNaVaI'));
// // console.log(CadaCidade('curiTIBA'));
// // console.log(CadaCidade('BLUmenau'));
// console.log(CadaCidade('OSASCO'));
// console.log(quadrado(5)); // Leitura da função

// function quadrado(numero){ // Comando inicial nome + parametros > corpo da função
// 	return numero * numero}


// let fator = function fatorial(n){
//     if(n <= 1){
//         return 1
//     }

//     return n * fatorial(n -1)
// }

// // console.log(fator(3));

// function meuCarro(carro){
//     carro.marca = "Toyota";

// }

// const meucarro = {marca: 'Honda', modelo: 'Civic'}

// meuCarro(meucarro);
// console.log(meucarro);
// console.log(meucarro.marca);

// function Compras(item){
// item.proteina = 'carne';
// }
// const itens = {proteina: 'frango', carboidrato: 'arroz'}
// Compras(itens)
// console.log(itens)
    const calcularArea = (base, altura) => base * altura
    console.log(`A area é: ${calcularArea(2, 3)}`)
    
    