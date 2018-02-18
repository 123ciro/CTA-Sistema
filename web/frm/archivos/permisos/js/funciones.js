function agregarPermiso() {
    var datosPermiso = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/agregar.jsp',
        data: datosPermiso,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            limpiarCampos();
            $("#id_usuario").focus();
            $("#id_usuario").select();
        },
        error: function (e) {
            $("#mensajes").html("No se puede gregar los datos, Error:" + e.status);
        },
        complete: function (objeto, exito, error) {
            $("#id_permiso").focus();
            $("#id_permiso").select();
            if (exito === "success") {

            }
        }
    });
}

function buscarIdPermiso() {
    var datosPermiso = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarId.jsp',
        data: datosPermiso,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_permiso").val(json.id_permiso);
            $("#orden_permiso").val(json.orden_permiso);
            $("#id_rol").val(json.id_rol);
            $("#nombre_rol").val(json.nombre_rol);

            $("#id_formulario").val(json.id_formulario);
            $("#nombre_formulario").val(json.nombre_formulario);


//            $("#id_rol").val(json.id_rol);
//            $("#nombre_rol").val(json.nombre_rol);
            if (json.nuevo === "true") {
                $("#botonAgregar").prop('disabled', false);
                $("#botonModificar").prop('disabled', true);
                $("#botonEliminar").prop('disabled', true);
//                siguienteCampo("#orden_permiso","#codigo_permiso",false);
//                siguienteCampo("#codigo_permiso","#id_rol",false);
//                siguienteCampo("#id_rol","#botonAgregar",false);
            } else {
                $("#botonAgregar").prop('disabled', true);
                $("#botonModificar").prop('disabled', false);
                $("#botonEliminar").prop('disabled', false);
//                siguienteCampo("#nombre_permiso","#codigo_permiso",false);
//                siguienteCampo("#codigo_permiso","#id_rol",false);
//                siguienteCampo("#id_rol","#botonAgregar",false);
            }
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

function buscarOrdenPermiso() {

    var datosPermiso = $("#formBuscar").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarOrdenpermiso.jsp',
        data: datosPermiso,
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
                $("#id_permiso").val(id);
                $("#orden_permiso").focus();
                buscarIdPermiso();
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

function eliminarPermiso() {
    var datosPermiso = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/eliminar.jsp',
        data: datosPermiso,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos error" + e.status);
        },
        complete: function (objeto, exito, error) {
            limpiarCampos();
            // $("#id_permiso").focus();
            // $("#id_permiso").select();
            if (exito === "success") {

            }
        }
    });
}

function limpiarCampos() {
    $("#id_permiso").val("0");
    $("#orden_permiso").val("");

    $("#id_permiso").focus();
    $("#id_rol").val("");
    $("#nombre_rol").val("");
    $("#id_formulario").val("");
    $("#nombre_formulario").val("");
    //$("#id_permiso").focus();
}

function modificarPermiso() {
    var datosPermiso = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/modificar.jsp',
        data: datosPermiso,
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
            // limpiarCampos();
            $("#id_permiso").focus();
            $("#id_permiso").select();
            if (exito === "success") {

            }
        }
    });
}
function buscarIdMenu() {
    var datosPermiso = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdMenu.jsp',
        data: datosPermiso,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_menu").val(json.id_menu);
            $("#nombre_menu").val(json.nombre_menu);
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

function buscarIdRol() {
    var datosFormulario = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdRol.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_rol").val(json.id_rol);
            $("#nombre_rol").val(json.nombre_rol);

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

function buscarIdRol1() {
    var datosFormulario = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdRol.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_rol").val(json.id_rol);
            $("#nombre_rol").val(json.nombre_rol);

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


function buscarNombreRol() {

    var datosFormulario = $("#formBuscar").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarNombreRol.jsp',
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
                $("#id_rol").val(id);
                $("#nombre_rol").focus();
                buscarIdRol();
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

function buscarIdFormulario() {
    var datosFormulario = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdFormulario.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando daatos al servidor...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_formulario").val(json.id_formulario);
            $("#nombre_formulario").val(json.nombre_formulario);
            $("#codigo_formulario").val(json.codigo_formulario);

//            $("#id_rol").val(json.id_rol);
//            $("#nombre_rol").val(json.nombre_rol);

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

function buscarNombreFormulario() {

    var datosFormulario = $("#formBuscar").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarNombreFormulario.jsp',
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
                $("#id_formulario").val(id);
                $("#nombre_formulario").focus();
                buscarIdFormulario();
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

function validarFormularioPermisos() {

    var valor = true;
    var per = $("#id_permiso").val();
    var ord = $("#orden_permiso").val();
    var roles = $("#id_rol").val();
    var form = $("#id_formulario").val();




    if (per === "") {
        valor = false;
        $("#id_permiso").val("");
        $("#id_permiso").focus();
        $("#mensajes").html("Cod no puede estar Vacio.");

    } else {
        if (ord === "") {
            valor = false;

            $("#orden_permiso").val("");
            $("#orden_permiso").focus();
            $("#mensajes").html("Orden no puede estar vacio.");



        } else {
            if (roles === "0") {
                valor = false;

                $("#id_rol").val("");
                $("#id_rol").focus();
                $("#mensajes").html("Rol no puede estar en Cero.");



            } else {
                if (form === "0") {
                    valor = false;

                    $("#id_formulario").val("");
                    $("#id_formulario").focus();
                    $("#mensajes").html("Formulario no puede estar en Cero.");



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
