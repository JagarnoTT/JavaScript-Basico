// const cars = ['BMW', 'Mercedes', 'Toyota', 'Ford', 'Honda', 'Wolksvagen', 'Audi', 'Nissan', 'Kia', 'Hyundai'];

//  for(let i = 0; i < 7; i++){ // Estrutura de repetição for
//      console.log(cars[i]);
//  };

//  for (let car of cars){ // Estrutura de repetição for of, ´percorre cada elemento do array e executa o código a cada vez
//      console.log(car);
//  };

//  cars.forEach(function(cars, index){ // Estrutura de repetição forEach, ele percorre cada elemento do Array e executa o código, o diferencial é o uso de uma função.. assim possibilitando diversas funcionalidades como por exemplo o uso do index
//      console.log(index, cars);
//      }
//  );

// let i = 0;
// while (i < 10){
//     console.log(cars[i])
//     i++;
// }

// let numero = prompt('Digite um numero: ');
// numero = Number(numero);


// if (numero === 0){
//     console.log('O número é 0');
// }
// else if(numero < 0){
//     console.log('O número é negativo');
// }
// else{
//     console.log('O número é positivo');
// };

// if (numero > 0){
//     for(let i = 1; i<= numero; i++){
//         if(i % 5 === 0) continue;
//         console.log(i);
//     };
// }
// else if(numero <= 0){
//     for(i = numero; i < 0; i++){
//         if (i % 5 === 0) continue;
//         console.log(i);
//     };
// }else{
//     console.log('O 0 não pode ser contabilizado');
// }

// let correta = 1234;
// let tentativas = 1234;
// let tentativasMaximas = 5;

// while(tentativas !== correta && tentativasMaximas < 5){
//     tentativas = prompt('Digite a senha: ');
//     tentativas++;
// };

// if(tentativas === correta){
//     console.log('✅Acesso liberado');
// }
// else{
//     console.log('❌Acesso negado - Sua conta está bloqueada');
// };

// let escolha = 0; // Declarando variavel

// for(i = escolha; i <= 3; i++){ // loop for
// escolha++
// do{ // loop do while
//     switch(escolha){ // loop switch
//         case 1:
//             console.log('👋 Você escolheu a opção 1!');
//             break;
//         case 2:
//             console.log('👋 Você escolheu a opção 2!');
//             break;
//         case 3:
//             console.log('👋 Você escolheu a opçao 3!');
//             break;
//         default:
//             console.log('❌ Opção inválida!');
//     }
// } while(escolha === 0)
//     console.log(`A escolha do usuario foi ${escolha}`)

    
// let lista = ['mouse', 'teclado', 'monitor', 'fones de ouvido'];

// for(listas of lista){
//     console.log(listas);;
// }

// let contador = 1;

// while(true){
//     console.log(`rodando... ${contador}`);
//     contador++;

//     if (contador === 10) break;
// }
