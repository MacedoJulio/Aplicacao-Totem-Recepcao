let tempo;

document.onmousemove=function(){

    document.body.style.cursor="default";

    clearTimeout(tempo);

    tempo=setTimeout(function(){

        document.body.style.cursor="none";

    },3000);

}