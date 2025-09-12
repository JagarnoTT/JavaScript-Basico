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
    
}
else if(Periodo >= 13 && Periodo <= 17){
    document.body.style.background = 'linear-gradient(145deg, #FFC785, #FEFFC4)'
    document.body.style.color = '#F68537'
    }
else if(Periodo >= 18 && Periodo <= 23){
    document.body.style.background = 'linear-gradient(145deg, #17153B, #4B70F5)'
    document.body.style.color = '#6EACDA'
    }
else{
    document.body.style.background = 'linear-gradient(145deg, #090040, #471396)'
    document.body.style.color = '#4E31AA'
    }
}

setInterval(AtualizarHorario, 1000);

AtualizarHorario();