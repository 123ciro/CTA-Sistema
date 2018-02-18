

<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.controladores.DetallesComprasControlador"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%@page import="javawebts.modelos.Compras"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%

    int id_compra = 0;
    if (request.getParameter("id_compra") != "") {
        id_compra = Integer.parseInt(request.getParameter("id_compra"));

    }

    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";

    Compras compras = ComprasControlador.buscarId(id_compra);
    if (id_compra != 0) {
        tipo = "success";
        mensaje = "Datos encontrados.";
        nuevo = "false";
    } else {
        compras.setEstado_compra("ACTIVO");
    }

    String contenido_detalle = DetallesComprasControlador.buscarIdCompra(id_compra);

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_compra", String.valueOf(compras.getId_compra()));
    obj.put("id_proveedor", String.valueOf(compras.getProveedor().getId_proveedor()));
    obj.put("nombre_proveedor", compras.getProveedor().getNombre_proveedor());
    obj.put("ruc_proveedor", compras.getProveedor().getRuc_proveedor());
    obj.put("dv_proveedor", compras.getProveedor().getDv_proveedor());
    obj.put("numero_factura", compras.getNumero_factura());
    obj.put("estado_compra", compras.getEstado_compra());
   // obj.put("id_usuario", compras.getUsuario().getId_usuario());
   // obj.put("nombre_usuario", compras.getUsuario().getNombre_usuario());

    obj.put("fecha_compra", String.valueOf(compras.getFecha_compra()));

    // obj.put("fecha_compra", compras.getFecha_compra());
    obj.put("contenido_detalle", contenido_detalle);

    out.print(obj);
    out.flush();
%>