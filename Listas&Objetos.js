// const names = ['Ericles','Bruna','Monica','Débora'];

// const João = names[1]; // Delcarando a possição que a variavel deve valer

// names.push('Diego', 'Roberto'); // Adicionando elementos no final da lista

// names.pop();

// const namesIsArray = Array.isArray(names); // Verificando se o elemento declarado é uma array

// names.unshift('Andreia');// Adicionando um elemento ao inicio da lista
// console.log(names);
// console.log(João);
// console.log(names.indexOf("Monica")); // Declarando em qual posição os elementos estão
// console.log(namesIsArray);

// const person = { // Declaração de objeto
//     FirstName: 'Ericles',
//     LastName: 'Soares',
//     age: 28,
//     weight: 85.0,
//     height: 1.72,
//     Hobbies: ["Play games","Coding","Watch movies"], // Concatenando mais de um elemento em uma lista
//     Dog: {
//         Name: 'Buldogue',
//         Age: 3
//     }
// };

// //const Name = person.Name; // Declarando qual a valor a variavel deve pegar
// //const LastName = person.LastName;
// //const Hobbies = person.hobbies[0] // Declarando qual objeto e qual elemento da lista deve ser exibido

// const {FirstName, LastName, age, Hobbies, Dog} = person; // Declaração de variavel que irá armazenar os elementos

// // person.Dog = 'Simba'; //Adicionando objeto novo as lista de objetos


// const tasks = [ // Declarando listas de objetos dentro de uma lista geral
//     {
//     Dia: 1,
//     Tarefa1: 'Estudar',
// },
// {
//     Dia: 2,
//     Tarefa2: 'Trabalhar',
// },
// {
//     Dia: 3,
//     Tarefa3: 'Treinar',
//     }
// ];

// console.log(`My name is ${FirstName} ${LastName} and my prefire hobbies are ${Hobbies[0]} and my dog is called ${Dog.Name} and have ${Dog.Age} old !!`);
// console.log(person);
// console.log(`My first focus of week in the ${tasks[0].Dia} day is ${tasks[1].Tarefa2} and my next task is ${tasks[0].Tarefa1} and the last tasks of day is ${tasks[2].Tarefa3} `); //Declarando qual objeto e qual elemento dentro de cada objeto deve ser exibido

// let frutas = ["maçã", "banana", "morango", "laranja", "abacate"];

// frutas.push("melancia");
// frutas.shift(0)

// console.log(frutas[0]);
// console.log(frutas[frutas.length -1]); // Comando para caso o arry mude, sempre pegará o ultimo objeto
// console.log(frutas.length)
// console.log(frutas.includes('morango'));

let livro = {
    titulo: "Harry Potter",
    autor: "J.K. Rowling",
    ano: 1997,
};
// console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.ano}`);

let livros = [{
    titulo: "Harry Potter",autor: "J.K. Rowling",ano: 1997,},
{titulo: "O Senhor dos Anéis",autor: "J.R.R. Tolkien",ano: 1954,},
{titulo: "O Hobbit",autor: "J.R.R. Tolkien",ano: 1937,}
]
// for(let Livros of livros){
//     console.log(`O livro ${Livros.titulo} foi escrito por ${Livros.autor} no ano de ${Livros.ano}`)
// }
function BuscarPorAutor(autor){
    let resultado = livros.filter(l => l.autor === autor) //Criando um novo array com os livros que atendem a condição

    if(resultado.length === 0){ // Se caso a condição solicitada não tiver nenhum caractere, me retornará false
        return `❌ O ${autor} não existe`
    }
    return resultado.map(l=>`✅ ${l.autor} escreveu os livros 📖 ${l.titulo}`).join('\n')//Utilizando o map para ler se há algum livro que atende a condição
}
console.log(BuscarPorAutor("J.R.R. Tolkien"));