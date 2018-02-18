function buscarIdCompra() {
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
            $("#id_compra").val(json.id_compra);
            $("#id_proveedor").val(json.id_proveedor);
            $("#nombre_proveedor").val(json.nombre_proveedor);
            $("#fecha_compra").val(json.fecha_compra);
            $("#ruc_proveedor").val(json.ruc_proveedor);
            $("#dv_proveedor").val(json.dv_proveedor);
        
            $("#numero_factura").val(json.numero_factura);
            
//            var texto = json.numero_factura,
//    separadores = ['###'],
//    textoseparado = texto.split (new RegExp (separadores.join('-')));
//    alert(textoseparado);
    
            $("#estado_compra").val(json.estado_compra);
//            $("#id_usuario").val(json.id_usuario);
//            $("#nombre_usuario").val(json.nombre_usuario);

            //    $("#total_compra").val(json.total_compra);
//            $("#id_usuario").val(json.id_usuario);
//            $("#nombre_usuario").val(json.nombre_usuario);
            $("#contenidoDetalle").html(json.contenido_detalle);
            if (json.nuevo === "true") {

                $("#numero_factura").focus();
                $("#botonAgregar").prop('disabled', false);
                $("#botonModificar").prop('disabled', true);
                $("#botonEliminar").prop('disabled', true);
                $("#FormCuenta").prop('disabled', true);

                siguienteCampo("#id_tipocompra", "#botonAgregar", true);
                $("#detalle").prop('hidden', true);
            } else {


                if (json.nuevo === "false") {
                    $("#numero_factura").focus();
                    $("#botonAgregar").prop('disabled', true);
                    $("#botonModificar").prop('disabled', false);
                    $("#botonEliminar").prop('disabled', false);

                    $("#FormCuenta").prop('disabled', false);
                    siguienteCampo("#id_tipocompra", "#botonAgregar", true);
                    $("#detalle").prop('hidden', true);
                }




                if (json.estado_compra === "ANULADO") {
                    $("#botonEliminar").prop('disabled', true);
                    $("#FormCuenta").prop('disabled', true);
                    $("#numero_factura").prop('disabled', true);
                    $("#botonBuscarIdProveedor").prop('disabled', true);
                    $("#fecha_compra").prop('disabled', true);
                    $("#id_proveedor").prop('disabled', true);
                    $("#id_usuario").prop('disabled', true);
                    $("#agregarCompra").prop('disabled', true);

                    $("#editarCompra").prop('disabled', true);
                    $(".botonEditarCompra").prop('disabled', true);
                }

                if (json.estado_compra === "PAGADO") {
                    $("#botonEliminar").prop('disabled', true);
                    $("#FormCuenta").prop('disabled', true);

                    $("#botonBuscarIdProveedor").prop('disabled', true);
                    $("#fecha_compra").prop('disabled', true);
                    $("#id_proveedor").prop('disabled', true);
                    $("#id_usuario").prop('disabled', true);
                    $("#numero_factura").prop('disabled', true);
                    $("#agregarCompra").prop('disabled', true);
                    $("#editarCompra").prop('disabled', true);
                    $(".botonEditarCompra").prop('disabled', true);

                }





                siguienteCampo("#id_tipocompra", "#botonModificar", true);
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
function buscarNombreCompra() {
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
                $("#id_compra").val(id);
                $("#nombre_proveedor").focus();
                buscarIdCompra();
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

function buscarIdUsuario() {
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
            $("#id_usuario").val(json.id_usuario);
            $("#nombre_usuario").val(json.nombre_usuario);
            $("#password_usuario").val(json.password_usuario);
            $("#login_usuario").val(json.login_usuario);
            $("#id_rol").val(json.id_rol);
            $("#nombre_rol").val(json.nombre_rol);
            if (json.nuevo === "true") {
                $("#botonAgregar").prop('disabled', false);
                $("#botonModificar").prop('disabled', true);
                $("#botonEliminar").prop('disabled', true);



                siguienteCampo("#id_rol", "#botonAgregar", false);
            } else {
                $("#botonAgregar").prop('disabled', true);
                $("#botonModificar").prop('disabled', false);
                $("#botonEliminar").prop('disabled', false);
                //  $("#id_cliente").prop('disabled',true);

                siguienteCampo("#id_rol", "#botonAgregar", false);
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
function buscarNombreUsuario() {
    var datosFormulario = $("#formBuscar").serialize();
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarNombreUsuario.jsp',
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
                $("#id_usuario").val(id);
                $("#nombre_usuario").focus();
                buscarIdUsuario();
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
function agregarCompra() {
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
            limpiarFormulario();
            $("#mensajes").html(json.mensaje);
            $("#botonAgregar").prop('disabled', true);
            $("#detalle").prop('hidden', false);
            $("#id_compra").val(json.id_compra);
            $("#id_usuario").prop('disabled', true);
            $("#id_proveedor").prop('disabled', true);
            $("#fecha_compra").prop('disabled', true);
            buscarIdCompra();
            $("#id_compra").focus;
            $("#id_compra").select();

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
function modificarCompra() {
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
            $("#id_compra").focus;
            $("#id_compra").select();
            buscarIdCompra();
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
function eliminarCompra() {
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
            $("#id_compra").focus;
            $("#id_compra").select();
            buscarIdCompra();
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


function buscarIdProveedor() {
    var datosFormulario = $("#formPrograma").serialize();

    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdProve.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {

            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {

            $("#mensajes").html(json.mensaje);
            $("#id_proveedor").val(json.id_proveedor);

            $("#nombre_proveedor").val(json.nombre_proveedor);
            $("#ruc_proveedor").val(json.ruc_proveedor);



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
        url: 'jsp/buscarNombreProveedor.jsp',
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

function validarFormulario() {
    var valor = true;
    if ($("#nombre_compra").val().length < 3) {
        valor = false;
        $("#mensajes").html("Nombre Compra no puede estar vacio.");
        $("#nombre_compra").focus();
    }

    if ($("#nombre_proveedor").val().length < 2) {
        valor = false;
        $("#mensajes").html("Proveedor no puede estar vacio.");
        $("#id_proveedor").focus();
    }

    if ($("#nombre_tipocompra").val().length < 2) {
        valor = false;
        $("#mensajes").html("Tipo Compra no puede estar vacio.");
        $("#id_tipocompra").focus();
    }
    return valor;
}
function limpiarFormulario() {
    $("#id_compra").val("0");
    $("#nombre_compra").val("");
    $("#nombre_tipocompra").val("");
    $("#nombre_proveedor").val("");
    $("#id_proveedor").val("0");
    $("#id_tipoccompra").val("0");
    $("#estado_compra").val("");

}
function agregarLinea() {
    $("#id_detallecompra").val("0");
    $("#id_producto").val("0");
    $("#nombre_producto").val("");
    $("#costo_producto").val("");
    $("#iva_producto").val("");
    $("#cantidad_productocompra").val("0");
    $("#panelLinea").fadeIn("slow");
    $("#panelPrograma").fadeOut("slow");
    $("#id_producto").focus();
    $("#id_producto").select();
    $("#botonAgregarLinea").prop('disabled', false);
    $("#botonModificarLinea").prop('disabled', true);
    $("#botonEliminarLinea").prop('disabled', true);
    siguienteCampo("#horas_detallecompra", "#botonAgregarLinea", true);
}
function editarLinea(id) {
    $("#id_detallecompra").val(id);
    $("#id_producto").val("0");
    $("#nombre_producto").val("");
    $("#costo_producto").val("");
    $("#iva_producto").val("");
    $("#total_detallecompra").val("");
    $("#cantidad_productocompra").val("0");
    $("#panelLinea").fadeIn("slow");
    $("#panelPrograma").fadeOut("slow");
    $("#id_producto").focus();
    $("#id_producto").select();
    $("#botonAgregarLinea").prop('disabled', true);
    $("#botonModificarLinea").prop('disabled', false);
    $("#botonEliminarLinea").prop('disabled', false);
    buscarIdCompraDetalle();
    siguienteCampo("#cantidad_productocompra", "#botonModificarLinea", true);
}
// comprasproductos
function buscarIdCompraDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    // alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdCompraDetalle.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#id_producto").val(json.id_producto);
            $("#nombre_producto").val(json.nombre_producto);
            $("#costo_producto").val(json.costo_producto);
            $("#iva_producto").val(json.iva_producto);
            $("#cantidad_productocompra").val(json.cantidad_productocompra);
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
function agregarCompraDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    var id_compra = $("#id_compra").val();
    datosFormulario += "&id_compra=" + id_compra;

    // alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/agregarCompraDetalle.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#panelLinea").fadeOut("slow");
            $("#panelPrograma").fadeIn("slow");
            buscarIdCompra();
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
function modificarCompraDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    var id_compra = $("#id_compra").val();
    datosFormulario += "&id_compra=" + id_compra;
    $.ajax({
        type: 'POST',
        url: 'jsp/modificarCompraDetalle.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#panelLinea").fadeOut("slow");
            $("#panelPrograma").fadeIn("slow");
            buscarIdCompra();
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
function eliminarCompraDetalle() {
    var datosFormulario = $("#formLinea").serialize();
    var id_compra = $("#id_compra").val();
    datosFormulario += "&id_compra=" + id_compra;
    alert("holaaas  " + datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/eliminarCompraDetalle.jsp',
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
            buscarIdCompra();

        },

        error: function (e) {
            $("#mensajes").html("No se pudo modificar los datos.");
            alert(error);
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
            $("#costo_producto").val(json.costo_producto);
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

function validarFormularioCompra() {

    var valor = true;
    var num = $("#numero_factura").val();


    var prov = $("#id_proveedor").val();

    var prod = $("#id_producto").val();
    var cant = $("#cantidad_productocompra").val();



    if (num === "") {
        valor = false;
        $("#numero_factura").val("");
        $("#numero_factura").focus();
        $("#mensajes").html("Numero de Factura No puede estar Vacio.");

    } else {
        if (prov === "0") {
            valor = false;

            $("#id_proveedor").val("");
            $("#id_proveedor").focus();
            $("#mensajes").html("Proveedor no puede estar vacio.");

        } else {

            if (prod === "0") {
                valor = false;

                $("#id_producto").val("");
                $("#id_producto").focus();
                $("#mensajes").html("Producto no puede estar vacio.");

            } else {
                if (cant === "0") {
                    valor = false;

                    $("#cantidad_productocompra").val("");
                    $("#cantidad_productocompra").focus();
                    $("#mensajes").html("Cantidad no puede estar vacia.");
                }



            }


        }
    }
    return valor;
}

//    
//    function Unidades(num){
//
//    switch(num)
//    {
//        case 1: return “UN”;
//        case 2: return “DOS”;
//        case 3: return “TRES”;
//        case 4: return “CUATRO”;
//        case 5: return “CINCO”;
//        case 6: return “SEIS”;
//        case 7: return “SIETE”;
//        case 8: return “OCHO”;
//        case 9: return “NUEVE”;
//    }
//
//    return “”;
//}//Unidades()
//
//function Decenas(num){
//
//    decena = Math.floor(num/10);
//    unidad = num – (decena * 10);
//
//    switch(decena)
//    {
//        case 1:
//            switch(unidad)
//            {
//                case 0: return “DIEZ”;
//                case 1: return “ONCE”;
//                case 2: return “DOCE”;
//                case 3: return “TRECE”;
//                case 4: return “CATORCE”;
//                case 5: return “QUINCE”;
//                default: return “DIECI” + Unidades(unidad);
//            }
//        case 2:
//            switch(unidad)
//            {
//                case 0: return “VEINTE”;
//                default: return “VEINTI” + Unidades(unidad);
//            }
//        case 3: return DecenasY(“TREINTA”, unidad);
//        case 4: return DecenasY(“CUARENTA”, unidad);
//        case 5: return DecenasY(“CINCUENTA”, unidad);
//        case 6: return DecenasY(“SESENTA”, unidad);
//        case 7: return DecenasY(“SETENTA”, unidad);
//        case 8: return DecenasY(“OCHENTA”, unidad);
//        case 9: return DecenasY(“NOVENTA”, unidad);
//        case 0: return Unidades(unidad);
//    }
//}//Unidades()
//
//function DecenasY(strSin, numUnidades) {
//    if (numUnidades > 0)
//    return strSin + ” Y ” + Unidades(numUnidades)
//
//    return strSin;
//}//DecenasY()
//
//function Centenas(num) {
//    centenas = Math.floor(num / 100);
//    decenas = num – (centenas * 100);
//
//    switch(centenas)
//    {
//        case 1:
//            if (decenas > 0)
//                return “CIENTO ” + Decenas(decenas);
//            return “CIEN”;
//        case 2: return “DOSCIENTOS ” + Decenas(decenas);
//        case 3: return “TRESCIENTOS ” + Decenas(decenas);
//        case 4: return “CUATROCIENTOS ” + Decenas(decenas);
//        case 5: return “QUINIENTOS ” + Decenas(decenas);
//        case 6: return “SEISCIENTOS ” + Decenas(decenas);
//        case 7: return “SETECIENTOS ” + Decenas(decenas);
//        case 8: return “OCHOCIENTOS ” + Decenas(decenas);
//        case 9: return “NOVECIENTOS ” + Decenas(decenas);
//    }
//
//    return Decenas(decenas);
//}//Centenas()
//
//function Seccion(num, divisor, strSingular, strPlural) {
//    cientos = Math.floor(num / divisor)
//    resto = num – (cientos * divisor)
//
//    letras = “”;
//
//    if (cientos > 0)
//        if (cientos > 1)
//            letras = Centenas(cientos) + ” ” + strPlural;
//        else
//            letras = strSingular;
//
//    if (resto > 0)
//        letras += “”;
//
//    return letras;
//}//Seccion()
//
//function Miles(num) {
//    divisor = 1000;
//    cientos = Math.floor(num / divisor)
//    resto = num – (cientos * divisor)
//
//    strMiles = Seccion(num, divisor, “UN MIL”, “MIL”);
//    strCentenas = Centenas(resto);
//
//    if(strMiles == “”)
//        return strCentenas;
//
//    return strMiles + ” ” + strCentenas;
//}//Miles()
//
//function Millones(num) {
//    divisor = 1000000;
//    cientos = Math.floor(num / divisor)
//    resto = num – (cientos * divisor)
//
//    strMillones = Seccion(num, divisor, “UN MILLON DE”, “MILLONES DE”);
//    strMiles = Miles(resto);
//
//    if(strMillones == “”)
//        return strMiles;
//
//    return strMillones + ” ” + strMiles;
//}//Millones()
//
//function NumeroALetras(num) {
//    var data = {
//        numero: num,
//        enteros: Math.floor(num),
//        centavos: (((Math.round(num * 100)) – (Math.floor(num) * 100))),
//        letrasCentavos: “”,
//        letrasMonedaPlural: 'Córdobas',//“PESOS”, 'Dólares', 'Bolívares', 'etcs'
//        letrasMonedaSingular: 'Córdoba', //“PESO”, 'Dólar', 'Bolivar', 'etc'
//
//        letrasMonedaCentavoPlural: “CENTAVOS”,
//        letrasMonedaCentavoSingular: “CENTAVO”
//    };
//
//    if (data.centavos > 0) {
//        data.letrasCentavos = “CON ” + (function (){
//            if (data.centavos == 1)
//                return Millones(data.centavos) + ” ” + data.letrasMonedaCentavoSingular;
//            else
//                return Millones(data.centavos) + ” ” + data.letrasMonedaCentavoPlural;
//            })();
//    };
//
//    if(data.enteros == 0)
//        return “CERO ” + data.letrasMonedaPlural + ” ” + data.letrasCentavos;
//    if (data.enteros == 1)
//        return Millones(data.enteros) + ” ” + data.letrasMonedaSingular + ” ” + data.letrasCentavos;
//    else
//        return Millones(data.enteros) + ” ” + data.letrasMonedaPlural + ” ” + data.letrasCentavos;
//}//NumeroALetras()
//
//    


function buscarIdCuenta() {
    var datosFormulario = $("#formPrograma").serialize();
    alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarIdCuenta.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);

            $("#id_compra").val(json.id_compra);
            $("#total_compra").val(json.total_compra);
            $("#id_cobroventa").val(json.id_cobroventa);
            $("#panelCuenta").fadeIn("slow");
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


function agregarCuenta() {
    var datosFormulario = $("#formCuenta").serialize();
    var id_compra = $("#id_compra").val();
    datosFormulario += "&id_compra=" + id_compra;

    alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/agregarCuenta.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {

            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);
            $("#panelCuenta").fadeOut("slow");
            $("#panelPrograma").fadeIn("slow");
            buscarIdCompra();
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
function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode();
    return (key >= 48 && key <= 57);
}


function format(input)
{
    var num = input.value.replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').join('').replace(/(?=\d*\.?)(\d{3})/g, '$1-');
        num = num.split('').reverse().join('').replace(/^[\.]/, '0');
        input.value = num;
    }


}


function number_format(amount, decimals) {



    amount += ''; // por si pasan un numero en vez de un string
    amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

    decimals = decimals || 0; // por si la variable no fue fue pasada

    // si no es un numero o es igual a cero retorno el mismo cero
    if (isNaN(amount) || amount === 0) 
        return parseFloat(0).toFixed(decimals);

    // si es mayor o menor que cero retorno el valor formateado como numero
    amount = '' + amount.toFixed(decimals);

    var amount_parts = amount.split('-'),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '-' + '$2');

    return amount_parts.join('-');
}


function buscarDuplicidad() {
    var datosFormulario = $("#formPrograma").serialize();
    alert(datosFormulario);
    $.ajax({
        type: 'POST',
        url: 'jsp/buscarduplicidad.jsp',
        data: datosFormulario,
        dataType: 'json',
        beforeSend: function (objeto) {
            $("#mensajes").html("Enviando datos al Servidor ...");
        },
        success: function (json) {
            $("#mensajes").html(json.mensaje);

            $("#numero_factura").val(json.numero_factura);
            alert(json.numero_factura);
            $("#id_proveedor").val(json.id_proveedor);
           alert(json.id_proveedor);
            

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