const cotizarPlanMotributista=()=> {
    let nombre = localStorage.Nombre
    let mail = localStorage.Mail
    let aporte = $("#Adheridos").val()
    let edad = $("#EdadSocioMonotributo").val()
    let plan = $("#PlanElegidoMonotributo").val()
    let estadoCivil = $("#estadoCivilMonotributo").val()
    let hijos = $("#hijosMonotributo").val()
    let descuento = $("#descuentoMonotributo").val()
    

    let divResumen = document.getElementById("resumenMonotributo")
    let divResultado = document.getElementById("resultadoMonotributo")

    if (edad === '' || plan === '0' || edad < 0 || edad > 100 || descuento === '0'|| hijos === '0'|| aporte === ""){
        mostrarError ("#errorAlCompletarMonotributo","Selecciono o completo mal un dato")
        return
    }

    let cotizacion = {edad,plan,hijos,estadoCivil,descuento,aporte};

    divResumen.style.backgroundColor="#FFF"
    divResumen.style.display="block"
    divResumen.innerHTML='<div style="text-align:center"><img src="Imagenes/cargando.gif" width=100 height=100></div>';
    setTimeout (()=> {
        divResumen.style.textAlign="center"
        divResumen.innerHTML=`<h2>Resumen de Consulta</h2>
        <ul>
            <li>Nombre: ${mayuscula(nombre)}</li>
            <li>Mail: ${mayuscula(mail)}</li>
            <li>Edad: ${mayuscula(edad)}</li>
            <li>Plan Elegido: ${mayuscula(plan)}</li>
            <li>Estado Civil: ${mayuscula(estadoCivil)}</li>
            <li>Hijos: ${mayuscula(hijos)}</li>
        </ul>`;
        let cotizacionFinal = cotizar(cotizacion);
        divResultado.style.display="block";
        divResultado.className="divResultado"
        divResultado.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinal} </p>`;
    },1500);
}

function cotizar(cotizacion){
    const {edad,plan,hijos,estadoCivil,descuento,aporte} =cotizacion;
    let  resultado = 3500;

    resultado = calcularEdad(edad)*resultado
    resultado = calcularPlan(plan)*resultado
    resultado = calcularEstadoCivil(estadoCivil)*resultado
    resultado = calcularHijos(hijos)*resultado
    resultado = calcularDescuento(descuento)*resultado
    resultado = resultado - calcularAporte(aporte)
    if (resultado < 0){
        resultado = "No abona diferencia"
    }
    
    return resultado
}
function calcularPlan(plan){
    var incrementoPlan
    if (plan === "Exclusivo C") {
        incrementoPlan = 1;
    }
    else if (plan === "Exclusivo") {
        incrementoPlan = 1.35
    }
    else if (plan === "Premium C") {
        incrementoPlan = 1.45
    }
    else if (plan === "Premium") {
        incrementoPlan = 1.75
    }
    else if (plan === "Live") {
        incrementoPlan = 2
    }
    return incrementoPlan
}

function calcularEdad(edad){
    var incrementoEdad
    if (edad<26) {
        incrementoEdad = 1
    }
    else if (edad < 37 && edad >25) {
        incrementoEdad = 1.30
    }
    else if (edad < 50 && edad >36) {
        incrementoEdad = 1.6
    }
    else if (edad > 49) {
        incrementoEdad = 1.9
    }
    return incrementoEdad
}

function calcularEstadoCivil(estadoCivil){
    var incrementoEstadoCivil
    if (estadoCivil === "Soltero") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivil === "Casado") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivil === "Concubinato") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivil === "Divorciado") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivil === "Viudo") {
        incrementoEstadoCivil = 1
    }
    return incrementoEstadoCivil
}


function calcularHijos (hijos){
    var incrementoHijos
    if (hijos === "1") {
        incrementoHijos = 1;
    }
    else if (hijos === "2") {
        incrementoHijos = 1.5
    }
    else if (hijos === "3") {
        incrementoHijos = 2
    }
    else if (hijos=== "4") {
        incrementoHijos = 2.3
    }
    else if (hijos === "5") {
        incrementoHijos = 2.5
    }
    return incrementoHijos
}
function calcularDescuento (descuento){
    var incrementoDescuento
    if (descuento === "Efectivo"){
        incrementoDescuento = 1
    }
    else if (descuento === "Debito"){
        incrementoDescuento = 0.9
    }
    else if (descuento === "Credito"){
        incrementoDescuento = 0.8
    }
    return incrementoDescuento
}
function calcularAporte (aporte){
    var aporte = aporte * 830
    return aporte
}

function mayuscula(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

function mostrarError(elemento, mensaje) {
    divError = document.querySelector(elemento)
    divError.innerHTML = `<p class="alert alert-danger error">${mensaje}</p>`
    setTimeout(() => { divError.innerHTML = '' }, 2500)
}

$("#calcularMonotributo").click(cotizarPlanMotributista)