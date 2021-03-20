const cotizarPlanParticular =()=> {
    let nombre = localStorage.Nombre
    let mail = localStorage.Mail
    let edadParticular = $("#EdadSocioParticular").val()
    let planParticular = $("#PlanElegidoParticular").val()
    let estadoCivilParticular = $("#estadoCivilParticular").val()
    let hijosParticular = $("#hijosParticular").val()
    let descuentoParticular = $("#descuentoParticular").val()
    

    let divResumenParticular = document.getElementById("resumenParticular")
    let divResultadoParticular = document.getElementById("resultadoParticular")

    if (edadParticular === '' || planParticular === '0' || edadParticular < 0 || edadParticular > 100 || descuentoParticular === '0'|| hijosParticular === '0'){
        mostrarError ("#errorAlCompletarParticular","Selecciono o completo mal un dato")
        return
    }

    let cotizacionParticular = {edadParticular,planParticular,hijosParticular,estadoCivilParticular,descuentoParticular};

    divResumenParticular.style.backgroundColor="#FFF"
    divResumenParticular.style.display="block"
    divResumenParticular.innerHTML='<div style="text-align:center"><img src="Imagenes/cargando.gif" width=100 height=100></div>';
    setTimeout (()=> {
        divResumenParticular.style.textAlign="center"
        divResumenParticular.innerHTML=`<h2>Resumen de Consulta</h2>
        <ul>
            <li>Nombre: ${mayuscula(nombre)}</li>
            <li>Mail: ${mayuscula(mail)}</li>
            <li>Edad: ${mayuscula(edadParticular)}</li>
            <li>Plan Elegido: ${mayuscula(planParticular)}</li>
            <li>Estado Civil: ${mayuscula(estadoCivilParticular)}</li>
            <li>Hijos: ${mayuscula(hijosParticular)}</li>
        </ul>`;
        let cotizacionFinalParticular = cotizarParticular(cotizacionParticular);
        divResultadoParticular.style.display="block";
        divResultadoParticular.className="divResultado"
        divResultadoParticular.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinalParticular} </p>`;
    },1500);
}

function cotizarParticular(cotizacionParticular){
    const {edadParticular,planParticular,hijosParticular,estadoCivilParticular,descuentoParticular} = cotizacionParticular;
    let  resultado = 4000;

    resultado = calcularEdadParticular(edadParticular)*resultado
    resultado = calcularPlanParticular(planParticular)*resultado
    resultado = calcularEstadoCivilParticular(estadoCivilParticular)*resultado
    resultado = calcularHijosParticular(hijosParticular)*resultado
    resultado = calcularDescuentoParticular(descuentoParticular)*resultado
    
    return resultado
}
function calcularPlanParticular(planParticular){
    var incrementoPlan
    if (planParticular === "Exclusivo C") {
        incrementoPlan = 1;
    }
    else if (planParticular === "Exclusivo") {
        incrementoPlan = 1.35
    }
    else if (planParticular === "Premium C") {
        incrementoPlan = 1.45
    }
    else if (planParticular === "Premium") {
        incrementoPlan = 1.75
    }
    else if (planParticular === "Live") {
        incrementoPlan = 2
    }
    return incrementoPlan
}

function calcularEdadParticular(edadParticular){
    var incrementoEdad
    if (edadParticular<26) {
        incrementoEdad = 1
    }
    else if (edadParticular < 37 && edadParticular >25) {
        incrementoEdad = 1.30
    }
    else if (edadParticular < 50 && edadParticular >36) {
        incrementoEdad = 1.6
    }
    else if (edadParticular > 49) {
        incrementoEdad = 1.9
    }
    return incrementoEdad
}

function calcularEstadoCivilParticular(estadoCivilParticular){
    var incrementoEstadoCivil
    if (estadoCivilParticular === "Soltero") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivilParticular === "Casado") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivilParticular === "Concubinato") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivilParticular === "Divorciado") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivilParticular === "Viudo") {
        incrementoEstadoCivil = 1
    }
    return incrementoEstadoCivil
}


function calcularHijosParticular (hijosParticular){
    var incrementoHijos
    if (hijosParticular === "1") {
        incrementoHijos = 1;
    }
    else if (hijosParticular === "2") {
        incrementoHijos = 1.5
    }
    else if (hijosParticular === "3") {
        incrementoHijos = 2
    }
    else if (hijosParticular === "4") {
        incrementoHijos = 2.3
    }
    else if (hijosParticular === "5") {
        incrementoHijos = 2.5
    }
    return incrementoHijos
}
function calcularDescuentoParticular (descuentoParticular){
    var incrementoDescuento
    if (descuentoParticular === "Efectivo"){
        incrementoDescuento = 1
    }
    else if (descuentoParticular === "Debito"){
        incrementoDescuento = 0.9
    }
    else if (descuentoParticular === "Credito"){
        incrementoDescuento = 0.8
    }
    return incrementoDescuento
}

const cotizarPlanMotributista=()=> {
    let nombre = localStorage.Nombre
    let mail = localStorage.Mail
    let aporteMonotributo = $("#Adheridos").val()
    let edadMonotributo = $("#EdadSocioMonotributo").val()
    let planMonotributo = $("#PlanElegidoMonotributo").val()
    let estadoCivilMonotributo = $("#estadoCivilMonotributo").val()
    let hijosMonotributo = $("#hijosMonotributo").val()
    let descuentoMonotributo = $("#descuentoMonotributo").val()
    

    let divResumenMonotributo = document.getElementById("resumenMonotributo")
    let divResultadoMonotributo = document.getElementById("resultadoMonotributo")

    if (edadMonotributo === '' || planMonotributo === '0' || edadMonotributo < 0 || edadMonotributo > 100 || descuentoMonotributo === '0'|| hijosMonotributo === '000'|| aporteMonotributo === ""){
        mostrarError ("#errorAlCompletarMonotributo","Selecciono o completo mal un dato")
        return
    }

    let cotizacionMonotributo = {edadMonotributo,planMonotributo,hijosMonotributo,estadoCivilMonotributo,descuentoMonotributo,aporteMonotributo};

    divResumenMonotributo.style.backgroundColor="#FFF"
    divResumenMonotributo.style.display="block"
    divResumenMonotributo.innerHTML='<div style="text-align:center"><img src="Imagenes/cargando.gif" width=100 height=100></div>';
    setTimeout (()=> {
        divResumenMonotributo.style.textAlign="center"
        divResumenMonotributo.innerHTML=`<h2>Resumen de Consulta</h2>
        <ul>
            <li>Nombre: ${mayuscula(nombre)}</li>
            <li>Mail: ${mayuscula(mail)}</li>
            <li>Edad: ${mayuscula(edadMonotributo)}</li>
            <li>Plan Elegido: ${mayuscula(planMonotributo)}</li>
            <li>Estado Civil: ${mayuscula(estadoCivilMonotributo)}</li>
            <li>Hijos: ${mayuscula(hijosMonotributo)}</li>
        </ul>`;
        let cotizacionFinalMonotributo = cotizarMonotributo(cotizacionMonotributo);
        divResultadoMonotributo.style.display="block";
        divResultadoMonotributo.className="divResultado"
        divResultadoMonotributo.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinalMonotributo} </p>`;
    },1500);
}

function cotizarMonotributo(cotizacionMonotributo){
    const {edadMonotributo,planMonotributo,hijosMonotributo,estadoCivilMonotributo,descuentoMonotributo,aporteMonotributo} = cotizacionMonotributo;
    let  resultado = 3500;

    resultado = calcularEdadMonotributo(edadMonotributo)*resultado
    resultado = calcularPlanMonotributo(planMonotributo)*resultado
    resultado = calcularEstadoCivilMonotributo(estadoCivilMonotributo)*resultado
    resultado = calcularHijosMonotributo(hijosMonotributo)*resultado
    resultado = calcularDescuentoMonotributo(descuentoMonotributo)*resultado
    resultado = resultado - calcularAporteMonotributo(aporteMonotributo)
    if (resultado < 0){
        resultado = "No abona diferencia"
    }
    
    return resultado
}
function calcularPlanMonotributo(planMonotributo){
    var incrementoPlan
    if (planMonotributo === "Exclusivo C") {
        incrementoPlan = 1;
    }
    else if (planMonotributo === "Exclusivo") {
        incrementoPlan = 1.35
    }
    else if (planMonotributo === "Premium C") {
        incrementoPlan = 1.45
    }
    else if (planMonotributo === "Premium") {
        incrementoPlan = 1.75
    }
    else if (planMonotributo === "Live") {
        incrementoPlan = 2
    }
    return incrementoPlan
}

function calcularEdadMonotributo(edadMonotributo){
    var incrementoEdad
    if (edadMonotributo<26) {
        incrementoEdad = 1
    }
    else if (edadMonotributo < 37 && edadMonotributo >25) {
        incrementoEdad = 1.30
    }
    else if (edadMonotributo < 50 && edadMonotributo >36) {
        incrementoEdad = 1.6
    }
    else if (edadMonotributo > 49) {
        incrementoEdad = 1.9
    }
    return incrementoEdad
}

function calcularEstadoCivilMonotributo(estadoCivilMonotributo){
    var incrementoEstadoCivil
    if (estadoCivilMonotributo === "Soltero") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivilMonotributo === "Casado") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivilMonotributo === "Concubinato") {
        incrementoEstadoCivil = 1.85
    }
    
    return incrementoEstadoCivil
}


function calcularHijosMonotributo (hijosMonotributo){
    var incrementoHijos
    if (hijosMonotributo === "0") {
        incrementoHijos = 1;
    }
    else if (hijosMonotributo === "1") {
        incrementoHijos = 1.5
    }
    else if (hijosMonotributo === "2") {
        incrementoHijos = 2
    }
    else if (hijosMonotributo === "3") {
        incrementoHijos = 2.3
    }
    else if (hijosMonotributo === "4") {
        incrementoHijos = 2.5
    }
    return incrementoHijos
}
function calcularDescuentoMonotributo (descuentoMonotributo){
    var incrementoDescuento
    if (descuentoMonotributo=== "Efectivo"){
        incrementoDescuento = 1
    }
    else if (descuentoMonotributo === "Debito"){
        incrementoDescuento = 0.9
    }
    else if (descuentoMonotributo === "Credito"){
        incrementoDescuento = 0.8
    }
    return incrementoDescuento
}
function calcularAporteMonotributo (aporteMonotributo){
    var aporte = aporteMonotributo * 830
    return aporte
}

const cotizarPlanDependencia=()=> {
    let nombre = localStorage.Nombre
    let mail = localStorage.Mail
    let sueldoDependencia = $("#Sueldo").val()
    let edadDependencia = $("#EdadSocioDependencia").val()
    let planDependencia = $("#PlanElegidoDependencia").val()
    let estadoCivilDependencia = $("#estadoCivilDependencia").val()
    let hijosDependencia = $("#hijosDependencia").val()
    let descuentoDependencia = $("#descuentoDependencia").val()
    

    let divResumenDependencia = document.getElementById("resumenDependencia")
    let divResultadoDependencia = document.getElementById("resultadoDependencia")

    if (edadDependencia === '' || planDependencia === '0' || edadDependencia < 0 || edadDependencia > 100 || descuentoDependencia === '0'|| hijosDependencia === '0'|| sueldoDependencia === ""){
        mostrarError ("#errorAlCompletarDependencia","Selecciono o completo mal un dato")
        return
    }

    const cotizacionDependencia = {edadDependencia,planDependencia,hijosDependencia,estadoCivilDependencia,descuentoDependencia,sueldoDependencia};

    divResumenDependencia.style.backgroundColor="#FFF"
    divResumenDependencia.style.display="block"
    divResumenDependencia.innerHTML='<div style="text-align:center"><img src="Imagenes/cargando.gif" width=100 height=100></div>';
    setTimeout (()=> {
        divResumenDependencia.style.textAlign="center"
        divResumenDependencia.innerHTML=`<h2>Resumen de Consulta</h2>
        <ul>
            <li>Nombre: ${mayuscula(nombre)}</li>
            <li>Mail: ${mayuscula(mail)}</li>
            <li>Edad: ${mayuscula(edadDependencia)}</li>
            <li>Plan Elegido: ${mayuscula(planDependencia)}</li>
            <li>Estado Civil: ${mayuscula(estadoCivilDependencia)}</li>
            <li>Hijos: ${mayuscula(hijosDependencia)}</li>
        </ul>`;
        let cotizacionFinalDependencia = cotizarDependencia(cotizacionDependencia);
        divResultado.style.display="block";
        divResultadoDependencia.className="divResultado"
        divResultadoDependencia.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinalDependencia} </p>`;
    },1500);
}

function cotizarDependencia(cotizacionDependencia){
    const {edadDependencia,planDependencia,hijosDependencia,estadoCivilDependencia,descuentoDependencia} = cotizacionDependencia;
    let  resultado = 3500;

    resultado = calcularEdadDependencia(edadDependencia)*resultado
    resultado = calcularPlanDependencia(planDependencia)*resultado
    resultado = calcularEstadoCivilDependencia(estadoCivilDependencia)*resultado
    resultado = calcularHijosDependencia(hijosDependencia)*resultado
    resultado = calcularDescuentoDependencia(descuentoDependencia)*resultado
    resultado = resultado - calcularAporteDependencia(sueldoDependencia)
    if (resultado < 0){
        resultado = "No abona diferencia"
    }
    
    return resultado
}
function calcularPlanDependencia(planDependencia){
    var incrementoPlan
    if (planDependencia === "Exclusivo C") {
        incrementoPlan = 1;
    }
    else if (planDependencia === "Exclusivo") {
        incrementoPlan = 1.35
    }
    else if (planDependencia === "Premium C") {
        incrementoPlan = 1.45
    }
    else if (planDependencia === "Premium") {
        incrementoPlan = 1.75
    }
    else if (planDependencia === "Live") {
        incrementoPlan = 2
    }
    return incrementoPlan
}

function calcularEdadDependencia(edadDependencia){
    var incrementoEdad
    if (edadDependencia<26) {
        incrementoEdad = 1
    }
    else if (edadDependencia < 37 && edadDependencia >25) {
        incrementoEdad = 1.30
    }
    else if (edadDependencia < 50 && edadDependencia >36) {
        incrementoEdad = 1.6
    }
    else if (edadDependencia > 49) {
        incrementoEdad = 1.9
    }
    return incrementoEdad
}

function calcularEstadoCivilDependencia(estadoCivilDependencia){
    var incrementoEstadoCivil
    if (estadoCivilDependencia === "Soltero") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivilDependencia === "Casado") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivilDependencia === "Concubinato") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivilDependencia === "Divorciado") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivilDependencia === "Viudo") {
        incrementoEstadoCivil = 1
    }
    return incrementoEstadoCivil
}


function calcularHijosDependencia (hijosDependencia){
    var incrementoHijos
    if (hijosDependencia === "1") {
        incrementoHijos = 1;
    }
    else if (hijosDependencia === "2") {
        incrementoHijos = 1.5
    }
    else if (hijosDependencia === "3") {
        incrementoHijos = 2
    }
    else if (hijosDependencia === "4") {
        incrementoHijos = 2.3
    }
    else if (hijosDependencia === "5") {
        incrementoHijos = 2.5
    }
    return incrementoHijos
}
function calcularDescuentoDependencia (descuentoDependencia){
    var incrementoDescuento
    if (descuentoDependencia === "Efectivo"){
        incrementoDescuento = 1
    }
    else if (descuentoDependencia === "Debito"){
        incrementoDescuento = 0.9
    }
    else if (descuentoDependencia === "Credito"){
        incrementoDescuento = 0.8
    }
    return incrementoDescuento
}
function calcularAporteDependencia (sueldoDependencia){
    var aporte = sueldoDependencia * 0.0689
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
$("#calcularParticular").click(cotizarPlanParticular)
$("#calcularMonotributo").click(cotizarPlanMotributista)
$("#calcularDependencia").click(cotizarPlanDependencia)