
var contador = 0;
function login(){
var codigo = document.getElementById("idclave").value;
    if(codigo == "12345678"){
    document.getElementById("back2").style.display="block";
    document.getElementById("back").style.display="none";
    }else{
            contador++;
            if(contador==3){
                contador =0;
                document.getElementById("cancelada").style.display="block";
                  document.getElementById("back").style.display="none";
                }else{
                    alert("Codigo Invalido");
                }
        }
}

function retiro(){
    document.getElementById("tabretiro").style.display="block";
    document.getElementById("back2").style.display="none";
}

function monto(){
    document.getElementById("tabmonto").style.display="block";
    document.getElementById("tabretiro").style.display="none";
}

function otras(){
    document.getElementById("tabotras").style.display="block";
    document.getElementById("tabmonto").style.display="none";
}

function continuar(){
    document.getElementById("tabcontinuar").style.display="block";
    document.getElementById("tabotras").style.display="none";
}

function si(){
    document.getElementById("back2").style.display="block";
    document.getElementById("tabcontinuar").style.display="none";
}

function no(){
    document.getElementById("tabno").style.display="block";
    document.getElementById("tabcontinuar").style.display="none";
}

function cancelada1(){
    document.getElementById("cancelada").style.display="block";
    document.getElementById("back2").style.display="none";
}

function cancelada2(){
    document.getElementById("cancelada").style.display="block";
    document.getElementById("tabretiro").style.display="none";
}

function cancelada3(){
    document.getElementById("cancelada").style.display="block";
    document.getElementById("tabmonto").style.display="none";
}

function cancelada4(){
    document.getElementById("cancelada").style.display="block";
    document.getElementById("tabotras").style.display="none";
}

function cancelada5(){
    document.getElementById("cancelada").style.display="block";
    document.getElementById("tabcontinuar").style.display="none";
}

function cancelada6(){
    document.getElementById("cancelada").style.display="block";
    document.getElementById("tabno").style.display="none";
}