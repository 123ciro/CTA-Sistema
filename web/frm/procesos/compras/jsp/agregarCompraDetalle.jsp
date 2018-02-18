



<%@page import="javawebts.controladores.StocksControlador"%>
<%@page import="javawebts.modelos.Stocks"%>
<%@page import="javawebts.controladores.ProductosControlador"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.controladores.DetallesComprasControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.DetallesCompras"%>
<%@page import="javawebts.modelos.Compras"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%

    int id_detallecompra = Integer.parseInt(request.getParameter("id_detallecompra"));
    int cantidad_productocompra = Integer.parseInt(request.getParameter("cantidad_productocompra"));
    int id_compra = Integer.parseInt(request.getParameter("id_compra"));
    int id_producto = Integer.parseInt(request.getParameter("id_producto"));
    // int total_compra= con + 0; 
    int costo_producto = Integer.parseInt(request.getParameter("costo_producto"));
    int iva_producto = Integer.parseInt(request.getParameter("iva_producto"));
    int total_detallecompra = cantidad_productocompra * costo_producto;
    //int con=total_detallecompra;

    String tipo = "error";
    String mensaje = "Datos no agregados.";

    DetallesCompras detallecompra = new DetallesCompras();
    detallecompra.setId_detallecompra(id_detallecompra);
    detallecompra.setCantidad_productocompra(cantidad_productocompra);
    detallecompra.setTotal_detallecompra(total_detallecompra);

    Compras compra = new Compras();
    compra.setId_compra(id_compra);

    Productos producto = new Productos();

    producto.setId_producto(id_producto);

    detallecompra.setCompra(compra);
    detallecompra.setProducto(producto);

    if (DetallesComprasControlador.agregar(detallecompra)) {
        tipo = "success";
        mensaje = "Datos agregados.";
    }

    producto = new Productos();

    producto.setId_producto(id_producto);
    producto.setCosto_producto(costo_producto);

    ProductosControlador.modificarC(producto);

    Stocks stock = new Stocks();

    stock.setCantidad_stock(cantidad_productocompra);
  
    stock.setProducto(producto);

    StocksControlador.agregarProdStock(stock);

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();

%>