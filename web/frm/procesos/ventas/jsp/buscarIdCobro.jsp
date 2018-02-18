




<%@page import="javawebts.modelos.TiposPagos"%>
<%@page import="javawebts.controladores.VentasControlador"%>

<%@page import="javawebts.modelos.Cobros"%>

<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.Ventas"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_venta = Integer.parseInt(request.getParameter("id_venta"));

    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";
    
    Cobros cobro=new Cobros();
    
    Ventas venta=new Ventas();
    venta.setId_venta(id_venta);

     venta = VentasControlador.buscarIdCobro(id_venta,cobro);
    if (venta != null) {
        tipo = "success";
        mensaje = "Datos encontrados.";
        nuevo = "false";
    } else{
        TiposPagos pago=new TiposPagos();
        pago.setId_tipopago(1);
        pago.setNombre_tipopago("EFECTIVO");
    }
    
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_cobroventa", String.valueOf(cobro.getId_cobroventa()));
    obj.put("id_venta", String.valueOf(cobro.getVenta().getId_venta()));
    System.out.println("valor de la venta " +cobro.getVenta().getId_venta());
    //obj.put("id_tipopago", String.valueOf(cobro.getTipopago().getId_tipopago()));
   // obj.put("nombre_tipopago", cobro.getTipopago().getNombre_tipopago());
    obj.put("total_venta",cobro.getTotal_venta());

   //obj.put("iva_producto", detalleventa.getProducto().getIva_producto());
   // obj.put("cantidad_productoventa", String.valueOf(detalleventa.getCantidad_productoventa()));    
   out.print(obj);
    out.flush();
%>