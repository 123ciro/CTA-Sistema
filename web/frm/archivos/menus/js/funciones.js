function agregarMenu(){
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
            limpiarCampos();
            $("#mensajes").html(json.mensaje);
        },
        error: function(e){
            $("#mensajes").html("No se puede gregar los datos, Error:"+e.status);
        },
        complete: function(objeto, exito,error){
            $("#id_menu").focus();
            $("#id_menu").select();
            if(exito==="success"){
                
            }
        }
    });
}

function buscarIdMenu(){
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
          
          $("#id_menu").val(json.id_menu);
           $("#nombre_menu").val(json.nombre_menu);
           $("#codigo_menu").val(json.codigo_menu);
            $("#mensajes").html(json.mensaje);
           if(json.nuevo==="true"){
                $("#botonAgregar").prop('disabled',false);
                $("#botonModificar").prop('disabled',true);
                $("#botonEliminar").prop('disabled',true);
                siguienteCampo("#nombre_menu","#botonAgregar",false);
            }
            else{
                $("#botonAgregar").prop('disabled',true);
                $("#botonModificar").prop('disabled',false);
                $("#botonEliminar").prop('disabled',false);
                siguienteCampo("#nombre_menu","#botonAgregar",false);
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

function buscarNombreMenu(){
   
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
                $("#id_menu").val(id);
                $("#nombre_menu").focus();
                buscarIdMenu();
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

function eliminarMenu(){
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
            $("#id_menu").focus();
            $("#id_menu").select();
            if(exito === "success"){
                
            }
        }
    });
}

function limpiarCampos(){
    $("#id_menu").val("0");
    $("#nombre_menu").val("");
    $("#codigo_menu").val("");
    
    $("#id_menu").focus();
}

function modificarMenu(){
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
            $("#id_menu").focus();
            $("#id_menu").select();
            if(exito === "success"){
                
            }
        }
    });
}

function validarFormularioMenu() {

    var valor = true;
    var men = $("#id_menu").val();
    var nom = $("#nombre_menu").val();
    var cod = $("#codigo_menu").val();





    if (men === "") {
        valor = false;
        $("#id_menu").val("");
        $("#id_menu").focus();
        $("#mensajes").html("Id no puede estar Vacio.");

    } else {
        if (nom === "") {
            valor = false;

            $("#nombre_menu").val("");
            $("#nombre_menu").focus();
            $("#mensajes").html("Nombre no puede estar vacio.");



        } else {
            if (cod === "") {
                valor = false;

                $("#codigo_menu").val("");
                $("#codigo_menu").focus();
                $("#mensajes").html("Codigo no puede estar Vacio.");



            
            }
        }
    }
    return valor;
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
function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode();
	return (key >= 48 && key <= 57);
}
