var perguntaDois = window.document.getElementById("pergunta_dois");
var perguntaTres = window.document.getElementById("pergunta_tres");

var perguntaTresFront = window.document.getElementById("pergunta_tres_front");


var respostaTresA = window.document.getElementById("resposta_back_rapidez");
var respostaTresB= window.document.getElementById("resposta_back_prog_int");
var respostaTresC= window.document.getElementById("resposta_back_facil_int");

var respostaTresAFront = window.document.getElementById("resposta_front_bb");
var respostaTresBFront= window.document.getElementById("resposta_front_facil_compr");
var respostaTresCFront= window.document.getElementById("resposta_facil_maior_comut");




function mostrarPerguntaDois (){
    perguntaDois.style = "display:block"
}

function mostrarPerguntaTres (){
    perguntaTres.style = "display:flex"
    perguntaTresFront.style = "display:none"

}

function mostrarPerguntaTresFront (){
    perguntaTresFront.style = "display:flex"
    perguntaTres.style = "display:none"

}


//*RESPOSTAS - BACKEND
function mostrarRespostaTresA (){
    respostaTresA.style = "display:block"
    respostaTresB.style = "display:none"
    respostaTresC.style = "display:none"
    respostaTresBFront.style = "display:none"
    respostaTresAFront.style = "display:none"
    respostaTresCFront.style = "display:none"
}

function mostrarRespostaTresB (){
    respostaTresB.style = "display:block"
    respostaTresA.style = "display:none"
    respostaTresC.style = "display:none"
    respostaTresBFront.style = "display:none"
    respostaTresAFront.style = "display:none"
    respostaTresCFront.style = "display:none"


}

function mostrarRespostaTresC (){
    respostaTresC.style = "display:block"
    respostaTresA.style = "display:none"
    respostaTresB.style = "display:none"
    respostaTresBFront.style = "display:none"
    respostaTresAFront.style = "display:none"
    respostaTresCFront.style = "display:none"
}



//*RESPOSTAS - FRONTEND
function mostrarRespostaTresAFront (){
    respostaTresAFront.style = "display:block"
    respostaTresBFront.style = "display:none"
    respostaTresCFront.style = "display:none"
    respostaTresA.style = "display:none"
    respostaTresB.style = "display:none"
    respostaTresC.style = "display:none"
}

function mostrarRespostaTresBFront (){
    respostaTresBFront.style = "display:block"
    respostaTresAFront.style = "display:none"
    respostaTresCFront.style = "display:none"
    respostaTresA.style = "display:none"
    respostaTresB.style = "display:none"
    respostaTresC.style = "display:none"



}

function mostrarRespostaTresCFront (){
    respostaTresCFront.style = "display:block"
    respostaTresAFront.style = "display:none"
    respostaTresBFront.style = "display:none"
    respostaTresA.style = "display:none"
    respostaTresB.style = "display:none"
    respostaTresC.style = "display:none"

}