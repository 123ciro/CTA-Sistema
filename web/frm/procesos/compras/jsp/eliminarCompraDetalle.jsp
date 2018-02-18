
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.Stocks"%>
<%@page import="javawebts.controladores.StocksControlador"%>
<%@page import="javawebts.controladores.DetallesComprasControlador"%>
<%@page import="javawebts.modelos.DetallesCompras"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>



<%  int id_compra = Integer.parseInt(request.getParameter("id_compra"));
    int id_producto = Integer.parseInt(request.getParameter("id_producto"));
    int id_detallecompra = Integer.parseInt(request.getParameter("id_detallecompra"));
    int cantidad_productocompra = Integer.parseInt(request.getParameter("cantidad_productocompra"));

    String tipo = "error";
    String mensaje = "Datos no eliminados.";

    Compras compra = new Compras();
    compra.setId_compra(id_compra);

    DetallesCompras detallecompra = new DetallesCompras();
    detallecompra.setId_detallecompra(id_detallecompra);
    detallecompra.setCompra(compra);

    if (DetallesComprasControlador.eliminar(detallecompra)) {
        tipo = "success";
        mensaje = "Datos eliminados.";
    }

    Productos producto = new Productos();
    producto.setId_producto(id_producto);

    Stocks stock = new Stocks();

    stock.setCantidad_stock(cantidad_productocompra);

    stock.setProducto(producto);

    StocksControlador.RestarProdStock(stock);

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();
%>