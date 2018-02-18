


<%@page import="javawebts.modelos.Cobros"%>
<%@page import="javawebts.modelos.Timbrados"%>
<%@page import="javawebts.modelos.Puestos"%>
<%@page import="javawebts.modelos.Establecimientos"%>
<%@page import="javawebts.modelos.TiposPagos"%>
<%@page import="javawebts.controladores.VentasControlador"%>
<%@page import="javawebts.modelos.Ventas"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Usuarios"%>
<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.Proveedores"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%

 
    int id_venta = Integer.parseInt(request.getParameter("id_venta"));
 
    int id_tipopago = Integer.parseInt(request.getParameter("id_tipopago"));
    int id_cobroventa = Integer.parseInt(request.getParameter("id_cobroventa"));
    int total_venta = Integer.parseInt(request.getParameter("total_venta"));


  
    String tipo = "error";
    String mensaje = "Datos no agregados.";

     Ventas venta = new Ventas();
    venta.setId_venta(id_venta);
      TiposPagos pago = new TiposPagos();
    pago.setId_tipopago(id_tipopago);
    
   Cobros cobro = new Cobros();
    cobro.setId_cobroventa(id_cobroventa);
    cobro.setTotal_venta(total_venta);
  cobro.setVenta(venta);
    cobro.setTipopago(pago);
    
   
    VentasControlador.modificarestadoventaCobro(venta);

    if (VentasControlador.agregarCobro(cobro)) {
        tipo = "success";
        mensaje = "Datos agregados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    
    out.print(obj);
    out.flush();

%>