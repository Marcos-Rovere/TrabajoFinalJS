
var divParticular =  document.getElementById("divParticular")
var divDependencia = document.getElementById("divDependencia")
var divMonotributo = document.getElementById("divMonotributo")


let animacionesPlan = document.getElementsByClassName("Imagen_Introduccion")

function MostrarScroll (){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animacionesPlan.length; i++){
        let alturascroll = animacionesPlan[i].offsetTop;       
        if (alturascroll - 550 < scrollTop){
            animacionesPlan[i].style.opacity = 1;
            animacionesPlan[i].classList.add("mostarPlanes")
        }
    }
}

const guardarStorage = () => {
    let nombre = $("#nombreModal").val()
    let telefono = $("#telefonoModal").val()
    let mail = $("#mailModal").val()

    localStorage.setItem ("Nombre", nombre)
    localStorage.setItem ("Telefono", telefono)
    localStorage.setItem ("Mail", mail)
    
    if (nombre === ""){
        MostrarModal()
        return
    }
}

function MostarModal(){
    $('#myModal').modal('show')
}

function mostrarDivParticular(){
    divParticular.style.display="block"
}
function cerrarDivParticular (){
    divParticular.style.display="none"
}
function mostrarDivDependencia(){
    divDependencia.style.display="block"
}
function cerrarDivDependencia (){
    divDependencia.style.display="none"
}
function mostrarDivMonotributo(){
    divMonotributo.style.display="block"
}
function cerrarDivMonotributo (){
    divMonotributo.style.display="none"
}

$("#button_Planes").click(function(){
    $('html, body').animate({
        scrollTop: $("#planes").offset().top
    },1000)
})

$("#button_Cotizar").click(function(){
    $('html, body').animate({
        scrollTop: $("#titulo_Cotiza").offset().top
    },1000)
})


$(document).ready(MostarModal)

window.addEventListener("scroll", MostrarScroll)

$("#btnParticular").click(mostrarDivParticular)
$("#btnDependencia").click(mostrarDivDependencia)
$("#btnMonotributo").click(mostrarDivMonotributo)

$("#btnCerrar").click(cerrarDivParticular)
$("#btnCerrarDependencia").click(cerrarDivDependencia)
$("#btnCerrarMonotributo").click(cerrarDivMonotributo)

$("#btnModalGuardar").click(guardarStorage)
