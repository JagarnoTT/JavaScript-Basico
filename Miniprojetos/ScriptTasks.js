const input = document.querySelector('.text-task');
const validarTarefa = document.getElementById('button');
const CampoTarefaGeral = document.getElementById('new-tasks');


    const TextoCampoDeEntrada = () => input.value.trim().length > 0;

    const ValidarCampoDeTexto = () =>{
        const ErroInvalido = TextoCampoDeEntrada();
        
        if(!ErroInvalido){
            return input.classList.add('error');
        };

        const CampoTarefa = document.createElement('div');
        CampoTarefa.classList.add('CampoTextoTarefa');

        const TarefaAdicionada = document.createElement('p');
        TarefaAdicionada.classList.add('TextoTarefa');
        TarefaAdicionada.innerText = input.value;

        const lixeira = document.createElement('i');
        lixeira.classList.add('fa-solid');
        lixeira.classList.add('fa-trash-can');

        CampoTarefaGeral.appendChild(CampoTarefa);
        CampoTarefa.appendChild(TarefaAdicionada);
        CampoTarefa.appendChild(lixeira);
    };

    const ValidarTexto = () =>{
        const CampoDeEntradaValido = TextoCampoDeEntrada();

        if(CampoDeEntradaValido){
            return input.classList.remove('error');
        }

    };
    validarTarefa.addEventListener('click', () => ValidarCampoDeTexto());

    input.addEventListener('input', () => ValidarTexto());

