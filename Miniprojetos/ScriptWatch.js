function AtualizarHorario(){
    const Agora = new Date();

    let horas = Agora.getHours();
    let minutos = Agora.getMinutes();
    let segundos = Agora.getSeconds();

    horas = horas < 10 ? "0" + horas:horas;
    minutos = minutos < 10? "0" + minutos:minutos;
    segundos = segundos < 10 ? "0" + segundos:segundos;

    const Formato = `${horas}:${minutos}:${segundos}`

    document.getElementById('horas').textContent = Formato;

}

setInterval(AtualizarHorario, 1000);


AtualizarHorario();