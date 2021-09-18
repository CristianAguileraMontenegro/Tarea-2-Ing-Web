let formulario:any = document.getElementById("formularioCompleto");

formulario.addEventListener("submit",function(event:any){
    
    let flag:boolean = false;
    let flag2:boolean = false;
    let flag3:boolean = false;
    let flag4:boolean = false;
    let flag5:boolean = false;

    eliminarMensajesExtra(event);
    eliminarMensajesExtra(event);

    //verificarCheckBox(event);
    //verificarOptional(event);
    //validarDatosPersonales(event);

    if(verificarCheckBox(event)){
        flag = true;
    }

    if(verificarOptional(event)){
        flag2 = true;
    }

    if(validarOpinion(event)){
        flag3 = true;
    }

    if(validarDatosPersonales(event)){
        flag4 = true;
    }

    if(validarNivelDeProgramacion(event)){
        flag5 = true;
    }
    
    if(flag && flag2 && flag3 && flag4 && flag5){
        ocultarYmostarMensaje(event);
    }
    
});

function eliminarMensajesExtra(event:any)
{
    let spanEliminar:any = document.getElementsByTagName("span");

    for(let i = 0; i < spanEliminar.length; i++)
    {
        spanEliminar[i].parentNode.removeChild(spanEliminar[i]);
    }
}

function verificarCheckBox(event:any): boolean{
    let ul = document.getElementById("LenguajesDeInteres");
    let check:any = ul?.getElementsByClassName("form-check-input");
    let variable:boolean = false;

    let span:any=document.createElement("span");
    let li:any = document.createElement("li");
    let div:any = document.createElement("div");

    for(let i = 0; i < check?.length; i++){
        if(check[i].checked){
            variable = true;
        }
            
    }

    if(!variable){
        span.textContent="Datos requeridos";
        span.classList.add("no-valido");
        div.id = "mensajeDeError1";
        div.appendChild(span).textContent="Recuerde marcar almenos una opcion";
        li.appendChild(div);
        ul?.appendChild(li);
        event.preventDefault();
        
        return false;
    }

    return true;
}

function verificarOptional(event:any): boolean{
    let ul = document.getElementById("AsignaturaMasDificilies");
    let check:any = ul?.getElementsByClassName("form-check-input 2");
    let opcional:any = document.getElementById("otro");
    let variable:boolean = false;
    let span:any=document.createElement("span");
    let li:any = document.createElement("li");
    let div:any = document.createElement("div");

    if(opcional.value != ""){
        variable = true;
    }
    
    for(let i = 0; i < check?.length; i++){
        if(check[i].checked){
            variable = true;
        }
    }


    if(!variable){
        
        span.textContent="Datos requeridos";
        span.classList.add("no-valido");
        div.id = "mensajeDeError2";
        div.appendChild(span).textContent="Recuerde marcar almenos una opcion o escribir en el campo opcional";
        li.appendChild(div);
        ul?.appendChild(li);
        event.preventDefault();
        
        return false;
    }

    return true;
}

function validarOpinion(evet:any): boolean{
    let opinion:any = document.getElementById("AreaOpinion");

    if(opinion.value != "")
    {
        return true;
    }

    return false;

}

function validarDatosPersonales(evet:any): boolean{
    let nombre:any = document.getElementById("nombre");
    let rut:any = document.getElementById("Rut");
    let correo:any = document.getElementById("Email");
    let telefono:any = document.getElementById("telefono");
    let flag:boolean = false;
    let flag2:boolean = false;
    let flag3:boolean = false;
    let flag4:boolean = false;


    if(nombre.value != "")
    {
        flag = true;
    }

    if(rut.value.length == 9)
    {
        for(let i = rut.value.length-1; i < rut.value.length; i++)
        {
            if(rut.value[i] == "K" || rut.value[i] == "1" || rut.value[i] == "2" || rut.value[i] == "3" || rut.value[i] == "4" || rut.value[i] == "5" || rut.value[i] == "6" || rut.value[i] == "7" || rut.value[i] == "8" || rut.value[i] == "9" || rut.value[i] == "0")
            {
                flag2 = true;
            }
        }
    }

    if(correo.value.length != ""){
        flag3 = true;
    }

    if(telefono.value > 900000000 &&  telefono.value < 999999999)
    {
        flag4 = true;
    }

    if(flag && flag2 && flag3 && flag4){
        return true;
    }
    return false;
}

function validarNivelDeProgramacion(event:any){
    let radios:any = document.getElementsByClassName("form-check-input 3");
    let flag = false;

    for(let i = 0; i < radios?.length; i++){
        if(radios[i].checked){
            flag = true;
        }
    }

    return flag;
}

function ocultarYmostarMensaje(event:any){
    formulario.style.display = "none";
    event.preventDefault();
    let conta:any = document.getElementsByClassName("container")[0];//el 0 ya que me retorna un arreglo
;
    let h2 = document.createElement("h2");
    h2.id = "mensajeFinal";
    h2.textContent="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    let col = document.createElement("div");
    col.className ="col-md-auto"
    let row = document.createElement("div");
    row.className = "row justify-content-md-center";
    row.id = "Mensaje";

    col.appendChild(h2);
    row.appendChild(col);
    conta.appendChild(row);
}
