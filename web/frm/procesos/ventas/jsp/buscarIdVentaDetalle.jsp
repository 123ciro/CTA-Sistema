



<%@page import="javawebts.controladores.DetallesVentasControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.Ventas"%>

<%@page import="javawebts.modelos.DetallesVentas"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_detalleventa = Integer.parseInt(request.getParameter("id_detalleventa"));

    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";

    DetallesVentas detalleventa = DetallesVentasControlador.buscarId(id_detalleventa);
    if (detalleventa != null) {
        tipo = "success";
        mensaje = "Datos encontrados.";
        nuevo = "false";
    } else {
        detalleventa = new DetallesVentas();
        detalleventa.setId_detalleventa(0);
        
        Ventas venta = new Ventas();
        venta.setId_venta(0);
        detalleventa.setVenta(venta);
        
        Productos producto = new Productos();
        producto.setId_producto(0);
        detalleventa.setProducto(producto);
        
   
    }
    
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_detalleventa", String.valueOf(detalleventa.getId_detalleventa()));
    obj.put("id_venta", String.valueOf(detalleventa.getVenta().getId_venta()));
    obj.put("id_producto", String.valueOf(detalleventa.getProducto().getId_producto()));
    obj.put("nombre_producto", detalleventa.getProducto().getNombre_producto());
    obj.put("precioventa_producto", detalleventa.getProducto().getPrecioventa_producto());
    obj.put("iva_producto", detalleventa.getProducto().getIva_producto());
    obj.put("cantidad_productoventa", String.valueOf(detalleventa.getCantidad_productoventa()));    
    out.print(obj);
    out.flush();
%>