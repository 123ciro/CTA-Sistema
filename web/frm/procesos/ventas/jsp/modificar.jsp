


<%@page import="javawebts.modelos.TiposPagos"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="javawebts.controladores.VentasControlador"%>
<%@page import="javawebts.utiles.Utiles"%>

<%@page import="javawebts.modelos.Ventas"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_venta = Integer.parseInt(request.getParameter("id_venta"));
    int id_cliente = Integer.parseInt(request.getParameter("id_cliente"));

   int id_tipopago = Integer.parseInt(request.getParameter("id_tipopago")); 
   
     String sFecha_venta = request.getParameter("fecha_venta");
    java.sql.Date Fecha_venta = Utiles.stringToSqlDate(sFecha_venta);
    
    String tipo = "error";
    String mensaje = "Datos no modificados.";

    Clientes cliente = new Clientes();
    cliente.setId_cliente(id_cliente);
     
    TiposPagos pago=new TiposPagos();
    pago.setId_tipopago(id_tipopago);

    Ventas venta = new Ventas();
    venta.setId_venta(id_venta);
   
    venta.setFecha_venta(Fecha_venta);
    venta.setCliente(cliente);
    venta.setPago(pago);
   
    if (VentasControlador.modificar(venta)) {
        tipo = "success";
        mensaje = "Datos modificados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();
%>