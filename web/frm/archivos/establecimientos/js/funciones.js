function agregarEstablecimiento() {
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
            $("#id_establecimiento").focus();
            $("#id_establecimiento").select();
        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos.");
        },
        complete: function (objeto, exito, error) {
            limpiarCampos();

        }
    });
}
function buscarIdEstablecimiento() {
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
            $("#id_establecimiento").val(json.id_establecimiento);
            $("#nombre_establecimiento").val(json.nombre_establecimiento);
            $("#actividad_economica").val(json.actividad_economica);
            $("#direccion_establecimiento").val(json.direccion_establecimiento);

            $("#ruc_establecimiento").val(json.ruc_establecimiento);
            $("#representante_establecimiento").val(json.representante_establecimiento);

            $("#telefono_establecimiento").val(json.telefono_establecimiento);

            $("#id_ciudad").val(json.id_ciudad);
            $("#nombre_ciudad").val(json.nombre_ciudad);

            if (json.nuevo === "true") {
                $("#botonAgregar").prop('disabled', false);
                $("#botonModificar").prop('disabled', true);
                $("#botonEliminar").prop('disabled', true);

            } else {
                $("#botonAgregar").prop('disabled', true);
                $("#botonModificar").prop('disabled', false);
                $("#botonEliminar").prop('disabled', false);
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
function buscarNombreEstablecimiento() {
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
                $("#id_establecimiento").val(id);
                $("#nombre_establecimiento").focus();
                buscarIdEstablecimiento();
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
function modificarEstablecimiento() {
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
            $("#id_establecimiento").focus();
            $("#id_establecimiento").select();
            if (exito === "success") {

            }
        }
    });
}
function eliminarEstablecimiento() {
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
            $("#id_establecimiento").focus();
            $("#id_establecimiento").select();
            if (exito === "success") {

            }
        }
    });



}
function limpiarCampos() {
    $("#id_establecimiento").val("0");
    $("#nombre_establecimiento").val("");
    $("#actividad_economica").val("");
    $("#id_ciudad").val(0);
    $("#nombre_ciudad").val("");
    $("#ruc_establecimiento").val("");
    $("#representante_establecimiento").val("");

    $("#telefono_establecimiento").val("");

    $("#direccion_establecimiento").val("");
    $("#id_establecimiento").focus();
}

function buscarCedula() {
    var datosFormulario = $("#formPrograma").serialize();
    //alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarcedula.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);

            $("#cedula_establecimiento").val(json.cedula_establecimiento);
            if (json.nuevo === "false") {
                $("#cedula_establecimiento").val("");
                $("#cedula_establecimiento").focus();
            } else {
                $("#telefono_establecimiento").focus();
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

function buscarIdCiudad() {
    var datosFormulario = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdCiudad.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_ciudad").val(json.id_ciudad);
            $("#nombre_ciudad").val(json.nombre_ciudad);
//            if(json.nuevo==="true"){
//                $("#botonAgregar").prop('disabled',false);
//                $("#botonModificar").prop('disabled',true);
//                $("#botonEliminar").prop('disabled',true);
//                siguienteCampo("#nombre_ciudad","#botonAgregar",false);
//            }
//            else{
//                $("#botonAgregar").prop('disabled',true);
//                $("#botonModificar").prop('disabled',false);
//                $("#botonEliminar").prop('disabled',false);
//                siguienteCampo("#nombre_ciudad","#botonAgregar",false);
//            }
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
        url: 'jsp/buscarNombreCiudad.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
            $("#contenidoBusqueda").css("display", "none");
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




function validarFormularioEstablecimiento() {

    var valor = true;
    var id = $("#id_establecimiento").val();

    var nom = $("#nombre_establecimiento").val();
    var ac = $("#actividad_economica").val();
    var ruc = $("#ruc_establecimiento").val();

    var idciu = $("#id_ciudad").val();
    var dire = $("#direccion_establecimiento").val();
    var director = $("#representante_establecimiento").val();
    var tel = $("#telefono_establecimiento").val();


    if (id === "") {
        valor = false;
        $("#id_establecimiento").val("");
        $("#id_establecimiento").focus();
        $("#mensajes").html("Id No puede estar Vacio.");

    } else {

        if (nom === "") {
            valor = false;

            $("#nombre_establecimiento").val("");
            $("#nombre_establecimiento").focus();
            $("#mensajes").html("Nombre no puede estar vacio.");

        } else {

            if (ac === "") {
                valor = false;

                $("#actividad_economica").val("");
                $("#actividad_economica").focus();
                $("#mensajes").html("Actividad no puede estar vacio.");

            } else {
                if (ruc === "") {
                    valor = false;

                    $("#ruc_establecimiento").val("");
                    $("#ruc_establecimiento").focus();
                    $("#mensajes").html("RUC no puede estar vacio.");
                } else {
                    if (idciu === "0") {
                        valor = false;

                        $("#id_ciudad").val("");
                        $("#id_ciudad").focus();
                        $("#mensajes").html("Ciudad no puede estar vacio.");


                    } else {

                        if (dire === "") {
                            valor = false;

                            $("#direccion_establecimiento").val("");
                            $("#direccion_establecimiento").focus();
                            $("#mensajes").html("Direccion no puede estar vacio.");


                        } else {

                            if (director === "") {
                                valor = false;

                                $("#representante_establecimiento").val("");
                                $("#representante_establecimiento").focus();
                                $("#mensajes").html("Representante no puede estar vacio.");


                            } else {
                                if (tel === "") {
                                    valor = false;

                                    $("#telefono_establecimiento").val("");
                                    $("#telefono_establecimiento").focus();
                                    $("#mensajes").html("Telefono no puede estar vacio.");

                                }




                            }


                        }
                    }
                }



            }
        }
    }
    return valor;
}