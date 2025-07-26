let livros = [
    {titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolki'},
    {titulo: 'O Poderoso Chefão', autor: 'Mario Puzo'},
    {titulo: 'O Alquimista', autor: 'Paulo Coelho'},
    {titulo: 'O Pequeno Príncipe', autor: 'Antoine'},
    {titulo: 'O Código Da Vinci', autor: 'Antoine'}

];

// function BuscarLivro(autor){
//     let encontrado = livros.find(l => l.autor === autor)

//     if (!encontrado){
//         return `❌ Livro de ${autor} não encontrado`;
//     }
//     else{
//         return `✅ Livro de ${autor} encontrado`;
//     }
// }
// console.log(BuscarLivro('Antoine'));

// function BuscarLivro(autor){
//     let encontrar = livros.filter(l => l.autor === autor)

//     if(encontrar.length === 0){
//         return ` ❌ Livro de ${autor} não encontrado`;
//     }
//     else{
//         return encontrar;
//     }
// }
// console.log( BuscarLivro('Antoine'));  // O Pequeno Príncipe
