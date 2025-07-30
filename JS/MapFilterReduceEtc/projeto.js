let livros = [ //Array com os objetos que seram manipulados
    {titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'},
    {titulo: 'O Alquimista', autor: 'Paulo Coelho'},
    {titulo: '1984', autor: 'George Orwell'},
    {titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry'}
];

function ExibirLivros(){
    console.log("\n📚 CATÁLOGO DE LIVROS"); // Título do menu
    console.log("1 - Ver todos os livros"); // Opção 1
    console.log("2 - Buscar por título");   // Opção 2
    console.log("6 - Sair");  
}
function ContadorDeObjetos(livro, index){
    livros.forEach(`${index + 1} - ${livro.titulo} - ${livro.autor}`)
}
function EscolherLivro(titulo){
    let escolhido = livros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if(escolhido){
        console.log(`\n 📚Você escolheu: ${escolhido.titulo} do autor ${escolhido.autor}\n`);
    }
    else{
        console.log(`❌ O Livro ${titulo} não foi encontrado! \n`);
    }
}
EscolherLivro('1984');
EscolherLivro('O segredo dos bichos');