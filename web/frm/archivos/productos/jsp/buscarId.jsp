<%@page import="javawebts.controladores.StocksControlador"%>
<%@page import="javawebts.modelos.Stocks"%>
<%@page import="javawebts.controladores.ProductosControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="org.json.simple.JSONObject"%>

<%
    
   
    int id_producto = 0;
    if (request.getParameter("id_producto") != "") {
        id_producto = Integer.parseInt(request.getParameter("id_producto"));
    }
    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";
    Productos producto = new Productos();
   
    
    producto.setId_producto(id_producto);
    
    Stocks stock=new Stocks();
    stock.setProducto(producto);

    producto = ProductosControlador.buscarId(producto);
    if (producto.getId_producto() != 0) {
        tipo = "success";
        mensaje = "Datos encontrados";
        nuevo = "false";
    }
     stock = StocksControlador.buscarId(stock);
    
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_producto", producto.getId_producto());
    obj.put("nombre_producto", producto.getNombre_producto());
    obj.put("costo_producto", producto.getCosto_producto());
    obj.put("precioventa_producto", producto.getPrecioventa_producto());
    obj.put("iva_producto", producto.getIva_producto());
    obj.put("id_marca", producto.getMarca().getId_marca());
    obj.put("nombre_marca", producto.getMarca().getNombre_marca());
    obj.put("id_categoria", producto.getCategoria().getId_categoria());
    obj.put("nombre_categoria", producto.getCategoria().getNombre_categoria());
    obj.put("min_stock", stock.getMin_stock());
    System.out.println( stock.getMin_stock());
    obj.put("max_stock",stock.getMax_stock());
    System.out.println( stock.getMax_stock());
    out.print(obj);
    out.flush();
%>