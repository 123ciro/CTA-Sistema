function agregarProveedor() {
    var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/agregar.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            limpiarCampos();
            $("#id_proveedor").focus();
            $("#id_proveedor").select();
            $("#id_proveedor");
        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos.");
        },
        complete: function (objeto, exito, error) {
            $("#id_proveedor").focus();
        }
    });
}
function buscarIdProveedor() {
    var datosFormulario = $("#formPrograma").serialize();
    //alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarId.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_proveedor").val(json.id_proveedor);
            $("#nombre_proveedor").val(json.nombre_proveedor);

            $("#direccion_proveedor").val(json.direccion_proveedor);
            $("#telefono_proveedor").val(json.telefono_proveedor);
            $("#correo_proveedor").val(json.correo_proveedor);
            $("#ruc_proveedor").val(json.ruc_proveedor);
            $("#dv_proveedor").val(json.dv_proveedor);
            $("#id_ciudad").val(json.id_ciudad);
            $("#nombre_ciudad").val(json.nombre_ciudad);
            if (json.nuevo === "true") {
                $("#botonAgregar").prop('disabled', false);
                $("#botonModificar").prop('disabled', true);
                $("#botonEliminar").prop('disabled', true);
                siguienteCampo("#nombre_rol", "#botonAgregar", false);
                 $("#nombre_proveedor").focus();
                
                
            } else {
                $("#botonAgregar").prop('disabled', true);
                $("#botonModificar").prop('disabled', false);
                $("#botonEliminar").prop('disabled', false);
                siguienteCampo("#nombre_rol", "#botonAgregar", false);
            }


        },
        error: function (e) {
            $("#mensajes").html("No se pudo recuperar los datos.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function buscarNombreProveedor() {
    var datosFormulario = $("#formBuscar").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarNombre.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
            $("#contenidoBusqueda").css("display", "none");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#contenidoBusqueda").html(json.contenido);
            $("#contenidoBusqueda").fadeIn("slow");
            $("tbody tr").on("click", function () {
                var id = $(this).find("td:first").html();
                $("#panelBuscar").html("");
                $("#id_proveedor").val(id);
                $("#nombre_proveedor").focus();
                buscarIdProveedor();
                $("#buscar").fadeOut("slow");
                $("#panelPrograma").fadeIn("slow");
            });
        },
        error: function (e) {
            $("#mensajes").html("No se pudo buscar registros.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });

}
function modificarProveedor() {
    var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/modificar.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            limpiarCampos();
        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos error" + e.status);
        },
        complete: function (objeto, exito, error) {
            limpiarCampos();
            $("#id_proveedor").focus();
            $("#id_proveedor").select();
            if (exito === "success") {

            }
        }
    });
}
function eliminarProveedor() {
    var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/eliminar.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
        },
        error: function (e) {
            $("#mensajes").html("No se pudo eliminar los datos error" + e.status);
        },
        complete: function (objeto, exito, error) {
            limpiarCampos();
            $("#id_proveedor").focus();
            $("#id_proveedor").select();
            if (exito === "success") {

            }
        }
    });



}
function limpiarCampos() {
    $("#id_proveedor").val("0");
    $("#nombre_proveedor").val("");
    $("#id_ciudad").val(0);
    $("#nombre_ciudad").val("");

    $("#direccion_proveedor").val("");
    $("#telefono_proveedor").val("");
    $("#correo_proveedor").val("");
    $("#ruc_proveedor").val("");
    $("#dv_provedor").val("");
    $("#id_proveedor").focus();
}


function checkIt(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field accepts numbers only.";
        $("#mensajes").html("ingrese solo numeros.");
        return false;
    }
    status = "";
    return true;

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
        $("#mensajes").html("Ingrese Solo Letras.");




        return false;
    }


}







function buscarIdCiudad() {
    var datosFormulario = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdCiud.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_ciudad").val(json.id_ciudad);
            $("#nombre_ciudad").val(json.nombre_ciudad);

        },
        error: function (e) {
            $("#mensajes").html("No se pudo recuperar los datos Error:" + e.status);
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {

            }
        }
    });
}

function buscarNombreCiudad() {

    var datosFormulario = $("#formBuscar").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarNombreCiu.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
            //$("#contenidoBusqueda").css("display","none");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#contenidoBusqueda").html(json.contenido);
            $("#contenidoBusqueda").fadeIn("slow");
            $("tbody tr").on("click", function () {
                var id = $(this).find("td:first").html();
                $("#panelBuscar").html("");
                $("#id_ciudad").val(id);
                $("#nombre_ciudad").focus();
                buscarIdCiudad();
                $("#buscar").fadeOut("slow");
                $("#panelPrograma").fadeIn("slow");
            });
        },
        error: function (e) {
            $("#mensajes").html("No se pudo buscar registros Error:" + e.status);
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {

            }
        }
    });
}

function validarFormularioProveedor() {

    var valor = true;
    var id = $("#id_proveedor").val();

    var nom = $("#nombre_proveedor").val();
    var ruc = $("#ruc_proveedor").val();
    var telefono = $("#telefono_proveedor").val();
    var email = $("#correo_proveedor").val();
    var idciu = $("#id_ciudad").val();
    var direc = $("#direccion_proveedor").val();


    if (id === "") {
        valor = false;
        $("#id_proveedor").val("");
        $("#id_proveedor").focus();
        $("#mensajes").html("Id No puede estar Vacio.");

    } else {

        if (nom === "") {
            valor = false;

            $("#nombre_proveedor").val("");
            $("#nombre_proveedor").focus();
            $("#mensajes").html("Nombre no puede estar vacio.");

        } else {

            if (ruc === "0") {
                valor = false;

                $("#ruc_proveedor").val("");
                $("#ruc_proveedor").focus();
                $("#mensajes").html("RUC no puede estar vacio.");

            } else {
                if (telefono === "") {
                    valor = false;

                    $("#telefono_proveedor").val("");
                    $("#telefono_proveedor").focus();
                    $("#mensajes").html("Telefono puede estar en 0.");
                } else {

                    if (email === "") {
                        valor = false;

                        $("#correo_proveedor").val("");
                        $("#correo_proveedor").focus();
                        $("#mensajes").html("Correo no puede estar vacio.");

                    } else {
                        if (idciu === "0") {
                            valor = false;

                            $("#id_ciudad").val("");
                            $("#id_ciudad").focus();
                            $("#mensajes").html("Ciudad no puede estar en 0.");


                        } else {

                            if (direc === "") {
                                valor = false;

                                $("#direccion_proveedor").val("");
                                $("#direccion_proveedor").focus();
                                $("#mensajes").html("Direccion no puede estar vacio.");


                            }

                        }
                    }
                }


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

function buscarVerificador1() {
    var datosFormulario = $("#formPrograma").serialize();
    //alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarVerificadorProve.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#dv_proveedor").val(json.dv_proveedor);
    
            $("#ruc_proveedor").val(json.ruc_proveedor);

        },
        error: function (e) {
            $("#mensajes").html("No se pudo recuperar los datos Error:" + e.status);
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {

            }
        }
    });
}