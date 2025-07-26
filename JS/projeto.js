let livros = [ { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
    { titulo: 'O Alquimista', autor: 'Paulo Coelho' },
    { titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry' }];

    function MostrarMenu(){
        console.log("\n catalogo de livros");    
        console.log("1 - Ver todos os livros");    
        console.log("2 - buscar por titulo");    
        console.log("3 - Sair");    
    }

    function verTodosOsLivros(){
        console.log("\n Lista de livros: ");
        livros.forEach(livros, index) =>{
            console.log(`${index + 1}.${livros.titulo} - ${livros.autor}`)
        }

        function BuscarPorTitulo(titulo){
            let resultado = livros.find(livros => livros.titulo === titulo);

            if(resultado){
                console.log(`\n Livro encontrado: ${resultado.titulo} - ${resultado.autor
                    }`);
            }
            else{
                console.log(`\n Livro não encontrado`);
            }
        }
    }
