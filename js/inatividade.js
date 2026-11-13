// Tempo padrão: 5 minutos
const TEMPO_INATIVIDADE = window.tempoInatividade || (2 * 60 * 1000);

let temporizador;

function reiniciarTemporizador() {

    clearTimeout(temporizador);

    temporizador = setTimeout(() => {

        // Se não estiver na tela inicial
        if (!window.location.pathname.endsWith("index.html")) {
            window.location.href = "index.html";
        }

        // Se estiver visualizando PDF
        if (window.location.pathname.endsWith("visualizar-pdf.html")) {
            window.location.href = "index.html";
        }

    }, TEMPO_INATIVIDADE);

}

[
    "click",
    "mousemove",
    "touchstart",
    "keydown",
    "scroll"
].forEach(evento => {

    document.addEventListener(evento, reiniciarTemporizador);

});

reiniciarTemporizador();