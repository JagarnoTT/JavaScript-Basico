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



