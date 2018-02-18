<%@page import="javawebts.controladores.PermisosControlador"%>
<%@page import="java.util.ArrayList"%>

<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    String nombre_permiso=request.getParameter("bnombre_permiso");
    int pagina=Integer.parseInt(request.getParameter("bpagina"));
    
    String mensaje="Busqueda exitosa";
    String contenido=PermisosControlador.buscarOrdenPermiso(nombre_permiso,pagina);
    JSONObject obj=new JSONObject();
    obj.put("mensaje",mensaje);
    obj.put("contenido",contenido);
    out.print(obj);
    out.flush();
%>
