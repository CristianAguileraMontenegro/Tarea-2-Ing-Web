"use strict";
var formulario = document.getElementById("formularioCompleto");
formulario.addEventListener("submit", function (event) {
    var flag = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    eliminarMensajesExtra(event);
    eliminarMensajesExtra(event);
    //verificarCheckBox(event);
    //verificarOptional(event);
    //validarDatosPersonales(event);
    if (verificarCheckBox(event)) {
        flag = true;
    }
    if (verificarOptional(event)) {
        flag2 = true;
    }
    if (validarOpinion(event)) {
        flag3 = true;
    }
    if (validarDatosPersonales(event)) {
        flag4 = true;
    }
    if (validarNivelDeProgramacion(event)) {
        flag5 = true;
    }
    if (flag && flag2 && flag3 && flag4 && flag5) {
        ocultarYmostarMensaje(event);
    }
});
function eliminarMensajesExtra(event) {
    var spanEliminar = document.getElementsByTagName("span");
    for (var i = 0; i < spanEliminar.length; i++) {
        spanEliminar[i].parentNode.removeChild(spanEliminar[i]);
    }
}
function verificarCheckBox(event) {
    var ul = document.getElementById("LenguajesDeInteres");
    var check = ul === null || ul === void 0 ? void 0 : ul.getElementsByClassName("form-check-input");
    var variable = false;
    var span = document.createElement("span");
    var li = document.createElement("li");
    var div = document.createElement("div");
    for (var i = 0; i < (check === null || check === void 0 ? void 0 : check.length); i++) {
        if (check[i].checked) {
            variable = true;
        }
    }
    if (!variable) {
        span.textContent = "Datos requeridos";
        span.classList.add("no-valido");
        div.id = "mensajeDeError1";
        div.appendChild(span).textContent = "Recuerde marcar almenos una opcion";
        li.appendChild(div);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
        event.preventDefault();
        return false;
    }
    return true;
}
function verificarOptional(event) {
    var ul = document.getElementById("AsignaturaMasDificilies");
    var check = ul === null || ul === void 0 ? void 0 : ul.getElementsByClassName("form-check-input 2");
    var opcional = document.getElementById("otro");
    var variable = false;
    var span = document.createElement("span");
    var li = document.createElement("li");
    var div = document.createElement("div");
    if (opcional.value != "") {
        variable = true;
    }
    for (var i = 0; i < (check === null || check === void 0 ? void 0 : check.length); i++) {
        if (check[i].checked) {
            variable = true;
        }
    }
    if (!variable) {
        span.textContent = "Datos requeridos";
        span.classList.add("no-valido");
        div.id = "mensajeDeError2";
        div.appendChild(span).textContent = "Recuerde marcar almenos una opcion o escribir en el campo opcional";
        li.appendChild(div);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
        event.preventDefault();
        return false;
    }
    return true;
}
function validarOpinion(evet) {
    var opinion = document.getElementById("AreaOpinion");
    if (opinion.value != "") {
        return true;
    }
    return false;
}
function validarDatosPersonales(evet) {
    var nombre = document.getElementById("nombre");
    var rut = document.getElementById("Rut");
    var correo = document.getElementById("Email");
    var telefono = document.getElementById("telefono");
    var flag = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    if (nombre.value != "") {
        flag = true;
    }
    if (rut.value.length == 9) {
        for (var i = rut.value.length - 1; i < rut.value.length; i++) {
            if (rut.value[i] == "K" || rut.value[i] == "1" || rut.value[i] == "2" || rut.value[i] == "3" || rut.value[i] == "4" || rut.value[i] == "5" || rut.value[i] == "6" || rut.value[i] == "7" || rut.value[i] == "8" || rut.value[i] == "9" || rut.value[i] == "0") {
                flag2 = true;
            }
        }
    }
    if (correo.value.length != "") {
        flag3 = true;
    }
    if (telefono.value > 900000000 && telefono.value < 999999999) {
        flag4 = true;
    }
    if (flag && flag2 && flag3 && flag4) {
        return true;
    }
    return false;
}
function validarNivelDeProgramacion(event) {
    var radios = document.getElementsByClassName("form-check-input 3");
    var flag = false;
    for (var i = 0; i < (radios === null || radios === void 0 ? void 0 : radios.length); i++) {
        if (radios[i].checked) {
            flag = true;
        }
    }
    return flag;
}
function ocultarYmostarMensaje(event) {
    formulario.style.display = "none";
    event.preventDefault();
    var conta = document.getElementsByClassName("container")[0]; //el 0 ya que me retorna un arreglo
    ;
    var h2 = document.createElement("h2");
    h2.id = "mensajeFinal";
    h2.textContent = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    var col = document.createElement("div");
    col.className = "col-md-auto";
    var row = document.createElement("div");
    row.className = "row justify-content-md-center";
    row.id = "Mensaje";
    col.appendChild(h2);
    row.appendChild(col);
    conta.appendChild(row);
}
