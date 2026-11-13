const frame = document.getElementById("pdfFrame");

if(frame){

    const loading = document.getElementById("loading");
    const btnVoltar = document.getElementById("btnVoltar");

    const parametros = new URLSearchParams(window.location.search);

    const arquivo = parametros.get("arquivo");
    const origem = parametros.get("origem");

    btnVoltar.href = origem || "documentos.html";

    // Pequena espera para exibir a animação
    setTimeout(()=>{

        frame.src = arquivo;

    },200);

    frame.onload = () =>{

        loading.classList.add("fadeOut");

        frame.classList.add("mostrar");

        setTimeout(()=>{

            loading.remove();

        },1000);

    };

}