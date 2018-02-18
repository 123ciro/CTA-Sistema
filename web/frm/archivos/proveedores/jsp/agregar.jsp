<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.modelos.Ciudades"%>

<%@page import="org.json.simple.JSONObject"%>
<%@page import="javawebts.controladores.ProveedoresControlador"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%@page import="java.sql.ResultSet"%>
<%
    int id_proveedor = Integer.parseInt(request.getParameter("id_proveedor"));
    int id_ciudad = Integer.parseInt(request.getParameter("id_ciudad"));
    String nombre_proveedor = request.getParameter("nombre_proveedor");
     int ruc_proveedor = Integer.parseInt(request.getParameter("ruc_proveedor"));
    String direccion_proveedor = request.getParameter("direccion_proveedor");
    String telefono_proveedor = request.getParameter("telefono_proveedor");
    String correo_proveedor = request.getParameter("correo_proveedor");
 
   

String tipo = "error";
String mensaje = "Datos no agregados.";


Proveedores proveedor = new Proveedores();
proveedor.setId_proveedor(id_proveedor);
proveedor.setNombre_proveedor(nombre_proveedor);

proveedor.setDireccion_proveedor(direccion_proveedor);
proveedor.setTelefono_proveedor(telefono_proveedor);
proveedor.setCorreo_proveedor(correo_proveedor);
proveedor.setRuc_proveedor(ruc_proveedor);


Ciudades ciudad=new Ciudades();
ciudad.setId_ciudad(id_ciudad);
proveedor.setCiudad(ciudad);

if (ProveedoresControlador.agregar(proveedor)){
    tipo = "success";
    mensaje = "Datos agregados";
}

JSONObject obj = new JSONObject();
obj.put("tipo", tipo);
obj.put("mensaje", mensaje);
out.print(obj);
out.flush();
%>