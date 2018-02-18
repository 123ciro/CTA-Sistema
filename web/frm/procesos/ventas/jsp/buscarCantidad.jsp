

<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.controladores.StocksControlador"%>
<%@page import="javawebts.modelos.Stocks"%>
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

 int id_producto = Integer.parseInt(request.getParameter("id_producto"));
 
 int cantidad_productoventa = Integer.parseInt(request.getParameter("cantidad_productoventa"));
 
    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";

  
  //  DetallesVentas detalle=new DetallesVentas();
  //detalle.setCantidad_productoventa(cantidad_productoventa);
    
    Productos producto= new Productos();
    producto.setId_producto(id_producto);
    
     Stocks stock =new Stocks();
    stock.setProducto(producto);
   stock.setCantidad_stock(cantidad_productoventa);
   
   
   
    //venta.setNumero_factura_venta(numero_factura_venta);

     stock = StocksControlador.buscarCantidad(stock);
  
     if(stock.getCantidad_stock()>0){
          mensaje = "CANTIDAD  DISPONIBLE EN EL STOCK.";
     }else{
          mensaje = "CANTIDAD NO DISPONIBLE EN EL STOCK.";
     }
        

   
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_producto", String.valueOf(stock.getProducto().getId_producto()));
    obj.put("cantidad_productoventa", stock.getCantidad_stock());
    

    out.print(obj);
    out.flush();
%>