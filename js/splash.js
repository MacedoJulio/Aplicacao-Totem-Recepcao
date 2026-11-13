window.onload=function(){

    const splash=document.getElementById("splash");

    if(splash){

        setTimeout(()=>{

            splash.classList.add("fadeOut");

            setTimeout(()=>{

                splash.remove();

            },500);

        },1800);

    }

}