//Declaração de variaveis

let idade = 28;
let nome = "Ericles";
let cidade = "Joinvile"

console.log(`Meu nome é ${nome}`);
console.log(`Eu tenho ${idade} anos`);
console.log(`Eu moro em ${cidade}`);

// Tipos de dados

let Frase = "A verdadeira insanidade é querer resultados diferentes fazendo sempre a mesma coisa -Einstein";
let numero = 1997;
let boolean = true;
let Nenhum = null;
let SemValor = undefined;
let BigInt = 5689423596578215n;

console.log(typeof Frase);
console.log(typeof numero);
console.log(typeof boolean);
console.log(typeof Nenhum);
console.log(typeof SemValor);
console.log(typeof BigInt);

// Operadores numéricos

let a = 10;

let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Operadores de comparação

let A = 5;

let B = 15;

let C = 3;

console.log(A > B && B > C); // False
console.log(A > B || B > C); //True
console.log(!(A < C)); // True


let AnoNascimento = prompt("Qual seu ano de nascimento? "); // Utilizando prompt para interagir com o usuario;

AnoNascimento = Number(AnoNascimento); //convertendo a string para numero;

let data = new Date();
let anoAtual = data.getFullYear();

let resultado = anoAtual - AnoNascimento;

var CemAnos =  100 - resultado;

console.log(`Você tem ${resultado} anos. Para chegar a 100 anos, faltam ${CemAnos} e você é ${resultado >= 18 ? "Maior de idade" : "Menor de idade"}`);