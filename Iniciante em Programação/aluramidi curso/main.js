
function TocaSons (SeletorAudio) {
    const elemento = document.querySelector(SeletorAudio);

    if (elemento && elemento.localName === 'audio') {
         elemento.play();
    }

    else {
        console.log('Elemento não encontrado ou seletor não encontrado');
    }
} 

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;//Template String

    ListaDeTeclas[contador].onclick = function () {
        TocaSons(idAudio);
    }




    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

