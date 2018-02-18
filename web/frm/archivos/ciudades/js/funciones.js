function agregarCiudad(){
    var datosFormulario=$("#formPrograma").serialize();
    $.ajax({
        type:'POST',
        url:'jsp/agregar.jsp',
        data:datosFormulario,
        dataType:'json',
        beforeSend:function(objeto){
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success:function(json){
            $("#mensajes").html(json.mensaje);
            limpiarCampos();
            $("#id_ciudad").focus();
            $("#id_ciudad").select();
        },
        error: function(e){
            $("#mensajes").html("No se puede gregar los datos, Error:"+e.status);
        },
        complete: function(objeto, exito,error){
            $("#id_ciudad").focus();
            $("#id_ciudad").select();
            if(exito==="success"){
                
            }
        }
    });
}

function buscarIdCiudad(){
    var datosFormulario= $("#formPrograma").serialize();
    
    $.ajax({
        type:'POST',
        url:'jsp/buscarId.jsp',
        data:datosFormulario,
        dataType:'json',
        beforeSend: function(objeto){
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function(json){
            $("#mensajes").html(json.mensaje);
            $("#id_ciudad").val(json.id_ciudad);
            $("#nombre_ciudad").val(json.nombre_ciudad);
            if(json.nuevo==="true"){
                $("#botonAgregar").prop('disabled',false);
                $("#botonModificar").prop('disabled',true);
                $("#botonEliminar").prop('disabled',true);
                siguienteCampo("#nombre_ciudad","#botonAgregar",false);
            }
            else{
                $("#botonAgregar").prop('disabled',true);
                $("#botonModificar").prop('disabled',false);
                $("#botonEliminar").prop('disabled',false);
                siguienteCampo("#nombre_ciudad","#botonAgregar",false);
            }
        },
        error: function(e){
            $("#mensajes").html("No se pudo recuperar los datos Error:"+e.status);
        },
        complete: function(objeto,exito,error){
            if(exito==="success"){
                
            }
        }
    });
}

function buscarNombreCiudad(){
   
    var datosFormulario= $("#formBuscar").serialize();
    
    $.ajax({
        type:'POST',
        url:'jsp/buscarNombre.jsp',
        data:datosFormulario,
        dataType:'json',
        beforeSend: function(objeto){
            $("#mensajes").html("Enviando daatos al servidor...");
            //$("#contenidoBusqueda").css("display","none");
        },
        success: function(json){
            $("#mensajes").html(json.mensaje);
            $("#contenidoBusqueda").html(json.contenido);
            $("#contenidoBusqueda").fadeIn("slow");
            $("tbody tr").on("click", function(){
                var id=$(this).find("td:first").html();
                $("#panelBuscar").html("");
                $("#id_ciudad").val(id);
                $("#nombre_ciudad").focus();
                buscarIdCiudad();
                $("#buscar").fadeOut("slow");
                $("#panelPrograma").fadeIn("slow");
            });
        },
        error: function(e){
            $("#mensajes").html("No se pudo buscar registros Error:"+e.status);
        },
        complete: function(objeto,exito,error){
            if(exito==="success"){
                
            }
        }
    });
}

function eliminarCiudad(){
    var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type:'POST',
        url:'jsp/eliminar.jsp',
        data:datosFormulario,
        dataType:'json',
        beforeSend: function(objeto){
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success: function(json){
            $("#mensajes").html(json.mensaje);
        },
        error: function (e){
            $("#mensajes").html("No se pudo modificar los datos error"+e.status);
        },
        complete: function(objeto, exito,error){
           // limpiarCampos();
            $("#id_ciudad").focus();
            $("#id_ciudad").select();
            if(exito === "success"){
                
            }
        }
    });
}

function limpiarCampos(){
    $("#id_ciudad").val("0");
    $("#nombre_ciudad").val("");
    $("#id_ciudad").focus();
}

function modificarCiudad(){
     var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type:'POST',
        url:'jsp/modificar.jsp',
        data:datosFormulario,
        dataType:'json',
        beforeSend: function(objeto){
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success: function(json){
            $("#mensajes").html(json.mensaje);
            limpiarCampos();
        },
        error: function (e){
            $("#mensajes").html("No se pudo modificar los datos error"+e.status);
        },
        complete: function(objeto, exito,error){
           // limpiarCampos();
            $("#id_ciudad").focus();
            $("#id_ciudad").select();
            if(exito === "success"){
                
            }
        }
    });
}
function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false;
    for (var i in especiales) {
        if (key === especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) === -1 && !tecla_especial) {
        return false;
    }
}


function validarFormularioCiudad() {

    var valor = true;
    var id = $("#id_ciudad").val();

    var nom = $("#nombre_ciudad").val();
   

    if (id === "") {
        valor = false;
        $("#id_ciudad").val("");
        $("#id_ciudad").focus();
        $("#mensajes").html("Id No puede estar Vacio.");

    }  else {

            if (nom === "") {
                valor = false;

                $("#nombre_ciudad").val("");
                $("#nombre_ciudad").focus();
                $("#mensajes").html("Nombre no puede estar vacio.");

            } 
        
    }
    
     return valor;
    } 
