const message = 'Hello World'; // Uso de variavel imutavel
console.log(message.length); //leitura de quantos caracteres tem no elemento

const FirstName = 'Ericles';
const LastName = 'Roque';

const names = 'Ericles';

const number = 8;

/* 1 */ console.log(`Conversão de numero para string ${number.toString()}`)// Conversão de numero para string
console.log(typeof number.toString()); // comando para retornar um tipo de um elemento

/*2*/ console.log(`Meu nome é ${FirstName.toLocaleLowerCase()} ${LastName.toUpperCase()}`); //Leitura de texto com uso de elementos com crase

/*3*/ console.log(names.split("")); // separa a string em array de caracteres

//Site para busca sobre Strings:
/* https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Strings8 */