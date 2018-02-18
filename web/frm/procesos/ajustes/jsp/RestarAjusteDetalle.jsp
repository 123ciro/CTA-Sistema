



<%@page import="javawebts.controladores.StocksControlador"%>
<%@page import="javawebts.modelos.Stocks"%>
<%@page import="javawebts.controladores.ProductosControlador"%>
<%@page import="javawebts.controladores.AjustesControlador"%>
<%@page import="javawebts.controladores.DetallesAjustesControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.DetallesAjustes"%>
<%@page import="javawebts.modelos.Ajustes"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%

    int id_detalleajuste = Integer.parseInt(request.getParameter("id_detalleajuste"));
    int cantidad_ajuste = Integer.parseInt(request.getParameter("cantidad_ajuste"));
    int id_ajuste = Integer.parseInt(request.getParameter("id_ajuste"));
    int id_producto = Integer.parseInt(request.getParameter("id_producto"));
    String detalle_ajuste = "RESTADO";
    // int total_ajuste= con + 0; 
   
    
    //int con=total_detalleajuste;

    String tipo = "error";
    String mensaje = "Datos no agregados.";

    DetallesAjustes detalleajuste = new DetallesAjustes();
    detalleajuste.setId_detalleajuste(id_detalleajuste);
        
    detalleajuste.setCantidad_ajuste(cantidad_ajuste);
    detalleajuste.setDetalle_ajuste(detalle_ajuste);
    

    Ajustes ajuste = new Ajustes();
    ajuste.setId_ajuste(id_ajuste);

    Productos producto = new Productos();

    producto.setId_producto(id_producto);

    detalleajuste.setAjuste(ajuste);
    detalleajuste.setProducto(producto);

    if (DetallesAjustesControlador.agregar(detalleajuste)) {
        tipo = "success";
        mensaje = "Datos agregados.";
    }

    producto = new Productos();

    producto.setId_producto(id_producto);
   

    ProductosControlador.modificarC(producto);

    Stocks stock = new Stocks();

    stock.setCantidad_stock(cantidad_ajuste);
  
    stock.setProducto(producto);

    StocksControlador.RestarProdStock(stock);

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();

%>