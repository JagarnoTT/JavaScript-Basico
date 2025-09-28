let inputCampo = document.querySelector('.input-campo');
let botao = document.querySelector('.add-Tarefa');

function AtualizarHorario(){
    let Agora = new Date()

    let horas = Agora.getHours();
    let minutos = Agora.getMinutes();
    let segundos = Agora.getSeconds();
    
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const Formato = `${horas}:${minutos}:${segundos}`

    document.getElementById('horas').textContent = Formato;

let Periodo = Agora.getHours()

 if(Periodo >= 7 && Periodo <= 12){
     document.body.style.background = 'linear-gradient(145deg, #FFE797, #F5EFE6)'
     document.body.style.color = '#FCB454'
     inputCampo.style.background = 'linear-gradient(145deg, #f7ac56ff, #FEFFC4)'
     botao.style.background = '#F68537'
     botao.style.color = '#ffff'   
 }
 else if(Periodo >= 13 && Periodo <= 17){
     document.body.style.background = 'linear-gradient(145deg, #f7a64bff, #fafaf5ff)'
     inputCampo.style.background = 'linear-gradient(145deg, #f17c45ff, #f4f5dbff)'
     document.body.style.color = '#F68537'
     botao.style.background = '#f34519ff'
     botao.style.color = '#ffff'
     }
 else if(Periodo >= 18 && Periodo <= 23){
     document.body.style.background = 'linear-gradient(145deg, #17153B, #4B70F5)'
     inputCampo.style.background = 'linear-gradient(145deg, #4B70F5, #fdfdfbff)'
     document.body.style.color = '#6EACDA'
     botao.style.background = '#090040'
     botao.style.color = '#ffff'
     }
 else{
     document.body.style.background = 'linear-gradient(145deg, #090040, #471396)'
     document.body.style.color = '#4E31AA'
     }
}

setInterval(AtualizarHorario,1000)

AtualizarHorario();

const Tarefa = document.querySelector('.Tarefa');
const botão = document.querySelector('.add-Tarefa');
const TarefasCampo = document.querySelector('.Tarefas-lista');

Tarefa.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter' && ValidarTarefa()) {
        TarefaInValida();
        
    }
})

const ValidarTarefa = () => Tarefa.value.trim().length > 0;

const TarefaInValida = () =>{
    const ArmazenarTarefa = ValidarTarefa();

    if (!ArmazenarTarefa){
        return Tarefa.classList.add('error')
    }

    const containerTarefas = document.createElement('div')
    containerTarefas.classList.add('DivTarefas');

    const paragrafo = document.createElement('p');
    paragrafo.textContent = Tarefa.value;

    paragrafo.addEventListener('click', ()=> ConcluirTarefa(paragrafo));

    const icon = document.createElement('i')
    icon.classList.add('fa-solid');
    icon.classList.add('fa-trash');

    icon.addEventListener('click',() => RemoverTarefa(containerTarefas));

    TarefasCampo.appendChild(containerTarefas);
    containerTarefas.appendChild(paragrafo);
    containerTarefas.appendChild(icon);

    Tarefa.value = '';
};

const ConcluirTarefa = (paragrafo) =>{
    paragrafo.classList.toggle('completo');
    
}
const RemoverTarefa = (containerTarefas)=>{
    containerTarefas.remove();
}

const TarefaValida = () =>{
    const ArmazenarTarefa = ValidarTarefa();

    if(ArmazenarTarefa){
        return Tarefa.classList.remove('error');
    }
}

botão.addEventListener('click', () => TarefaInValida());
Tarefa.addEventListener('input',()=> TarefaValida());