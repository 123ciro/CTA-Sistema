



<%@page import="javawebts.modelos.Stocks"%>
<%@page import="javawebts.controladores.StocksControlador"%>
<%@page import="javawebts.controladores.DetallesVentasControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.DetallesVentas"%>
<%@page import="javawebts.modelos.Ventas"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%

    int id_detalleventa = Integer.parseInt(request.getParameter("id_detalleventa"));
    int cantidad_productoventa = Integer.parseInt(request.getParameter("cantidad_productoventa"));
    int id_venta = Integer.parseInt(request.getParameter("id_venta"));
  
    int id_producto = Integer.parseInt(request.getParameter("id_producto"));
    // int total_venta= con + 0; 
    int precioventa_producto = Integer.parseInt(request.getParameter("precioventa_producto"));
    int iva_producto = Integer.parseInt(request.getParameter("iva_producto"));
    int total_detalleventa = cantidad_productoventa * precioventa_producto;
    //int con=total_detalleventa;

    String tipo = "error";
    String mensaje = "Datos no agregados.";

    DetallesVentas detalleventa = new DetallesVentas();
    detalleventa.setId_detalleventa(id_detalleventa);
    detalleventa.setCantidad_productoventa(cantidad_productoventa);
    detalleventa.setTotal_detalleventa(total_detalleventa);

    Ventas venta = new Ventas();
        venta.setId_venta(id_venta);

    Productos producto = new Productos();

    producto.setId_producto(id_producto);

    detalleventa.setVenta(venta);

    detalleventa.setProducto(producto);
    
  
    
     Stocks stock = new Stocks();

    stock.setCantidad_stock(cantidad_productoventa);
  
    stock.setProducto(producto);

    StocksControlador.RestarProdStock(stock);

    if (DetallesVentasControlador.agregar(detalleventa)) {
        tipo = "success";
        mensaje = "Datos agregados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();

%>