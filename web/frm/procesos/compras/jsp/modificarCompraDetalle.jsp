

<%@page import="javawebts.controladores.DetallesComprasControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.DetallesCompras"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    
    int id_detallecompra = Integer.parseInt(request.getParameter("id_detallecompra"));
    int cantidad_productocompra = Integer.parseInt(request.getParameter("cantidad_productocompra"));
   int id_compra = Integer.parseInt(request.getParameter("id_compra"));
    int costo_producto = Integer.parseInt(request.getParameter("costo_producto")); 
    int id_producto = Integer.parseInt(request.getParameter("id_producto")); 
    int total_detallecompra = cantidad_productocompra*costo_producto; 
    
    

    
    String tipo = "error";
    String mensaje = "Datos no modificados.";
    
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
      
    if (DetallesComprasControlador.modificar(detallecompra)) {
        tipo = "success";
        mensaje = "Datos modificados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();
    
%>