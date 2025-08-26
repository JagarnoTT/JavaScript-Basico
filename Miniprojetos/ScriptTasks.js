const input = document.querySelector('.text-task');
const button = document.querySelector('.button');
const addTask = document.querySelector('.new-tasks');

const ValidateInput = () =>  input.value.trim().length > 0; //Validando se conteudo do nput é maior que 0;

const ValidadeTasks = () =>{ // Função para verificar a tarefa
    const InputisValid = ValidateInput();

    if(!InputisValid){ // Condição para acionar o estilo de erro
        return input.classList.add('error')
    }

    const NewTask = document.createElement('div');
    NewTask.classList.add('ContainerTask');

    const TaskContent = document.createElement('p');
    TaskContent.textContent = input.value;

    TaskContent.addEventListener('click', () => HandleClick(TaskContent)) 

    const TrashTask = document.createElement('i');
    TrashTask.classList.add('fa-solid');
    TrashTask.classList.add('fa-trash-can');

    TrashTask.addEventListener('click', ()=> HandleTaskDelete( NewTask,TaskContent))

    addTask.appendChild(NewTask);
    NewTask.appendChild(TaskContent);
    NewTask.appendChild(TrashTask);

    input.value = '';
}

const HandleClick = (TaskContent) =>{
    const tasks = addTask.children;

    for(const task of tasks){
        const TaskClicked = task.firstChild.isSameNode(TaskContent)
        if(TaskClicked)
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


