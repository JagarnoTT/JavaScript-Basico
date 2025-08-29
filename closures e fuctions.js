function MeuNome(){
    let nome = 'Ericles';

    function saudacao(){
        console.log(`Olá, seja bem vindo ${(nome)}`)
    }
    function despedida(){
        console.log(`Ola, adeus ${nome}`)
    }
    return{
        saudacao: saudacao, despedida: despedida
    }
}
const Pessoa = MeuNome();
console.log(Pessoa.saudacao());
console.log(Pessoa.despedida());
console.log(MeuNome())