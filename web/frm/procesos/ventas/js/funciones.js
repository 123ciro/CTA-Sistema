function buscarIdVenta() {
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
            $("#id_venta").val(json.id_venta);
            $("#id_cliente").val(json.id_cliente);
            $("#nombre_cliente").val(json.nombre_cliente);
            $("#fecha_venta").val(json.fecha_venta);
            $("#ruc_cliente").val(json.ruc_cliente);
            $("#dv_cliente").val(json.dv_cliente);
            //  $("#id_tipopago").val(json.id_tipopago);
            //  $("#nombre_tipopago").val(json.nombre_tipopago);
            $("#estado_venta").val(json.estado_venta);
            $("#numero_factura_venta").val(json.numero_factura_venta);
            $("#totalletra").val(json.total);
   
            $("#contenidoDetalle").html(json.contenido_detalle);


            if (json.nuevo === "true") {
                $("#botonAgregar").prop('disabled', false);

                $("#botonEliminar").prop('disabled', true);

                $("#FormCobro").prop('disabled', true);
                //  siguienteCampo("#id_tipoventa", "#botonAgregar", true);
                $("#detalle").prop('hidden', true);
                $("#id_cliente").focus();
            }

            if (json.nuevo === "false") {

            

                $("#botonAgregar").prop('disabled', true);
           
                $("#botonEliminar").prop('disabled', false);
                $("#FormCobro").prop('disabled', false);


          

                if (json.estado_venta === "FACTURADO") {
                    $("#botonAgregar").prop('disabled', true);
                
                    $("#botonEliminar").prop('disabled', true);
                    $("#FormCobro").prop('disabled', true);
                    $("#id_cliente").prop('disabled', true);
                    $("#FormCobro").prop('disabled', true);
                    $("#fecha_venta").prop('disabled', true);
                    $("#tipofactura_venta").prop('disabled', true);
                    $("#id_establecimiento").prop('disabled', true);
                    $("#id_puesto").prop('disabled', true);
                    $("#numero_factura_venta").prop('disabled', true);
                    $("#id_usuario").prop('disabled', true);
                    $("#agregar").prop('disabled', true);
            
                    $("#botonBuscarIdCliente").prop('disabled', true);
                    $("#botonPlus").prop('disabled', true);
                    $(".botonEditarVenta").prop('disabled', true);
                    $("#detalle").prop('hidden', false);


                }

                if (json.estado_venta === "ANULADO") {
                    $("#botonAgregar").prop('disabled', true);
               
                    $("#botonEliminar").prop('disabled', true);
                    $("#FormCobro").prop('disabled', true);
                    $("#id_cliente").prop('disabled', true);
                    $("#FormCobro").prop('disabled', true);
                    $("#fecha_venta").prop('disabled', true);
                     $("#tipofactura_venta").prop('disabled', true);
                    $("#id_establecimiento").prop('disabled', true);
                    $("#id_puesto").prop('disabled', true);
                    $("#numero_factura_venta").prop('disabled', true);
                    $("#id_usuario").prop('disabled', true);
                    $("#agregar").prop('disabled', true);
                    $("#botonPlus").prop('disabled', true);
             
                    $("#botonBuscarIdCliente").prop('disabled', true);
                     $(".botonEditarVenta").prop('disabled', true);
                     $("#detalle").prop('hidden', false);

                }

                siguienteCampo("#id_tipoventa", "#botonModificar", true);
                $("#detalle").prop('hidden', false);
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





function buscarIdVenta1() {
    var datosFormulario = $("#formPrograma").serialize();
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
            $("#id_venta").val(json.id_venta);
            $("#id_cliente").val(json.id_cliente);
            $("#nombre_cliente").val(json.nombre_cliente);
            $("#fecha_venta").val(json.fecha_venta);
            $("#ruc_cliente").val(json.ruc_cliente);
            $("#id_tipopago").val(json.id_tipopago);
            $("#nombre_tipopago").val(json.nombre_tipopago);
            $("#estado_venta").val(json.estado_venta);
            $("#numero_factura_venta").val(json.numero_factura_venta);


            $("#contenidoDetalle").html(json.contenido_detalle);
//            var con = (json.contenido_detalle);
//            console.log(con);
//
//            var cuenta = 0;
//            var posicion = con.indexOf("id='editarLinea'");
//            while (posicion !== -1) {
//                cuenta++;
//                posicion = con.indexOf("id='editarLinea'", posicion + 1);
//
//
//                alert(cuenta);
//                $("#editarLinea").prop('disabled', true);
//
//            }
//            $("#editarLinea").val();

            if (json.nuevo === "true") {
                $("#botonAgregar").prop('disabled', false);

                $("#botonEliminar").prop('disabled', true);
                $("#FormCobro").prop('disabled', true);
                siguienteCampo("#id_tipoventa", "#botonAgregar", true);
                $("#detalle").prop('hidden', true);
            }
            if (json.nuevo === "false") {

                $("#botonAgregar").prop('disabled', true);

                $("#botonEliminar").prop('disabled', false);
                $("#FormCobro").prop('disabled', false);





                siguienteCampo("#id_tipoventa", "#botonModificar", true);
                $("#detalle").prop('hidden', false);

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


function buscarNombreVenta() {
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
                $("#id_venta").val(id);
                $("#nombre_cliente").focus();
                buscarIdVenta();
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





function agregarVenta() {
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
            $("#botonAgregar").prop('disabled', true);
            $("#detalle").prop('hidden', false);
            $("#id_venta").val(json.id_venta);
            $("#id_cliente").prop('disabled', true);
            //  $("#id_tipopago").prop('disabled', true);
            $("#id_usuario").prop('disabled', true);
            $("#numero_factura_venta").val(json.numero_factura_venta);

            $("#fecha_venta").prop('disabled', true);
            buscarIdVenta1();
            $("#id_venta").focus;
            $("#id_venta").select();

        },
        error: function (e) {
            $("#mensajes").html("No se pudo agregar los datos.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function modificarVenta() {
    var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/modificar.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_venta").focus;
            $("#id_venta").select();
            buscarIdVenta();
        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function eliminarVenta() {
    var datosFormulario = $("#formPrograma").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/eliminar.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {

            limpiarFormulario();
            $("#mensajes").html(json.mensaje);
            $("#id_venta").focus;
            $("#id_venta").select();
        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}

function buscarIdCliente() {
    var datosFormulario = $("#formPrograma").serialize();
    //alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdCliente.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_cliente").val(json.id_cliente);
            $("#nombre_cliente").val(json.nombre_cliente);
//            $("#apellido_cliente").val(json.apellido_cliente);
//            $("#direccion_cliente").val(json.direccion_cliente);

            $("#ruc_cliente").val(json.ruc_cliente);
            $("#dv_cliente").val(json.dv_cliente);
//            $("#cedula_cliente").val(json.cedula_cliente);
//            $("#telefono_cliente").val(json.telefono_cliente);
//             $("#fechanacimiento_cliente").val(json.fechanacimiento_cliente);
//             $("#id_ciudad").val(json.id_ciudad);
//             $("#nombre_ciudad").val(json.nombre_ciudad);
//           
//           
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
function buscarNombreCliente() {
    var datosFormulario = $("#formBuscar").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarNombreCliente.jsp',
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
                $("#id_cliente").val(id);
                $("#nombre_cliente").focus();
                buscarIdCliente();
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

function validarFormulario() {
    var valor = true;
    if ($("#nombre_venta").val().length < 3) {
        valor = false;
        $("#mensajes").html("Nombre Venta no puede estar vacio.");
        $("#nombre_venta").focus();
    }

    if ($("#nombre_proveedor").val().length < 2) {
        valor = false;
        $("#mensajes").html("Proveedor no puede estar vacio.");
        $("#id_proveedor").focus();
    }

    if ($("#nombre_tipoventa").val().length < 2) {
        valor = false;
        $("#mensajes").html("Tipo Venta no puede estar vacio.");
        $("#id_tipoventa").focus();
    }
    return valor;
}
function limpiarFormulario() {
    $("#id_venta").val(0);
    $("#id_cliente").focus();

    buscarIdVenta();

}
function agregarLinea() {
    $("#id_detalleventa").val("0");
    $("#id_producto").val("0");
    $("#nombre_producto").val("");
    $("#precioventa_producto").val("");
    $("#iva_producto").val("");
    $("#cantidad_productoventa").val("0");
    $("#panelLinea").fadeIn("slow");
    $("#panelPrograma").fadeOut("slow");
    $("#id_producto").focus();
    $("#id_producto").select();
    $("#botonAgregarLinea").prop('disabled', false);
    $("#botonEliminarLinea").prop('disabled', true);
    $("#editarLinea").prop('disabled', true);


    siguienteCampo("#horas_detalleventa", "#botonAgregarLinea", true);
}




function agregarCobro1(id) {
    $("#id_venta").val(id);
    $("#id_tipopago").val("0");
    $("#id_cobroventa").val("0");
    $("#fecha_cobroventa").val("0");

    //$("#numero_factura_venta").val("0");
    // $("#id_timbrado").val("");
    //  $("#id_establecimiento").val("");
//    $("#iva_producto").val("");
//    $("#cantidad_productoventa").val("0");
    $("#panelCobro").fadeIn("slow");
    $("#panelPrograma").fadeOut("slow");
//    $("#id_producto").focus();
//    $("#id_producto").select();
    $("#botonAgregarLinea").prop('disabled', false);
    $("#botonEliminarLinea").prop('disabled', true);
    $("#editarLinea").prop('disabled', true);

    buscarIdVenta();

    siguienteCampo("#horas_detalleventa", "#botonAgregarLinea", true);
}
function editarLinea(id) {
    $("#id_detalleventa").val(id);
    $("#id_producto").val("0");
    $("#nombre_producto").val("");
    $("#precioventa_producto").val("");
    $("#iva_producto").val("");
    $("#cantidad_productoventa").val("0");
    $("#panelLinea").fadeIn("slow");
    $("#panelPrograma").fadeOut("slow");
    $("#id_producto").focus();
    $("#id_producto").select();

    $("#botonAgregarLinea").prop('disabled', true);

    $("#botonEliminarLinea").prop('disabled', false);


    buscarIdVentaDetalle();
    siguienteCampo("#cantidad_productoventa", true);
}




// ventasproductos
function buscarIdVentaDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    //alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdVentaDetalle.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_producto").val(json.id_producto);
            $("#nombre_producto").val(json.nombre_producto);
            $("#precioventa_producto").val(json.precioventa_producto);
            $("#iva_producto").val(json.iva_producto);
            $("#cantidad_productoventa").val(json.cantidad_productoventa);


            var estado_venta;

            estado_venta = $("#estado_venta").serialize();

            if (estado_venta === "ANULADO") {
                alert(estado_venta);
                $("#botonAgregarLinea").prop('disabled', true);

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
function agregarVentaDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    var id_venta = $("#id_venta").val();
    datosFormulario += "&id_venta=" + id_venta;

    // alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/agregarVentaDetalle.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#panelLinea").fadeOut("slow");
            $("#panelPrograma").fadeIn("slow");
            buscarIdVenta();
        },
        error: function (e) {
            $("#mensajes").html("No se pudo agregar los datos.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function modificarVentaDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    var id_venta = $("#id_venta").val();
    datosFormulario += "&id_venta=" + id_venta;
    $.ajax({
        type: 'POST',
        url: 'jsp/modificarVentaDetalle.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#panelLinea").fadeOut("slow");
            $("#panelPrograma").fadeIn("slow");
            buscarIdVenta();
        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
function eliminarVentaDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    var id_venta = $("#id_venta").val();
    datosFormulario += "&id_venta=" + id_venta;
   // alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/eliminarVentaDetalle.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json)
        {

            $("#mensajes").html(json.mensaje);
            $("#panelLinea").fadeOut("slow");
            $("#panelPrograma").fadeIn("slow");
            buscarIdVenta();

        },
        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos.");
        },
        complete: function (objeto, exito, error) {
            if (exito === "success") {
            }
        }
    });
}
//// productos
function buscarIdProducto() {
    var datosFormulario = $("#formLinea").serialize();
    //alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdProdu.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_producto").val(json.id_producto);
            $("#nombre_producto").val(json.nombre_producto);
            $("#precioventa_producto").val(json.precioventa_producto);
            $("#iva_producto").val(json.iva_producto);


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
function buscarNombreProducto() {
    var datosFormulario = $("#formBuscar").serialize();
    // alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarNombreProducto.jsp',
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
                $("#id_producto").val(id);
                $("#nombre_producto").focus();
                buscarIdProducto();
                $("#buscar").fadeOut("slow");
                $("#panelLinea").fadeIn("slow");
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

function validarFormularioVenta() {

    var valor = true;
    var cliente = $("#id_cliente").val();
    var pago = $("#id_tipopago").val();



    var prod = $("#id_producto").val();
    var cant = $("#cantidad_productoventa").val();



    if (cliente === "0") {
        valor = false;
        $("#id_cliente").val("");
        $("#id_cliente").focus();
        $("#mensajes").html("Cliente no puede estar Vacio.");

    } else {
        if (pago === "0") {
            valor = false;

            $("#id_tipopago").val("");
            $("#id_tipopago").focus();
            $("#mensajes").html("Pago no puede estar vacio.");


        } else {

            if (prod === "0") {
                valor = false;

                $("#id_producto").val("");
                $("#id_producto").focus();
                $("#mensajes").html("Producto no puede estar vacio.");

            } else {
                if (cant === "0") {
                    valor = false;

                    $("#cantidad_productoventa").val("");
                    $("#cantidad_productoventa").focus();
                    $("#mensajes").html("Cantidad no puede estar vacia.");
                }



            }


        }
    }
    return valor;
}




function recorre() {


    $(document).ready(function () {
        $("#editarLinea").click(function () {
            $("#tr").each(function () {
                alert($(this).text());
            });
        });
    });
}

function buscarCantidad() {
    var datosFormulario = $("#formLinea").serialize();

   // alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarCantidad.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
           
        },
        success: function (json) {

            //   $("#id_cliente").focus();
            // $("#id_timbrado").val(json.id_timbrado);


            $("#id_producto").val(json.id_producto);
            $("#cantidad_productoventa").val(json.cantidad_productoventa);

           

            $("#mensajes").html(json.mensaje);







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

function buscarIdCobro() {
    var datosFormulario = $("#formPrograma").serialize();
    //   alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdCobro.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            //   $("#id_tipopago").val(json.id_tipopago);
            //   $("#nombre_tipopago").val(json.nombre_tipopago);
            $("#id_venta").val(json.id_venta);
            $("#total_venta").val(json.total_venta);
            $("#id_cobroventa").val(json.id_cobroventa);
            $("#panelCobro").fadeIn("slow");
            $("#panelPrograma").fadeOut("slow");

//    $("#id_producto").focus();
//    $("#id_producto").select();
            //   $("#botonAgregarLinea").prop('disabled', false);
            // $("#botonEliminarLinea").prop('disabled', true);
            //    $("#editarLinea").prop('disabled', true);
//            }


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


function agregarCobro() {
    var datosFormulario = $("#formCobro").serialize();
    var id_venta = $("#id_venta").val();
    datosFormulario += "&id_venta=" + id_venta;

    //   alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/agregarCobro.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {

            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#panelCobro").fadeOut("slow");
            $("#panelPrograma").fadeIn("slow");
            buscarIdVenta();
        },
        error: function (e) {
            $("#mensajes").html("No se pudo agregar los datos.");
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
function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode();
	return (key >= 48 && key <= 57);
}
