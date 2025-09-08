const button = document.getElementById('Button');


const cores = ['#C70D3A', '#ED5107', '#230338', '#02383C', '#EAE7AF'];

function coresAleatorias() {
    const Alternar = Math.floor(Math.random() * cores.length)
        return cores[Alternar];
}

button.addEventListener('click', ()=>{
    document.body.style.backgroundColor = coresAleatorias();
})
