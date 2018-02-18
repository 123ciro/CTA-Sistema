

<%@page import="javawebts.modelos.DetallesVentas"%>
<%@page import="javawebts.controladores.DetallesVentasControlador"%>
<%@page import="javawebts.controladores.VentasControlador"%>
<%@page import="javawebts.modelos.Ventas"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_venta = Integer.parseInt(request.getParameter("id_venta"));

    String tipo = "error";
    String mensaje = "Datos no eliminados.";

    Ventas venta = new Ventas();
    venta.setId_venta(id_venta);

    DetallesVentas detalleventa = new DetallesVentas();
    detalleventa.setVenta(venta);
    VentasControlador.modificarestadoventa(venta);
    if (DetallesVentasControlador.eliminarventa(detalleventa)) {
        tipo = "success";
        mensaje = "Datos eliminados.";

    }

   

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();
%>