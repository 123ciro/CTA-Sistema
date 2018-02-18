


<%@page import="javawebts.modelos.Usuarios"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.utiles.Utiles"%>

<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_compra = Integer.parseInt(request.getParameter("id_compra"));
    int id_proveedor = Integer.parseInt(request.getParameter("id_proveedor"));
    int id_usuario = Integer.parseInt(request.getParameter("id_usuario"));

     String numero_factura = request.getParameter("numero_factura");
     String estado_compra = request.getParameter("estado_compra");
 
   
     String sFecha_compra = request.getParameter("fecha_compra");
    java.sql.Date Fecha_compra = Utiles.stringToSqlDate(sFecha_compra);
    
    String tipo = "error";
    String mensaje = "Datos no modificados.";

    Proveedores proveedor = new Proveedores();
    proveedor.setId_proveedor(id_proveedor);
    Usuarios usuario=new Usuarios();
    usuario.setId_usuario(id_usuario);

    Compras compra = new Compras();
    compra.setId_compra(id_compra);
    compra.setNumero_factura(numero_factura);
    compra.setEstado_compra(estado_compra);
  
    compra.setFecha_compra(Fecha_compra);
    compra.setProveedor(proveedor);
   
    if (ComprasControlador.modificar(compra)) {
        tipo = "success";
        mensaje = "Datos modificados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    out.print(obj);
    out.flush();
%>