const input = document.querySelector('.text-task');
const button = document.querySelector('.button');
const addTask = document.querySelector('.new-tasks');

const ValidateInput = () =>  input.value.trim().length > 0; //Validando se conteudo do input é maior que 0;

const ValidadeTasks = () =>{ // Função para verificar a tarefa
    const InputisValid = ValidateInput();

    if(!InputisValid){ // Condição para acionar o estilo de erro
        return input.classList.add('error')
    }

    const NewTask = document.createElement('div'); //Criando novo elemento pai
    NewTask.classList.add('ContainerTask');//Adicionando classe

    const TaskContent = document.createElement('p');//Criando novo elemento filho
    TaskContent.textContent = input.value;

    TaskContent.addEventListener('click', () => HandleClick(TaskContent)) 

    const TrashTask = document.createElement('i');//Criando novo elemento filho
    TrashTask.classList.add('fa-solid');//Adicionando classe
    TrashTask.classList.add('fa-trash-can');//Adicionando classe

    TrashTask.addEventListener('click', ()=> HandleTaskDelete( NewTask,TaskContent)) //Adicionando função para interação com elemento

    addTask.appendChild(NewTask); //Declarando nós
    NewTask.appendChild(TaskContent);//Declarando nós
    NewTask.appendChild(TrashTask);//Declarando nós

    input.value = ''; //Limpando input inserir tasks
}

const HandleClick = (TaskContent) =>{ //Adicionando função de interação
    const tasks = addTask.children; //leitura de nós dentro do elemento pai

    for(const task of tasks){ //loop de leitura dos nós
        const TaskClicked = task.firstChild.isSameNode(TaskContent) //verificação de conteudo se é o mesmo que está sendo interagido
        if(TaskClicked) //Condição
            task.firstChild.classList.toggle('Complete')
    }
}

const HandleTaskDelete = (NewTask, TaskContent) =>{
     const tasks = addTask.children;

     for(const task of tasks){
        const DeleteTask = task.firstChild.isSameNode(TaskContent)
        if(DeleteTask){
            NewTask.remove()
        }
     }
    
}
const InputChangeValid = () =>{
        const InputisValid = ValidateInput();

        if (InputisValid){
            return input.classList.remove('error');
        }
    }

button.addEventListener('click',() => ValidadeTasks());//Função para validar click no botão
input.addEventListener('input', () => {InputChangeValid()
    }
);


