


<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Usuarios"%>
<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.Proveedores"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
      
      
       
    
    int id_compra = Integer.parseInt(request.getParameter("id_compra"));
   int id_usuario = Integer.parseInt(request.getParameter("id_usuario"));
    int id_proveedor = Integer.parseInt(request.getParameter("id_proveedor")); 
    int total_compra =0;
  String sfecha_compra = request.getParameter("fecha_compra");
 
  
  String estado_compra = request.getParameter("estado_compra");
  String numero_factura = request.getParameter("numero_factura");
 // String nombre_usuario = request.getParameter("nombre_usuario");
    java.sql.Date fecha_compra = Utiles.stringToSqlDate(sfecha_compra);
    
     
    
           
   
     
       
    
    String tipo = "error";
    String mensaje = "Datos no agregados.";
    
    Proveedores proveedor = new Proveedores();
    proveedor.setId_proveedor(id_proveedor);
   
    
    
   
         Usuarios usuario = new Usuarios();
            usuario.setId_usuario(id_usuario);
      //      usuario.setNombre_usuario(nombre_usuario);
    Compras compra = new Compras();
    compra.setId_compra(id_compra);
    compra.setNumero_factura(numero_factura);
   compra.setEstado_compra(estado_compra);
    compra.setFecha_compra(fecha_compra);
    compra.setTotal_compra(total_compra);
    compra.setProveedor(proveedor);
      compra.setUsuario(usuario);
    
    if (ComprasControlador.agregar(compra)) {
        tipo = "success";
        mensaje = "Datos agregados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("id_compra", String.valueOf(compra.getId_compra()));
    out.print(obj);
    out.flush();
    
%>