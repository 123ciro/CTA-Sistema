

<%@page import="javawebts.modelos.DetallesVentas"%>
<%@page import="javawebts.modelos.TiposPagos"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="javawebts.controladores.DetallesVentasControlador"%>
<%@page import="javawebts.controladores.VentasControlador"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%@page import="javawebts.modelos.Ventas"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    String total = "";
    int numero_factura_venta = 0;

   
    int id_venta = 0;
    if (request.getParameter("id_venta") != "") {
        id_venta = Integer.parseInt(request.getParameter("id_venta"));
 
    }
  //  int id_detalleventa = Integer.parseInt(request.getParameter("id_detalleventa"));
    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";

    DetallesVentas detalleventa = new DetallesVentas();
   // detalleventa.setId_detalleventa(id_detalleventa);
    Ventas venta = new Ventas();

    venta.setNumero_factura_venta(numero_factura_venta);
    
    detalleventa.setVenta(venta);

    Ventas ventas = VentasControlador.buscarId(id_venta);
    if (id_venta != 0) {
        tipo = "success";
        mensaje = "Datos encontrados.";
        nuevo = "false";

    }

    String contenido_detalle = DetallesVentasControlador.buscarIdVenta(id_venta, detalleventa);

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_venta", String.valueOf(ventas.getId_venta()));
    obj.put("id_cliente", String.valueOf(ventas.getCliente().getId_cliente()));
    obj.put("nombre_cliente", ventas.getCliente().getNombre_cliente());
    obj.put("ruc_cliente", ventas.getCliente().getRuc_cliente());
    obj.put("dv_cliente", ventas.getCliente().getDv_cliente());
    obj.put("estado_venta", ventas.getEstado_venta());
    obj.put("numero_factura_venta", ventas.getNumero_factura_venta());
    obj.put("id_timbrado", ventas.getTimbrado().getId_timbrado());
    obj.put("total", detalleventa.getLetra());

    System.out.println("numero" + detalleventa.getLetra());

    //obj.put("id_tipopago", String.valueOf(ventas.getPago().getId_tipopago()));
    //obj.put("nombre_tipopago", ventas.getPago().getNombre_tipopago());
    obj.put("fecha_venta", String.valueOf(ventas.getFecha_venta()));

    //  obj.put("id_usuario", ventas.getUsuario().getId_usuario());
    // obj.put("nombre_usuario", ventas.getUsuario().getNombre_usuario());
    obj.put("contenido_detalle", contenido_detalle);

    out.print(obj);
    out.flush();
%>