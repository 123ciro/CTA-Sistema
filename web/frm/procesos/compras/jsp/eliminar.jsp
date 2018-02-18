








<%@page import="javawebts.controladores.DetallesComprasControlador"%>
<%@page import="javawebts.modelos.DetallesCompras"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Compras"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_compra = Integer.parseInt(request.getParameter("id_compra"));

    String tipo = "error";
    String mensaje = "Datos no eliminados.";

    Compras compra = new Compras();
    compra.setId_compra(id_compra);
    DetallesCompras detallecompra = new DetallesCompras();
    detallecompra.setCompra(compra);
    ComprasControlador.modificarestado(compra);
    if (DetallesComprasControlador.eliminarcompra(detallecompra)) {
        tipo = "success";
        mensaje = "Datos eliminados.";

    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();
%>