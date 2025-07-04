const names = ['Ericles','Bruna','Monica','Débora'];

const João = names[1]; // Delcarando a possição que a variavel deve valer

names.push('Diego', 'Roberto'); // Adicionando elementos no final da lista

names.pop();

const namesIsArray = Array.isArray(names); // Verificando se o elemento declarado é uma array

names.unshift('Andreia');// Adicionando um elemento ao inicio da lista
console.log(names);
console.log(João);
console.log(names.indexOf("Monica")); // Declarando em qual posição os elementos estão
console.log(namesIsArray);

const person = { // Declaração de objeto
    Name: 'Ericles',
    LastName: 'Soares',
    age: 28,
    weight: 85.0,
    height: 1.72,
    hobbies: ["Play games","Coding","Watch movies"] // Concatenando mais de um elemento em uma lista
};

const Name = person.Name; // Declarando qual a valor a variavel deve pegar
const LastName = person.LastName;
const Hobbies = person.hobbies[0] // Declarando qual objeto e qual elemento da lista deve ser exibido

console.log(`My name is ${Name} ${LastName} and my prefire hobbies are ${Hobbies}`);
