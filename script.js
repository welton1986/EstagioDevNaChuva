function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var LeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
      pontos.style.display="inline";
      maisTexto.style.display="none";
      LeiaMais.innerHTML="Leia Mais";

    }else{
      pontos.style.display="none";
      maisTexto.style.display="inline";
      LeiaMais.innerHTML="Leia Menos"; 
    }

}




function criarTopico(){
    var CriarTopico = document.getElementById("CriarTopico");
    var formulario = document.getElementById("formulario");


    if(formulario.style.display === "none") {
        formulario.style.display = "block";
        CriarTopico.style.display = "none";

    }else {
        formulario.style.display = "none";
        CriarTopico.style.display = "block";
    }

}



function enviar(){
    var CriarNovoTopico = document.getElementById("CriarNovoTopico");
    var formulario = document.getElementById("formulario");
    var CriarTopico = document.getElementById("CriarTopico");


    if(formulario.style.display === "none") {
        formulario.style.display = "block";
        CriarNovoTopico.style.display = "none";
        CriarTopico.style.display = "block";

    }else {
        formulario.style.display = "none";
        CriarNovoTopico.style.display = "block";
        CriarTopico.style.display = "none";
    }

}

function criarNovoTopico(){
    var CriarNovoTopico = document.getElementById("CriarNovoTopico");
    var formulario = document.getElementById("formulario");
    var CriarTopico = document.getElementById("CriarTopico");


    if(CriarNovoTopico.style.display === "none") {
        CriarNovoTopico.style.display = "block";
        formulario.style.display = "none";
        CriarTopico.style.display = "none";

    }else {
        formulario.style.display = "block";
        CriarNovoTopico.style.display = "none";
        CriarTopico.style.display = "none";
    }

}































