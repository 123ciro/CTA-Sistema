




<%@page import="javawebts.controladores.ComprasControlador"%>

<%@page import="javawebts.modelos.Cuentas"%>

<%@page import="javawebts.modelos.Productos"%>
<%@page import="javawebts.modelos.Compras"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_compra = Integer.parseInt(request.getParameter("id_compra"));

    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";
    
    Cuentas cuenta=new Cuentas();
    
    Compras compra=new Compras();
    compra.setId_compra(id_compra);

     compra = ComprasControlador.buscarIdCuenta(id_compra,cuenta);
    if (compra != null) {
        tipo = "success";
        mensaje = "Datos encontrados.";
        nuevo = "false";
    } 
    
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_cuenta", String.valueOf(cuenta.getId_cuenta()));
    obj.put("id_compra", String.valueOf(cuenta.getCompra().getId_compra()));
   System.out.println("valor de la compra " +cuenta.getCompra().getId_compra());
    //obj.put("id_tipopago", String.valueOf(cuenta.getTipopago().getId_tipopago()));
   // obj.put("nombre_tipopago", cuenta.getTipopago().getNombre_tipopago());
    obj.put("total_compra",cuenta.getTotal_compra());

   //obj.put("iva_producto", detallecompra.getProducto().getIva_producto());
   // obj.put("cantidad_productocompra", String.valueOf(detallecompra.getCantidad_productocompra()));    
   out.print(obj);
    out.flush();
%>