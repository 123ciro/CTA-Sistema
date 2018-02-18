<%@page import="javawebts.controladores.ProductosControlador"%>
<%@page import="javawebts.modelos.Marcas"%>
<%@page import="javawebts.modelos.Categorias"%>
<%@page import="javawebts.modelos.Productos"%>
<%@page import="org.json.simple.JSONObject"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    int id_producto = Integer.parseInt(request.getParameter("id_producto"));
    String nombre_producto = request.getParameter("nombre_producto");
   int costo_producto = Integer.parseInt(request.getParameter("costo_producto"));
   int precioventa_producto = Integer.parseInt(request.getParameter("precioventa_producto"));
   int iva_producto = Integer.parseInt(request.getParameter("iva_producto"));
    int id_categoria = Integer.parseInt(request.getParameter("id_categoria"));
    int id_marca = Integer.parseInt(request.getParameter("id_marca"));

    String tipo = "error";
    Productos producto = new Productos();
    producto.setId_producto(id_producto);
    producto.setNombre_producto(nombre_producto);
    producto.setCosto_producto(costo_producto);
    producto.setPrecioventa_producto(precioventa_producto);
    producto.setIva_producto(iva_producto);
    Categorias categoria = new Categorias();
    categoria.setId_categoria(id_categoria);
    Marcas marca = new Marcas();
    marca.setId_marca(id_marca);
    producto.setCategoria(categoria);
    producto.setMarca(marca);

    String mensaje = "Datos no modificados";
    if (ProductosControlador.modificar(producto)) {
        tipo = "success";
        mensaje = "Datos modificados correctamente";
    };

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", String.valueOf(mensaje));
    out.print(obj);
    out.flush();
%>
