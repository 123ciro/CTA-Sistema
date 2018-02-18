

<%@page import="javawebts.modelos.Stocks"%>
<%@page import="javawebts.controladores.StocksControlador"%>
<%@page import="javawebts.controladores.ProductosControlador"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.Marcas"%>
<%@page import="javawebts.modelos.Categorias"%>
<%@page import="org.json.simple.JSONObject"%>

<%@page import="java.sql.ResultSet"%>
<%
    int id_producto = Integer.parseInt(request.getParameter("id_producto"));
    String nombre_producto = request.getParameter("nombre_producto");
    int costo_producto = Integer.parseInt(request.getParameter("costo_producto"));
     int precioventa_producto = Integer.parseInt(request.getParameter("precioventa_producto"));
    int iva_producto = Integer.parseInt(request.getParameter("iva_producto"));
    int id_categoria = Integer.parseInt(request.getParameter("id_categoria"));
    int id_marca = Integer.parseInt(request.getParameter("id_marca"));
    int min_stock = Integer.parseInt(request.getParameter("min_stock"));
    int max_stock = Integer.parseInt(request.getParameter("max_stock"));
    int cantidad_stock = 0;
    

String tipo = "error";
String mensaje = "Datos no agregados.";
Categorias categoria = new Categorias();
categoria.setId_categoria(id_categoria);

Marcas marca = new Marcas();
marca.setId_marca(id_marca);

Productos producto = new Productos();
producto.setId_producto(id_producto);
producto.setNombre_producto(nombre_producto);
producto.setCosto_producto(costo_producto);
producto.setPrecioventa_producto(precioventa_producto);
producto.setIva_producto(iva_producto);
producto.setCategoria(categoria);
producto.setMarca(marca);

if (ProductosControlador.agregar(producto)){
    tipo = "success";
    mensaje = "Datos agregados";
}

//producto = new Productos();
//producto.setId_producto(id_producto);


Stocks stock=new Stocks();



stock.setCantidad_stock(cantidad_stock);
stock.setMax_stock(max_stock);
stock.setMin_stock(min_stock);
stock.setProducto(producto);


StocksControlador.agregar(stock);

        
        
        

JSONObject obj = new JSONObject();
obj.put("tipo", tipo);
obj.put("mensaje", mensaje);

 obj.put("id_producto", String.valueOf(producto.getId_producto()));
 System.out.println(producto.getId_producto());
      
out.print(obj);
out.flush();
%>