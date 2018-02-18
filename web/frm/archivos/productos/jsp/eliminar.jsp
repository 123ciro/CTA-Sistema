

<%@page import="javawebts.controladores.ProductosControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="org.json.simple.JSONObject"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    int id_producto = Integer.parseInt(request.getParameter("id_producto"));

    String tipo = "error";
    String mensaje = "Datos no eliminados";

    Productos producto = new Productos();
    producto.setId_producto(id_producto);
    
    if (ProductosControlador.eliminar(producto)) {
        tipo = "success";
        mensaje = "Datos eliminados correctamente";
    };

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", String.valueOf(mensaje));
    out.print(obj);
    out.flush();
%>
